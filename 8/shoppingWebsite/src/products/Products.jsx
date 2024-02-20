import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Products({ user }) {
  const [last10Products, setLast10Products] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((res) => setLast10Products(res));
  });
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Ürünler</h2>

        <div className="row row-cols-md-3 row-cols-md-4">
          {last10Products.map((product) => (
            <ProductCard user={user} key={product.id} item={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
