/** @format */

import axios from "axios";

async function Page() {
  const fetch = async () => {
    const { data } = await axios("http://localhost:2000/books");
    return data;
  };
  const books = await fetch();

  return (
    <>
      {books.map((book) => (
        <div>{book.bookName}</div>
      ))}
    </>
  );
}
export default Page;
