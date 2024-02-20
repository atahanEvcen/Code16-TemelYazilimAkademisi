import React from "react";
import { NavLink, Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";

function navbar({ user, handleLogOut }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary "
      style={{ textAlign: "center" }}
      data-bs-theme="dark"
    >
      <div className="container">
        <img height="50" src="/UAlogo.jpg" alt="Logo" />
        <Link className="navbar-brand" to="/">
          ÜA-CODE16-SHOP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <NavLink className="nav-link" to="/">
              Ana Sayfa
            </NavLink>
            <NavLink className="nav-link" to="/products">
              Ürünler
            </NavLink>
            <NavLink className="nav-link" to="/about">
              Hakkımızda
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              İletişim
            </NavLink>
            {user ? (
              <>
                <NavLink className="nav-link" to="/Sepet">
                  {" "}
                  Sepetim
                  <IoCartOutline className="" />
                </NavLink>

                <button className="nav-link" onClick={handleLogOut}></button>
                <NavLink className="nav-link" to="/fav">
                  {" "}
                  Favorilerim
                  <MdOutlineFavorite />
                </NavLink>
                <button className="nav-link float-end" onClick={handleLogOut}>
                  Çıkış yap ({user.name})
                </button>
              </>
            ) : (
              <NavLink className="nav-link" to="/login">
                Giriş yap
              </NavLink>
            )}
          </ul>
        </div>
      </div>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}

export default navbar;
