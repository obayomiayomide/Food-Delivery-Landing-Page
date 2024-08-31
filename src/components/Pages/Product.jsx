import React from "react";
import Nav from "../Nav/Nav";

function Product() {
  return (
    <>
      <Nav />
      <h1
        style={{
          fontFamily: "Poppins, sans-serif",
          color: "#FA4A0C",
          marginTop: "152px",
          textAlign: "center",
        }}
      >
        This is the <strong>Product</strong> page
      </h1>
    </>
  );
}

export default Product;
