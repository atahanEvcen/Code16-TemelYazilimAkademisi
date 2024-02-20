import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";

function ProductCard({ item, user }) {
  const productUrl = `/products/product/${item.id}`;

  function handleClick(product) {
    let localFavs = JSON.parse(localStorage.getItem("favs")) ?? [];
    let itemIndex = localFavs.findIndex(
      (localItem) => product.id === localItem.id
    );
    if (itemIndex >= 0) {
      localFavs = localFavs.filter((item) => item.id !== product.id);
    } else {
      localFavs.push({ id: product.id, title: product.title });
    }

    localStorage.setItem("favs", JSON.stringify(localFavs));

    let localSepet = JSON.parse(localStorage.getItem("Sepet")) ?? [];

    if (itemIndex >= 0) {
      localSepet = localSepet.filter((item) => item.id !== product.id);
    } else {
      localSepet.push({
        id: product.id,
        title: product.title,
        price: product.price,
      });
    }

    localStorage.setItem("Sepet", JSON.stringify(localSepet));
  }

  return (
    <div className="col-sm mb-3">
      <div className="card">
        <Link to={productUrl}>
          <img
            src={item.image}
            className="card-img-top w-50"
            alt={item.title}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{item.title.substring(0, 45)}..</h5>
          <p className="card-text">{item.description.substring(0, 45)}...</p>
          <p className="lead">{item.price} TL</p>
          {user && (
            <a
              href="#"
              className="btn btn-primary float-left"
              onClick={() => handleClick(item)}
            >
              {" "}
              <GrFavorite />
            </a>
          )}

          {user && (
            <a
              href="#"
              className="btn btn-primary float-end"
              onClick={() => handleClick(item)}
            >
              {" "}
              <FaCartPlus />{" "}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
