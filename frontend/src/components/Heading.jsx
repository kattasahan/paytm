import React from "react";
import styles from "./Style.module.css";

const Heading = ({ label }) => {
  return <div className={styles.heading}>{label}</div>;
};

export default Heading;
