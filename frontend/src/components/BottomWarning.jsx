import React from "react";
import { Link } from "react-router-dom";
import styles from "./Style.module.css";

const BottomWarning = ({ label, buttonText, to }) => {
  return (
    <div className={styles.bottomWarning}>
      {label} <Link to={to}>{buttonText}</Link>
    </div>
  );
};

export default BottomWarning;
