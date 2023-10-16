import React, { useState } from "react";
import styles from "./styles.module.css";
import PopupStyle from "../SmallComponents/popupStyle";
import PrimaryButton from "../SmallComponents/buttons/primarybutton";

const AssignReport = ({ action }: any) => {
  const [active, setActive] = useState(false);
  const [users, setUsers] = useState([""]);
  return (
    <PopupStyle action={action} width="36%" maxwidth="520px" height="70vh">
      <div className={styles.createUser}>
        <h2>Assign New Report</h2>
        {/* <div className={styles.createGroup}>
          <label>Title</label>
          <input type="text" placeholder="Report" />
        </div> */}
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
        <div className={styles.createAdd}>
          <div className={styles.createGroup}>
            <label>User</label>
            {users?.map((user: any, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  placeholder="Ezekiel@gmail.com"
                  value={user}
                  onChange={(e) => {
                    const newValue = [...users];
                    newValue[index] = e.target.value;
                    setUsers(newValue);
                  }}
                />
              );
            })}
          </div>
          <div
            className={styles.add}
            onClick={() => {
              setUsers((arr) => [...arr, ""]);
            }}>
            <p>Add another user</p>
          </div>
        </div>
        <div className={styles.createGroup}>
          <label>Comment</label>
          <input
            type="text"
            placeholder="Comment..."
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
