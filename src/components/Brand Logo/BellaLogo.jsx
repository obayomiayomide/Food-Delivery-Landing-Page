import React from "react";
import logo from "/Bella-Logo.png";
import styles from "./bellaLogo.module.css";

function BellaLogo() {
  return (
    <>
      <img className={styles.logo} src={logo} alt={logo} />
    </>
  );
}

export default BellaLogo;
