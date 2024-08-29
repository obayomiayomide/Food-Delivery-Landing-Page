import React from "react";
import phone1 from "/Left-phone.png";
import phone2 from "/Right-phone.png";
import styles from "./phones.module.css";

function Phones() {
  return (
    <div className={styles.phones}>
      <div className={styles.phone1}>
        <img className={styles.img} src={phone1} alt={phone1} />
      </div>
      <div className={styles.phone2}>
        <img className={styles.img} src={phone2} alt={phone2} />
      </div>
    </div>
  );
}

export default Phones;
