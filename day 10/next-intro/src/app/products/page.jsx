/** @format */
"use client";

import axios from "axios";
import { useState, useEffect } from "react";
function Page() {
  const [products, setProducts] = useState([]);
  const fetchProducts = () => {
    axios
      .get("http://localhost:2001/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-black p-2">
      ini product
      <div></div>
      <table>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th> Price</th>
        </tr>
        {products.map((product) => (
          <ProductCard {...product} />
        ))}
      </table>
    </div>
  );
}
export default Page;

function ProductCard({ productName, price, id }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{productName}</td>
      <td>{price}</td>
    </tr>
  );
}
