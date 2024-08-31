import React from "react";
import BellaLogo from "../Brand Logo/BellaLogo";
import PagesLink from "../PagesLink/PagesLink";
import Container from "../Container/Container";
import styles from "./nav.module.css";
import Hamburger from "../Hamburger/Hamburger";
import { useState } from "react";

function Nav() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div>
      <div className={styles.nav}>
        <Container>
          <BellaLogo />
          <div className={styles.menu}>
            <Hamburger isMenu={isMenu} setIsMenu={setIsMenu} />
            <PagesLink isMenu={isMenu} />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Nav;
