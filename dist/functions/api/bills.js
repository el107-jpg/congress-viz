export async function onRequestGet({ request, env }) {
  const { searchParams } = new URL(request.url);
  const start_date = searchParams.get('start_date');
  const end_date = searchParams.get('end_date');
  const congress = searchParams.get('congress');

  try {
    let results;
    if (start_date && end_date) {
      ({ results } = await env.DB.prepare(`
        SELECT DISTINCT b.*
        FROM house_bills b
        JOIN house_sponsorships s ON b.id = s.bill_id
        WHERE s.date >= ? AND s.date <= ?
      `).bind(start_date, end_date).all());
    } else if (congress) {
      ({ results } = await env.DB.prepare(`
        SELECT * FROM house_bills WHERE congress = ?
      `).bind(congress).all());
    } else {
      ({ results } = await env.DB.prepare(`SELECT * FROM house_bills LIMIT 1000`).all());
    }
    return Response.json(results);
  } catch (err) {
    return Response.json({ error: 'Server error', detail: err.message }, { status: 500 });
  }
}
