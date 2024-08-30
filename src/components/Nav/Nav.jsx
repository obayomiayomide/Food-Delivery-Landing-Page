import React from "react";
import BellaLogo from "../Brand Logo/BellaLogo";
import PagesLink from "../PagesLink/PagesLink";
import Container from "../Container/Container";
import Hamburger from "../Hamburger/Hamburger";

function Nav() {
  return (
    <>
      <Container>
        <BellaLogo />
        <Hamburger />
        <PagesLink />
      </Container>
    </>
  );
}

export default Nav;
