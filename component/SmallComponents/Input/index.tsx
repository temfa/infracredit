import React from "react";
import styles from "./styles.module.css";
const Input = ({ text, placeholder, types, action }: { text: string; placeholder: string; types: string; action: any }) => {
  return (
    <div className={styles.inputComp}>
      <label>{text}</label>
      <input type={types} placeholder={placeholder} onChange={action} />
    </div>
  );
};

export default Input;
