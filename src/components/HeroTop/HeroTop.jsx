import React from "react";
import Button from "../Button/Button";
import styles from "./heroTop.module.css";
import Container from "../Container/Container";

function HeroTop() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.contentContainer}>
          <div className={styles.textContent}>
            <p>
              <strong>Food App</strong>
            </p>
            <h1>
              Why stay hungry when <br />
              <span>you can order from Bella Olonje</span>
            </h1>
            <p>Download the Bella Olonje's food app now on</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              buttonText="Playstore"
              styling={{ backgroundColor: "#FA4A0C", border: "none" }}
            />
            <Button buttonText="App store" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroTop;
