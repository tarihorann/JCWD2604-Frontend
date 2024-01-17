/** @format */

export async function GET(request, context) {
  console.log(request);
  const res = await fetch("http://localhost:2001/products");
  const data = await res.json();

  return Response.json({ data, context });
}

export async function POST() {
  const res = await fetch("http://localhost:2001/products");
  const data = await res.json();

  return Response.json({ data });
}
