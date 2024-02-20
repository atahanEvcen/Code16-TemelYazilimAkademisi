import React from "react";
import Categories from "./Categories";
import { Outlet } from "react-router-dom";

function ProductLayout() {
  return (
    <>
      <div className="row">
        <div className="col-sm-8">
          <Outlet />
        </div>
        <div className="col-sm-4">
          <Categories />
        </div>
      </div>
    </>
  );
}

export default ProductLayout;
