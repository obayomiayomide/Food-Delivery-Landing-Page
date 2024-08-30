import React from "react";
import AppInfo from "../AppInfo/AppInfo";
import AppInfoImage from "../AppInfoImage/AppInfoImage";
import createImage from "/Create-phone.png";
import exploreImage from "/Explore-phone.png";
import checkoutImage from "/Checkout-phone.png";
import styles from "./pageInfo.module.css";

function PageInfo() {
  return (
    <div className={styles.pageInfo}>
      <h2>How the app works</h2>
      <div className={styles.appInfo}>
        <AppInfoImage src={createImage} />
        <AppInfo
          infoTitle="Create an account"
          infoHead="Create/login to an existing account to get started"
          infoBody="An account is created with you email and a desired password"
        />
      </div>
      <div className={styles.appInfo}>
        <AppInfoImage styling={{ order: "1" }} src={exploreImage} />
        <AppInfo
          infoTitle="Explore varieties"
          infoHead="Shop for your favorite meals as e dey hot"
          infoBody="Shop for your favorite meals or drinks and enjoy while doing it."
          styling={{
            maxWidth: "500px",
            marginLeft: "120px",
          }}
        />
      </div>
      <div className={styles.appInfo}>
        <AppInfoImage src={checkoutImage} />
        <AppInfo
          infoTitle="Checkout"
          infoHead="When you are done check out and get it delivered"
          infoBody="When you are done, checkout and get it delivered with ease"
        />
      </div>
    </div>
  );
}

export default PageInfo;
