import React from "react";
import styles from "./style.module.css";

const AppBar = () => {
  return (
    <div className={styles.appbar}>
      <div className={styles.bold}>Paytm</div>
      <div className={styles.right}>
        Hello
        <div className={styles.user}>U</div>
      </div>
    </div>
  );
};

export default AppBar;
