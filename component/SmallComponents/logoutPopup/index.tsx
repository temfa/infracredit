import React from "react";
import styles from "./styles.module.css";
import Popup from "../popup";
import CloseCircle from "@/component/Svgs/closeCircle";

const LogoutPopup = ({ action1, action2 }: { action1: any; action2: any }) => {
  return (
    <Popup>
      <div className={styles.logoutContainer}>
        <div className={styles.logoutHead}>
          <div>
            <CloseCircle />
          </div>
          <h2>Are you sure, you want to Log-Out</h2>
        </div>
        <div className={styles.logoutBody}>
          <button onClick={action1}>Cancel</button>
          <button onClick={action2}>Log Out</button>
        </div>
      </div>
    </Popup>
  );
};

export default LogoutPopup;
