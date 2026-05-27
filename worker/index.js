const CONGRESS_API_BASE = 'https://api.congress.gov/v3';

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(runUpdate(env));
  },

  // Remove or guard with a secret before production.
  // Lets you trigger manually via HTTP GET during development.
  async fetch(request, env, ctx) {
    const limit = new URL(request.url).searchParams.get('limit');
    ctx.waitUntil(runUpdate(env, limit ? parseInt(limit) : null));
    return new Response('Update triggered', { status: 202 });
  },
};

async function runUpdate(env, devLimit = null) {
  const congress = currentCongressNumber();
  const today = new Date().toISOString().slice(0, 10);
  console.log(`Updating congress ${congress} for ${today}`);

  const bills = await fetchAllBills(env, congress);
  console.log(`Fetched ${bills.length} bills for congress ${congress}`);

  let pending = await filterUnsynced(env, bills, today);
  if (devLimit) pending = pending.slice(0, devLimit);
  console.log(`${pending.length} bills need processing (${bills.length - pending.length} already synced today)`);

  let processed = 0;
  for (const billSummary of pending) {
    try {
      await processBill(env, billSummary, congress, today);
      processed++;
    } catch (err) {
      console.error(`Failed ${billSummary.type} ${billSummary.number}:`, err.message);
    }
  }

  const remaining = await filterUnsynced(env, bills, today);

  if (remaining.length > 0 && processed > 0 && env.WORKER_URL) {
    // Made progress but still have bills left — trigger another run to continue
    console.log(`${remaining.length} bills remaining, triggering continuation...`);
    await fetch(env.WORKER_URL, {
      headers: { Authorization: `Bearer ${env.TRIGGER_SECRET}` }
    }).catch(err => console.error('Self-invoke failed:', err.message));
  } else {
    // All done (or no progress made) — compute co-occurrences
    await computeCoOccurrences(env, congress);
  }
}

// Returns only bills that haven't been synced today yet
async function filterUnsynced(env, bills, today) {
  if (bills.length === 0) return [];

  // Fetch all bills for this congress that were already synced today
  const { results } = await env.DB.prepare(`
    SELECT billtype, number FROM house_bills WHERE synced_date = ?
  `).bind(today).all();

  const synced = new Set(results.map(r => `${r.billtype}-${r.number}`));
  return bills.filter(b => !synced.has(`${b.type.toLowerCase()}-${b.number}`));
}

// ---------- Core per-bill logic ----------

async function processBill(env, billSummary, congress, today) {
  const billtype = billSummary.type.toLowerCase();
  const number = billSummary.number;

  // Fetch full detail for title, topic (policyArea), introducedDate, and sponsors
  const detailData = await congressFetch(env, `/bill/${congress}/${billtype}/${number}`);
  const detail = detailData.bill;

  // 1. Upsert the bill
  await env.DB.prepare(`
    INSERT OR IGNORE INTO house_bills (billtype, number, congress, title, topic)
    VALUES (?, ?, ?, ?, ?)
  `).bind(
    billtype,
    number,
    congress,
    detail.title,
    detail.policyArea?.name ?? null,
  ).run();

  const { results: [billRow] } = await env.DB.prepare(`
    SELECT rowid AS id FROM house_bills WHERE billtype = ? AND number = ? AND congress = ?
  `).bind(billtype, number, congress).all();
  const billId = billRow.id;

  // 2. Insert the primary sponsor (spon = 1)
  if (detail.sponsors?.length > 0) {
    const sponsor = detail.sponsors[0];
    await upsertMember(env, sponsor, congress);
    await env.DB.prepare(`
      INSERT OR IGNORE INTO house_sponsorships (bill_id, bioid, date, spon)
      VALUES (?, ?, ?, 1)
    `).bind(billId, sponsor.bioguideId, detail.introducedDate ?? null).run();
  }

  // 3. Fetch all cosponsors and insert each (spon = 0)
  const cosponsorData = await congressFetch(env, `/bill/${congress}/${billtype}/${number}/cosponsors`);
  const cosponsors = cosponsorData.cosponsors ?? [];

  if (cosponsors.length > 0) {
    await env.DB.batch(cosponsors.map(c => buildMemberUpsert(env, c, congress)));

    // Chunk sponsorship inserts to stay under D1's 100-statement batch limit
    for (let i = 0; i < cosponsors.length; i += 100) {
      await env.DB.batch(
        cosponsors.slice(i, i + 100).map(c =>
          env.DB.prepare(`
            INSERT OR IGNORE INTO house_sponsorships (bill_id, bioid, date, spon)
            VALUES (?, ?, ?, 0)
          `).bind(billId, c.bioguideId, c.sponsorshipDate ?? null)
        )
      );
    }
  }

  // Mark this bill as fully synced for today so re-runs skip it
  await env.DB.prepare(`
    UPDATE house_bills SET synced_date = ? WHERE rowid = ?
  `).bind(today, billId).run();
}

