import React from "react";
import styles from "./appInfo.module.css";

function AppInfo({ infoTitle, infoHead, infoBody, styling }) {
  return (
    <div style={styling} className={styles.appInfo}>
      <p>
        <strong>{infoTitle}</strong>
      </p>
      <h2>{infoHead}</h2>
      <div>
        <p>{infoBody}</p>
      </div>
    </div>
  );
}

export default AppInfo;
