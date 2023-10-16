import React from "react";
import styles from "./styles.module.css";
import Close from "@/component/Svgs/close";
import User from "../../../public/images/user.png";
import Image from "next/image";
import Popup from "../popup";

const UserPopup = ({ action }: any) => {
  const role = window.localStorage.getItem("role");
  return (
    <Popup>
      <div className={styles.userPopupContainer}>
        <div className={styles.userPopupHeader}>
          <div className={styles.close} onClick={action}>
            <h2>Close</h2>
            <Close />
          </div>
        </div>
        <div className={styles.userPopupBody}>
          <div className={styles.userPopup}>
            <Image src={User} alt="user" width={120} />
            <div>
              <h2>Olusanya Ezekiel</h2>
              <p>{role}</p>
            </div>
          </div>
          <div className={styles.userPopupWrapper}>
            <div className={styles.userPopupSingle}>
              <div>
                <p>Work</p>
                <h2>Product Designer</h2>
              </div>
              <p>Edit</p>
            </div>
            <div className={styles.userPopupSingle}>
              <div>
                <p>Email</p>
                <h2>Olusanyadtgoc@gmail.com</h2>
              </div>
              <p>Edit</p>
            </div>
            <div className={styles.userPopupSingle}>
              <div>
                <p>Phone Number</p>
                <h2>09076856465</h2>
              </div>
              <p>Edit</p>
            </div>
            <div className={styles.userPopupSingle}>
              <div>
                <p>Date Started</p>
                <h2>09 - 02 -2019</h2>
              </div>
              {/* <p>Edit</p> */}
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default UserPopup;
