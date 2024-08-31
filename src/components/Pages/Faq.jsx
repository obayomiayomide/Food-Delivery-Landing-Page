import React from "react";
import Nav from "../Nav/Nav";

function Faq() {
  return (
    <>
      <Nav faqLink={{ color: "#FA4A0C" }} />
      <h1
        style={{
          fontFamily: "Poppins, sans-serif",
          color: "#FA4A0C",
          marginTop: "152px",
          textAlign: "center",
        }}
      >
        This is the <strong>Faq</strong> page
      </h1>
    </>
  );
}

export default Faq;
