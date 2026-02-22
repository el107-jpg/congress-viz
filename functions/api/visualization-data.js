const MIN_COOCCURRENCES = 150;

function dateToCongressNumber(dateStr) {
  const date = new Date(dateStr);
  let year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  if (month === 0 && day < 3) year -= 1;
  const congressStartYear = year % 2 === 1 ? year : year - 1;
  return (congressStartYear - 1787) / 2;
}

export async function onRequestGet({ request, env }) {
  const { searchParams } = new URL(request.url);
  const start_date = searchParams.get('start_date');
  const end_date = searchParams.get('end_date');

  if (!start_date || !end_date) {
    return Response.json({ error: 'start_date and end_date required' }, { status: 400 });
  }

  try {
    const { results: cooccurrenceMatrix } = await env.DB.prepare(`
      WITH pair_counts AS (
        SELECT bioid_1, bioid_2, COUNT(*) as count
        FROM co_occurrences
        WHERE date >= ? AND date <= ?
        GROUP BY bioid_1, bioid_2
      ),
      bioid_totals AS (
        SELECT bioid, SUM(count) as total FROM (
          SELECT bioid_1 as bioid, count FROM pair_counts
          UNION ALL
          SELECT bioid_2 as bioid, count FROM pair_counts
        )
        GROUP BY bioid
        HAVING total >= ?
      )
      SELECT pc.bioid_1, pc.bioid_2, pc.count
      FROM pair_counts pc
      INNER JOIN bioid_totals bt1 ON pc.bioid_1 = bt1.bioid
      INNER JOIN bioid_totals bt2 ON pc.bioid_2 = bt2.bioid
    `).bind(start_date, end_date, MIN_COOCCURRENCES).all();

    const bioidSet = new Set();
    for (const row of cooccurrenceMatrix) {
      bioidSet.add(row.bioid_1);
      bioidSet.add(row.bioid_2);
    }

    const congresses = [...new Set([dateToCongressNumber(start_date), dateToCongressNumber(end_date)])];
    const congressPlaceholders = congresses.map(() => '?').join(',');

    // Fetch all members for this congress (~435 rows max), filter in JS
    // to avoid D1's 100-parameter limit on IN (?, ?, ...) clauses
    const { results: allMembers } = await env.DB.prepare(`
      SELECT bioid, name, party, state, district, congress
      FROM house_members WHERE congress IN (${congressPlaceholders})
    `).bind(...congresses).all();
    const latestByBioid = new Map();
    for (const m of allMembers) {
      if (!bioidSet.has(m.bioid)) continue;
      const existing = latestByBioid.get(m.bioid);
      if (!existing || m.congress > existing.congress) latestByBioid.set(m.bioid, m);
    }
    const members = [...latestByBioid.values()].map(({ congress: _, ...rest }) => rest);


    const { results: sponsorships } = await env.DB.prepare(`
      SELECT bill_id, bioid, date, spon
      FROM house_sponsorships
      WHERE date >= ? AND date <= ?
    `).bind(start_date, end_date).all();

    const { results: bills } = await env.DB.prepare(`
      SELECT DISTINCT b.id, b.billtype, b.number, b.congress, b.title, b.topic
      FROM house_bills b
      JOIN house_sponsorships s ON b.id = s.bill_id
      WHERE s.date >= ? AND s.date <= ?
    `).bind(start_date, end_date).all();

    return Response.json({ cooccurrenceMatrix, members, sponsorships, bills });
  } catch (err) {
    return Response.json({ error: 'Server error', detail: err.message }, { status: 500 });
  }
}
