import React from "react";

function About() {
  return (
    <>
      <Nav aboutLink={{ color: "#FA4A0C" }} />
      <h1
        style={{
          fontFamily: "Poppins, sans-serif",
          color: "#FA4A0C",
          marginTop: "152px",
        }}
      >
        This is the <strong>About</strong> page
      </h1>
    </>
  );
}

export default About;
