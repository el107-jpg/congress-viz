import { jsonResponse } from '../_shared/congress.js';

export async function onRequestGet({ request, env }) {
  const { searchParams } = new URL(request.url);
  const start_date = searchParams.get('start_date');
  const end_date = searchParams.get('end_date');

  if (!start_date || !end_date) {
    return jsonResponse({ error: 'start_date and end_date required' }, 400);
  }

  try {
    const { results } = await env.DB.prepare(`
      SELECT bioid_1, bioid_2, COUNT(*) as count
      FROM co_occurrences
      WHERE date >= ? AND date <= ?
      GROUP BY bioid_1, bioid_2
    `).bind(start_date, end_date).all();

    return jsonResponse(results);
  } catch (err) {
    return jsonResponse({ error: 'Server error', detail: err.message }, 500);
  }
}
