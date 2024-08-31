import React from "react";
import styles from "./pagesLink.module.css";

function PagesLink({ homeLink, productLink, faqLink, contactlink }) {
  return (
    <>
      <div className={`${styles.link} ${styles.hide}`}>
        <div style={homeLink}>Home</div>
        <div style={productLink}>Product</div>
        <div style={faqLink}>Faq</div>
        <div style={contactlink}>Contact</div>
      </div>
    </>
  );
}

export default PagesLink;
