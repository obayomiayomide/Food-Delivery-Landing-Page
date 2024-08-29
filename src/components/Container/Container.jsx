import React from "react";
import styles from "./container.module.css";

function Container({ children, styling }) {
  return (
    <div style={styling} className={styles.container}>
      {children}
    </div>
  );
}

export default Container;
