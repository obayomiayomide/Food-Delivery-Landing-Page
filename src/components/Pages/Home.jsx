import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import HeroTop from "../HeroTop/HeroTop";
import Phones from "../Phones/Phones";
import HeroBottom from "../HeroBottom/HeroBottom";
import PageInfo from "../PageInfo/PageInfo";
import Hr from "../HR/Hr";

function Home() {
  return (
    <>
      <Nav homeLink={{ color: "#FA4A0C" }} />
      <HeroTop />
      <Phones />
      <Hr />
      <PageInfo />
      <HeroBottom />
      <Footer />
    </>
  );
}

export default Home;
