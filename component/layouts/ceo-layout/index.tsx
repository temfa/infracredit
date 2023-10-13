import React, { useState } from "react";
import styles from "./styles.module.css";
import Ifracoloredlogo from "@/component/Svgs/ifracoloredlogo";

const CeoLayout = ({ children, number, edit }: { children: any; number: number; edit: boolean }) => {
  const [title, setTitle] = useState("InfraCredit CEO Report March 2022");
  const [text, setText] = useState("Source: CBN, Vetiva Research, Rencap FSDH Research");
  return (
    <div className={styles.ceoLayout}>
      <div className={styles.ceoHeader}>
        <Ifracoloredlogo />
      </div>
      <div className={styles.ceoLayoutBody}>{children}</div>
      <div className={styles.ceoLayoutFooter}>
        <div className={styles.ceoLayoutText}>
          <div>
            {edit ? (
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            ) : (
              <h2>{title}</h2>
            )}
          </div>
          {edit ? (
            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          ) : (
            <p>{text}</p>
          )}
        </div>
        <p>{number}</p>
        <div className={styles.ceoLayoutLine}></div>
      </div>
    </div>
  );
};

export default CeoLayout;
