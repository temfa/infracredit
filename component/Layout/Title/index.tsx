import React from "react";
import styles from "./styles.module.css";

const Title = ({ text }: { text: string }) => {
  return (
    <div className={styles.layoutHead}>
      <div className={styles.layoutUser}>
        <h2>
          {text}
          {text === "Welcome back" ? (
            <>
              , <span>Rahman Peace</span>
            </>
          ) : null}
        </h2>
        <p>12th, May 2023</p>
      </div>
      {/* <div className={styles.layoutAction}>
          <Plus />
          <h2>Edit New Report</h2>
        </div> */}
    </div>
  );
};

export default Title;
