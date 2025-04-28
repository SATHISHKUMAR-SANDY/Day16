import React from "react";
import { Outlet } from "react-router-dom";

function Products() {
  return (
    <div className="container mt-4">
      <h1>Products</h1>
      {/* This is important to render nested child routes */}
      <Outlet />
    </div>
  );
}

export default Products;
