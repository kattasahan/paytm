import React from "react";
import styles from "./Style.module.css";

const InputBox = ({ label, type, placeholder, onChange }) => {
  return (
    <div className={styles.field}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default InputBox;
