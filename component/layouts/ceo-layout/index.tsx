import React from "react";
import styles from "./styles.module.css";
import Ifracoloredlogo from "@/component/Svgs/ifracoloredlogo";

const CeoLayout = ({ children, number }: { children: any; number: number }) => {
  return (
    <div className={styles.ceoLayout}>
      <div className={styles.ceoHeader}>
        <Ifracoloredlogo />
      </div>
      <div className={styles.ceoLayoutBody}>{children}</div>
      <div className={styles.ceoLayoutFooter}>
        <div className={styles.ceoLayoutText}>
          <div>
            <h2>InfraCredit CEO Report March 2022</h2>
          </div>
          <p>Source: CBN, Vetiva Research, Rencap FSDH Research</p>
        </div>
        <p>{number}</p>
        <div className={styles.ceoLayoutLine}></div>
      </div>
    </div>
  );
};

export default CeoLayout;