// ---------- Co-occurrences ----------

async function computeCoOccurrences(env, congress) {
  // Fetch every sponsorship for this congress in one query, sorted for pairing
  const { results: sponsorships } = await env.DB.prepare(`
    SELECT s.bill_id, s.bioid, s.date
    FROM house_sponsorships s
    JOIN house_bills b ON b.rowid = s.bill_id
    WHERE b.congress = ?
    ORDER BY s.bill_id, s.date ASC, s.bioid ASC
  `).bind(congress).all();

  // Group by bill_id in JS
  const byBill = new Map();
  for (const row of sponsorships) {
    if (!byBill.has(row.bill_id)) byBill.set(row.bill_id, []);
    byBill.get(row.bill_id).push(row);
  }

  console.log(`Computing co-occurrences across ${byBill.size} bills`);

  // Compute all pairs in memory
  const stmt = env.DB.prepare(`
    INSERT OR IGNORE INTO co_occurrences (bioid_1, date, bioid_2) VALUES (?, ?, ?)
  `);

  const pairs = [];
  for (const group of byBill.values()) {
    for (let i = 1; i < group.length; i++) {
      for (let j = 0; j < i; j++) {
        pairs.push(stmt.bind(group[j].bioid, group[i].date, group[i].bioid));
      }
    }
  }

  console.log(`Inserting ${pairs.length} co-occurrence pairs`);

  for (let i = 0; i < pairs.length; i += 100) {
    await env.DB.batch(pairs.slice(i, i + 100));
  }
}

// ---------- Congress.gov fetching ----------

async function fetchAllBills(env, congress) {
  const bills = [];
  let offset = 0;
  const limit = 250;

  while (true) {
    const data = await congressFetch(env, `/bill/${congress}`, {
      limit,
      offset,
      sort: 'introducedDate+desc',
    });

    const houseBills = (data.bills ?? []).filter(b => b.originChamberCode === 'H');
    bills.push(...houseBills);

    if (!data.pagination?.next) break;
    offset += limit;
  }

  return bills;
}

// ---------- Helpers ----------

async function upsertMember(env, person, congress) {
  return env.DB.prepare(`
    INSERT OR IGNORE INTO house_members (congress, bioid, name, party, state, district)
    VALUES (?, ?, ?, ?, ?, ?)
  `).bind(
    congress,
    person.bioguideId,
    person.fullName ?? person.name ?? null,
    person.party ?? person.partyName ?? null,
    person.state ?? null,
    person.district ?? null,
  ).run();
}

function buildMemberUpsert(env, person, congress) {
  return env.DB.prepare(`
    INSERT OR IGNORE INTO house_members (congress, bioid, name, party, state, district)
    VALUES (?, ?, ?, ?, ?, ?)
  `).bind(
    congress,
    person.bioguideId,
    person.fullName ?? person.name ?? null,
    person.party ?? person.partyName ?? null,
    person.state ?? null,
    person.district ?? null,
  );
}

async function congressFetch(env, path, params = {}) {
  const url = new URL(`${CONGRESS_API_BASE}${path}`);
  url.searchParams.set('api_key', env.CONGRESS_API_KEY);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, v);
  }

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Congress API ${res.status}: ${path}`);
  return res.json();
}

// Matches the formula used in visualization-data.js
function currentCongressNumber() {
  const now = new Date();
  let year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  if (month === 0 && day < 3) year -= 1;
  const congressStartYear = year % 2 === 1 ? year : year - 1;
  return (congressStartYear - 1787) / 2;
}
