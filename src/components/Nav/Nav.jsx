import React from "react";
import BellaLogo from "../Brand Logo/BellaLogo";
import PagesLink from "../PagesLink/PagesLink";
import Container from "../Container/Container";
import Hamburger from "../Hamburger/Hamburger";
import styles from "./nav.module.css";

function Nav() {
  return (
    <div className={styles.nav}>
      <Container>
        <BellaLogo />
        <Hamburger />
        <PagesLink />
      </Container>
    </div>
  );
}

export default Nav;
