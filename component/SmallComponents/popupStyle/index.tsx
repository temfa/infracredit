import React from "react";
import styles from "./styles.module.css";
import Popup from "../popup";
import Close from "@/component/Svgs/close";
import PopupStyled from "./style";

const PopupStyle = ({ children, action, width, height, maxwidth }: { children: any; action?: any; width: any; height: any; maxwidth: any }) => {
  return (
    <Popup>
      <PopupStyled height={height} width={width} maxwidth={maxwidth}>
        {/* <div className={type ? styles.popupStyle : styles.popupStyle2}> */}
        <div className={styles.popupContainer}>
          <div className={styles.popupHeader}>
            <div className={styles.close} onClick={action}>
              <h2>Close</h2>
              <Close />
            </div>
          </div>
          <div className={styles.popupBody}>{children}</div>
        </div>
        {/* </div> */}
      </PopupStyled>
    </Popup>
  );
};

export default PopupStyle;
