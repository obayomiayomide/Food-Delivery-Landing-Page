import React from "react";
import styles from "./heroBottom.module.css";
import Button from "../Button/Button";
import Container from "../Container/Container";

function HeroBottom() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.textContent}>
          <h2>Download the app now.</h2>
          <p>
            Available on your favourite store. Start your premium experience
            now.
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            buttonText="Playstore"
            styling={{
              backgroundColor: "#FA4A0C",
              border: "none",
              fontSize: "16px",
              borderRadius: "7px",
              paddingRight: "30px",
              paddingLeft: "30px",
            }}
          />
          <Button
            buttonText="Appstore"
            styling={{ fontSize: "16px", borderRadius: "7px" }}
          />
        </div>
      </div>
    </>
  );
}

export default HeroBottom;
