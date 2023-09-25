import React from "react";
import styles from "./styles.module.css";

const PrimaryButton = ({ text }: { text: string }) => {
  return (
    <div className={styles.colorBlue}>
      <p>{text}</p>
    </div>
  );
};

export default PrimaryButton;
