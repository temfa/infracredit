import React, { useState } from "react";
import styles from "./styles.module.css";
import PopupStyle from "../SmallComponents/popupStyle";
import PrimaryButton from "../SmallComponents/buttons/primarybutton";

const Createuser = ({ action }: { action?: any }) => {
  const [active, setActive] = useState(false);
  return (
    <PopupStyle action={action} type={true}>
      <div className={styles.createUser}>
        <h2>Create User</h2>
        <div className={styles.createGroup}>
          <label>Name</label>
          <input type="text" placeholder="Type here" />
        </div>
        <div className={styles.createGroup}>
          <label>Role</label>
          <select>
            <option value="">Choose Role</option>
            <option value="User">User</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Administrator">Administrator</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <div className={styles.createGroup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Type here"
            onChange={(e) => {
              if (e.target.value.length > 0) {
                setActive(true);
              } else {
                setActive(false);
              }
            }}
          />
        </div>
        {/* <div className={styles.createGroup}>
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            
          />
        </div> */}
        <PrimaryButton
          text="Create User"
          active={active}
          action={() => {
            console.log("User created");
          }}
        />
      </div>
    </PopupStyle>
  );
};

export default Createuser;
