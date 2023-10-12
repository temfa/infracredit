import React from "react";
import styles from "./styles.module.css";
import Popup from "../popup";
import Close from "@/component/Svgs/close";

const PopupStyle = ({ children, action, type }: { children: any; action?: any; type: boolean }) => {
  return (
    <Popup>
      <div className={type ? styles.popupStyle : styles.popupStyle2}>
        <div className={styles.popupHeader}>
          <div className={styles.close} onClick={action}>
            <h2>Close</h2>
            <Close />
          </div>
        </div>
        <div className={styles.popupBody}>{children}</div>
      </div>
    </Popup>
  );
};

export default PopupStyle;
