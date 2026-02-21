import { dateToCongressNumber, jsonResponse } from '../_shared/congress.js';

export async function onRequestGet({ request, env }) {
  const { searchParams } = new URL(request.url);
  const end_date = searchParams.get('end_date');

  try {
    const congress = dateToCongressNumber(end_date);

    const { results } = await env.DB.prepare(`
      SELECT DISTINCT bioid, name, party, state, district
      FROM house_members
      WHERE congress = ?
    `).bind(congress).all();

    return jsonResponse(results);
  } catch (err) {
    return jsonResponse({ error: 'Server error', detail: err.message }, 500);
  }
}
