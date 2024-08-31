import React from "react";
import styles from "./pagesLink.module.css";
import { NavLink } from "react-router-dom";

function PagesLink({ styling }) {
  const navStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "",
      color: isActive ? "#fa4a0c" : "",
    };
  };

  return (
    <>
      <div style={styling} className={`${styles.link}`}>
        <NavLink style={navStyle} to="/">
          <div>Home</div>
        </NavLink>

        <NavLink style={navStyle} to="/product">
          <div>Product</div>
        </NavLink>

        <NavLink style={navStyle} to="/faq">
          <div>Faq</div>
        </NavLink>

        <NavLink style={navStyle} to="/contact">
          <div>Contact</div>
        </NavLink>
      </div>
    </>
  );
}

export default PagesLink;
