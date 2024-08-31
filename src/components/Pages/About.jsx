import React from "react";
import Nav from "../Nav/Nav";

function About() {
  return (
    <>
      <Nav aboutLink={{ color: "#FA4A0C" }} />
      <h1
        style={{
          fontFamily: "Poppins, sans-serif",
          color: "#FA4A0C",
          marginTop: "152px",
          textAlign: "center",
        }}
      >
        This is the <strong>About</strong> page
      </h1>
    </>
  );
}

export default About;
