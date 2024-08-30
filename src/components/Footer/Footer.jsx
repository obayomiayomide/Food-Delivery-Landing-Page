import React from "react";
import BellaLogo from "../Brand Logo/BellaLogo";
import Container from "../Container/Container";
import styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <Container>
          <BellaLogo />

          <div>Copyright 2020 Bella Olonje.com</div>
        </Container>
      </div>
    </>
  );
}

export default Footer;
