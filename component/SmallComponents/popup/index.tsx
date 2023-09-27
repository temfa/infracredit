import React from "react";
import styles from "./styles.module.css";

const Popup = ({ children }: any) => {
  return <div className={styles.popupContainer}>{children}</div>;
};

export default Popup;
