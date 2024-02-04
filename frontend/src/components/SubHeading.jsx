import React from "react";
import styles from "./Style.module.css";

const SubHeading = ({ label }) => {
  return <div className={styles.subHeading}>{label}</div>;
};

export default SubHeading;
