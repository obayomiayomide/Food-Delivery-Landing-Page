import React from "react";
import styles from "./appinfoimage.module.css";

function AppInfoImage({ src, styling }) {
  return (
    <div style={styling} className={styles.container}>
      <img className={styles.img} src={src} alt={src} />
    </div>
  );
}

export default AppInfoImage;
