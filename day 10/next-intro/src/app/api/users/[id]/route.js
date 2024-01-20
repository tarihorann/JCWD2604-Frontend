/** @format */

export async function GET(req, res) {
  const { id } = res.params; // '1'

  const res2 = await fetch("http://localhost:2001/users/" + id);
  const data = await res2.json();

  return Response.json({ data, res });
}
