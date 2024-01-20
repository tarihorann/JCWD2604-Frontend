/** @format */
"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Suspense } from "react";

/** @format */
export default function Home() {
  const [books, setBooks] = useState([]);

  const fetchBooks = () => {
    axios
      .get("http://localhost:2000/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  };

  const del = (id) => {
    if (window.confirm("yakin hapus id" + id)) {
      axios
        .delete("http://localhost:2000/books/" + id)
        .then(() => fetchBooks())
        .catch((err) => console.log(err.message));
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = (e) => {
    e.preventDefault();
    const newBook = {
      bookName: document.getElementById("bookName").value,
      author: document.getElementById("author").value,
      price: document.getElementById("price").value,
    };

    axios
      .post("http://localhost:2000/books", newBook)
      .then((res) => {
        fetchBooks();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="p-5">
        <div className="font-bold text-2xl">BOOKS</div>
        <table className="w-[600px] text-left">
          <thead>
            <tr className="bg-black text-white ">
              <th>Book Name</th>
              <th>Author</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <Suspense fallback={<div>...Loading</div>}>
              {books.map((book, key) => {
                return (
                  <BookCard {...book} key={key} hapus={() => del(book.id)} />
                );
              })}
            </Suspense>
          </tbody>
        </table>

        <div className=" font-bold  text-lg mt-6">
          <div>Add Book</div>
        </div>

        <form className="flex flex-col gap-1 w-72" onSubmit={addBook}>
          <input
            type="text"
            placeholder="book name"
            className="p-1"
            required
            id="bookName"
          />

          <input
            type="text"
            placeholder="Author Name"
            className="p-1"
            required
            id="author"
          />

          <input
            type="number"
            placeholder="Price"
            className="p-1"
            min={0}
            required
            id="price"
          />

          <button className="bg-black text-white h-9" type="submit">
            submit
          </button>
        </form>
      </div>
    </>
  );
}

function BookCard(book) {
  const [edit, setEdit] = useState(false);
  const [editBook, setEditBook] = useState({
    ...book,
  });

  useEffect(() => {
    setEditBook({ ...book });
    console.log(book);
  }, [book.id]);

  const save = () => {
    axios
      .patch("http://localhost:2000/books/" + book.id, editBook)
      .then((res) => {
        book = { ...book, ...res?.data };
        setEdit(false);
      })
      .catch((err) => console.log(err));
  };

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setEditBook({
      ...editBook,
      [name]: value,
    });
  };

  return (
    <>
      {edit ? (
        <tr>
          <td>
            <input
              type="text"
              defaultValue={book.bookName}
              onChange={onChangeHandler}
              name="bookName"
            />
          </td>
          <td>
            <input
              type="text"
              defaultValue={book.author}
              onChange={onChangeHandler}
              name="author"
            />
          </td>
          <td>
            <input
              type="text"
              onChange={onChangeHandler}
              name="price"
              value={editBook.price}
            />
          </td>
          <td className=" flex gap-3 justify-center">
            <button className="px-2 bg-yellow-300 w-16" onClick={save}>
              save
            </button>
            <button
              className="px-2 bg-black text-white  w-16"
              onClick={() => setEdit(false)}
            >
              cancel
            </button>
          </td>
        </tr>
      ) : (
        <tr className="">
          <td>{editBook.bookName}</td>
          <td>{editBook.author}</td>
          <td>{editBook.price}</td>
          <td className=" flex gap-3 justify-center">
            <button className="px-2 bg-red-500 w-16" onClick={book.hapus}>
              delete
            </button>
            <button
              className="px-2 bg-black text-white w-16"
              onClick={() => setEdit(true)}
            >
              edit
            </button>
          </td>
        </tr>
      )}
    </>
  );
}
