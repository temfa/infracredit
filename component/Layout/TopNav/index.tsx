import React from "react";
import styles from "./styles.module.css";
import Ifracoloredlogo from "@/component/Svgs/ifracoloredlogo";
import Notification from "@/component/Svgs/notification";
import Image from "next/image";
import Searchbox from "@/component/Svgs/searchbox";
const Topnav = () => {
  return (
    <div className={styles.topNamMain}>
      <div className={styles.logoSearch}>
        <div className={styles.logoInfra}>
          <Ifracoloredlogo />
        </div>
        <div className={styles.search}>
          <Searchbox />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className={styles.notif}>
        <div className={styles.notfBox}>
          <Notification />{" "}
        </div>
        <div>
          <h1>Olusanya Ezekiel</h1>
          <p>USERS</p>
        </div>
        <Image
          src="/Image/Ellipse2.png"
          width="48"
          height="48"
          alt="username"
        />
      </div>
    </div>
  );
};

export default Topnav;
