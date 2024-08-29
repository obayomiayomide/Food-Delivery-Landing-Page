import React from "react";
import styles from "./button.module.css";

function Button({ buttonText, styling }) {
  return (
    <div style={styling} className={styles.button}>
      {buttonText}
    </div>
  );
}

export default Button;
