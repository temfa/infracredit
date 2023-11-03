import React from "react";
import styles from "./styles.module.css";
import Plus from "@/component/Svgs/plus";
import Assign from "@/component/Svgs/assign";

const Title = ({ text, admin, action }: { text: string; admin?: string; action?: any }) => {
  return (
    <div className={styles.layoutHead}>
      <div className={styles.layoutUser}>
        <h2>
          {text}
          {text === "Welcome back" ? (
            <>
              , <span>Olusanya Ezekiel</span>
            </>
          ) : null}
        </h2>
        {/* <p>12th May, 2023</p> */}
      </div>
      {admin === "admin" ? (
        <div className={styles.layoutAction} onClick={action}>
          <Plus color="#FFFFFF" />
          <h2>Create New User</h2>
        </div>
      ) : admin === "supervisor" ? (
        <div className={styles.layoutAction2} onClick={action}>
          <Assign />
          <h2>Assign New Report</h2>
        </div>
      ) : null}
    </div>
  );
};

export default Title;
