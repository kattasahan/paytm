import React from "react";
import styles from "./Style.module.css";

const Balance = ({ balance }) => {
  return <div className={styles.bold}>Your Balance Rs {balance}</div>;
};

export default Balance;
