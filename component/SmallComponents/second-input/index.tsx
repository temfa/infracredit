import React from "react";
import styles from "./styles.module.css";

const SecondInput = ({ text, placeholder, types, action, value }: { text: string; placeholder?: string; types: string; action: any; value: any }) => {
  return (
    <div className={styles.inputComp}>
      <label>{text}</label>
      <input type={types} placeholder={placeholder} onChange={action} value={value} />
    </div>
  );
};

export default SecondInput;
