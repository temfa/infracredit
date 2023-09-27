import React from "react";
import styles from "./styles.module.css";

const PrimaryButton = ({ text, active, action }: { text: string; active: boolean; action: any }) => {
  return active ? (
    <button className={styles.colorBlue} onClick={action}>
      {text}
    </button>
  ) : (
    <button className={styles.colorDefault} disabled>
      {text}
    </button>
  );
};

export default PrimaryButton;
