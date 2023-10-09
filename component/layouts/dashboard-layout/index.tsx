"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import UserPopup from "../../SmallComponents/userPopup";
import Topnav from "../../Layout/TopNav";
import Sidenav from "../../Layout/SideNav";

const DashboardLayout = ({ children }: { children: any }) => {
  const [overlay, setoverlay] = useState(false);
  return (
    <div className={styles.layoutContainer}>
      <Topnav
        action={() => {
          setoverlay(true);
        }}
      />
      <div className={styles.layoutBody}>
        {overlay ? (
          <UserPopup
            action={() => {
              setoverlay(false);
            }}
          />
        ) : null}
        <Sidenav />
        <div className={styles.layoutCont}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
