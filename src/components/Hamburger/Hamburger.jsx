import React from "react";
import styles from "./hamburger.module.css";

function Hamburger() {
  return (
    <div className={styles.ham}>
      <div className={styles.hamburger}></div>
      <div className={styles.hamburger}></div>
      <div className={styles.hamburger}></div>
    </div>
  );
}

export default Hamburger;
