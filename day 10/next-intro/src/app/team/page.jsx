/** @format */
"use client";
import { useState } from "react";

function Page() {
  const [number, setNumber] = useState(0);
  const kurang = () => {
    setNumber(number - 1);
  };
  const tambah = () => {
    setNumber(number + 1);
  };
  return (
    <div className="bg-gray-950 text-white p-4 flex gap-2  items-center">
      <button className="bg-red-700 p-2" onClick={kurang}>
        -
      </button>
      {number}
      <button className="bg-red-700 p-2" onClick={tambah}>
        +
      </button>
    </div>
  );
}
export default Page;
