export async function onRequestGet({ request, env }) {
  const { searchParams } = new URL(request.url);
  const start_date = searchParams.get('start_date');
  const end_date = searchParams.get('end_date');

  if (!start_date || !end_date) {
    return Response.json({ error: 'start_date and end_date required' }, { status: 400 });
  }

  try {
    const { results } = await env.DB.prepare(`
      SELECT bioid_1, bioid_2, COUNT(*) as count
      FROM co_occurrences
      WHERE date >= ? AND date <= ?
      GROUP BY bioid_1, bioid_2
    `).bind(start_date, end_date).all();
    return Response.json(results);
  } catch (err) {
    return Response.json({ error: 'Server error', detail: err.message }, { status: 500 });
  }
}
