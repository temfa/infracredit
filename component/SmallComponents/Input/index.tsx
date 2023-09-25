import React from "react";
import styles from "./styles.module.css";
const Input = ({
  text,
  placeholder,
  types,
}: {
  text: string;
  placeholder: string;
  types: string;
}) => {
  return (
    <div className={styles.inputComp}>
      <label>{text}</label>
      <input type={types} placeholder={placeholder} />
    </div>
  );
};

export default Input;
