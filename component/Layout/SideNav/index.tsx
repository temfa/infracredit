import React, { useState } from "react";
import styles from "./styles.module.css";
import { sidenav } from "@/utils/data";

const Sidenav = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index: any) => {
    setActiveItem(index);
  };

  return (
    <div className={styles.sideBar}>
      <p>Menu</p>
      {sidenav.map((item, index) => {
        const isActive = activeItem === index;
        const itemClass = isActive
          ? `${styles.sideIcon} ${styles.active}`
          : styles.sideIcon;

        return (
          <div
            className={itemClass}
            key={index}
            onClick={() => handleItemClick(index)}
          >
            <span className={styles.icon}>{item.svg}</span>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidenav;
