/** @format */

export async function GET(req, res) {
  console.log(req, res);
  const respon = await fetch("http://localhost:2001/users");
  const data = await respon.json();

  return Response.json({ data });
}
