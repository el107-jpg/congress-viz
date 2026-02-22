import { dateToCongressNumber, jsonResponse } from '../_shared/congress.js';

const MIN_COOCCURRENCES = 150;

export async function onRequestGet({ request, env }) {
  const { searchParams } = new URL(request.url);
  const start_date = searchParams.get('start_date');
  const end_date = searchParams.get('end_date');

  if (!start_date || !end_date) {
    return jsonResponse({ error: 'start_date and end_date required' }, 400);
  }

  try {
    // Pre-aggregated co-occurrence matrix filtered to members with >= MIN_COOCCURRENCES
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

    // Collect unique bioids from the filtered matrix
    const bioidSet = new Set();
    for (const row of cooccurrenceMatrix) {
      bioidSet.add(row.bioid_1);
      bioidSet.add(row.bioid_2);
    }
    const bioidList = [...bioidSet];
    const congress = dateToCongressNumber(end_date);

    // Fetch member info for valid bioids only
    let members = [];
    if (bioidList.length > 0) {
      const placeholders = bioidList.map(() => '?').join(',');
      const { results } = await env.DB.prepare(`
        SELECT DISTINCT bioid, name, party, state, district
        FROM house_members
        WHERE bioid IN (${placeholders})
          AND congress = ?
      `).bind(...bioidList, congress).all();
      members = results;
    }

    // Sponsorships in the time window
    const { results: sponsorships } = await env.DB.prepare(`
      SELECT bill_id, bioid, date, spon
      FROM house_sponsorships
      WHERE date >= ? AND date <= ?
    `).bind(start_date, end_date).all();

    // Bills with sponsorship activity in the time window
    const { results: bills } = await env.DB.prepare(`
      SELECT DISTINCT b.id, b.billtype, b.number, b.congress, b.title, b.topic
      FROM house_bills b
      JOIN house_sponsorships s ON b.id = s.bill_id
      WHERE s.date >= ? AND s.date <= ?
    `).bind(start_date, end_date).all();

    return jsonResponse({ cooccurrenceMatrix, members, sponsorships, bills });
  } catch (err) {
    return jsonResponse({ error: 'Server error', detail: err.message }, 500);
  }
}
