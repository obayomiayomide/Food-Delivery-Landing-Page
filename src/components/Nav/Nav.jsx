import React from "react";
import BellaLogo from "../Brand Logo/BellaLogo";
import PagesLink from "../PagesLink/PagesLink";
import Container from "../Container/Container";
import styles from "./nav.module.css";

function Nav() {
  return (
    <div>
      <div className={styles.nav}>
        <Container>
          <BellaLogo />
          <PagesLink />
        </Container>
      </div>
    </div>
  );
}

export default Nav;
