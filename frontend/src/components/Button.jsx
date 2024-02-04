import React from "react";
import styles from "./Style.module.css";

const Button = ({ label, onClick, classes }) => {
  return (
    <button onClick={onClick} className={classes}>
      {label}
    </button>
  );
};

export default Button;
