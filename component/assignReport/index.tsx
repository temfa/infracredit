import React, { useState } from "react";
import styles from "./styles.module.css";
import PopupStyle from "../SmallComponents/popupStyle";
import PrimaryButton from "../SmallComponents/buttons/primarybutton";

const AssignReport = ({ action }: any) => {
  const [active, setActive] = useState(false);
  return (
    <PopupStyle action={action}>
      <div className={styles.createUser}>
        <h2>Assign New Report</h2>
        <div className={styles.createGroup}>
          <label>Title</label>
          <input type="text" placeholder="Report" />
        </div>
        <div className={styles.createGroup}>
          <label>Select Report</label>
          <select>
            <option value="">Select Report</option>
            <option value="CEO Report">CEO Report</option>
            {/* <option value="Supervisor">Supervisor</option>
            <option value="Administrator">Administrator</option>
            <option value="Manager">Manager</option> */}
          </select>
        </div>
        <div className={styles.createCont}>
          <div className={styles.createGroup}>
            <label>Month</label>
            <select>
              <option value="">Month</option>
              <option value="June">June</option>
              {/* <option value="Supervisor">Supervisor</option>
            <option value="Administrator">Administrator</option>
            <option value="Manager">Manager</option> */}
            </select>
          </div>
          <div className={styles.createGroup}>
            <label>Year</label>
            <input type="text" placeholder="2023" />
          </div>
        </div>
        <div className={styles.createGroup}>
          <label>User</label>
          <input type="text" placeholder="Ezekiel@gmail.com" />
        </div>
        <div className={styles.createGroup}>
          <label>Supervisor</label>
          <input
            type="text"
            placeholder="Ezekiel@gmail.com"
            onChange={(e) => {
              if (e.target.value.length > 0) {
                setActive(true);
              } else {
                setActive(false);
              }
            }}
          />
        </div>
        <PrimaryButton
          text="Assign Report"
          active={active}
          action={() => {
            console.log("TESt");
          }}
        />
      </div>
    </PopupStyle>
  );
};

export default AssignReport;
