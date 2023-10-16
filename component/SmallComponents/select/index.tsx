import React from "react";
import styles from "./styles.module.css";

const Select = ({ text, selectText, options, action }: { text: string; selectText: string; options: string[]; action: any }) => {
  return (
    <div className={styles.selectComp}>
      <label>{text}</label>
      <select onChange={action}>
        <option value="">{selectText}</option>
        {options.map((option, i) => {
          return (
            <option value={option} key={i}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
