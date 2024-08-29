import React from "react";
import styles from "./pagesLink.module.css";

function PagesLink() {
  return (
    <>
      <div className={styles.link}>
        <div>Home</div>
        <div>Product</div>
        <div>Faq</div>
        <div>Contact</div>
      </div>
    </>
  );
}

export default PagesLink;
