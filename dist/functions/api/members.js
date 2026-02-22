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
  const end_date = searchParams.get('end_date');

  try {
    const congress = dateToCongressNumber(end_date);
    const { results } = await env.DB.prepare(`
      SELECT DISTINCT bioid, name, party, state, district
      FROM house_members WHERE congress = ?
    `).bind(congress).all();
    return Response.json(results);
  } catch (err) {
    return Response.json({ error: 'Server error', detail: err.message }, { status: 500 });
  }
}
