import React from "react";
import BellaLogo from "../Brand Logo/BellaLogo";
import styles from "./footer.module.css";
import Socials from "../Socials/Socials";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <BellaLogo />
        <Socials />
        <div>Copyright 2020 Bella Olonje.com</div>
      </div>
    </>
  );
}

export default Footer;
