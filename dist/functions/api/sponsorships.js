export async function onRequestGet({ request, env }) {
  const { searchParams } = new URL(request.url);
  const start_date = searchParams.get('start_date');
  const end_date = searchParams.get('end_date');
  const bill_id = searchParams.get('bill_id');

  try {
    let results;
    if (bill_id) {
      ({ results } = await env.DB.prepare(`
        SELECT * FROM house_sponsorships WHERE bill_id = ?
      `).bind(bill_id).all());
    } else if (start_date && end_date) {
      ({ results } = await env.DB.prepare(`
        SELECT * FROM house_sponsorships WHERE date >= ? AND date <= ?
      `).bind(start_date, end_date).all());
    } else {
      ({ results } = await env.DB.prepare(`SELECT * FROM house_sponsorships LIMIT 1000`).all());
    }
    return Response.json(results);
  } catch (err) {
    return Response.json({ error: 'Server error', detail: err.message }, { status: 500 });
  }
}
