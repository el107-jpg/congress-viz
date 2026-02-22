// Convert a date string to its congress number.
// Each congress starts January 3 of odd years.
export function dateToCongressNumber(dateStr) {
  const date = new Date(dateStr);
  let year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  if (month === 0 && day < 3) {
    year -= 1;
  }

  const congressStartYear = year % 2 === 1 ? year : year - 1;
  return (congressStartYear - 1787) / 2;
}

export function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
