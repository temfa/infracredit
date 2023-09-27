import React, { useState } from "react";
import styles from "./styles.module.css";
import { sidenav } from "@/utils/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Logout from "@/component/Svgs/logout";
import LogoutPopup from "@/component/SmallComponents/logoutPopup";

const Sidenav = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [overlay, setOverlay] = useState(false);
  return (
    <div className={styles.sideBar}>
      <div className={styles.sidebarLink}>
        <p>Menu</p>
        {sidenav.map((item, index) => {
          const isActive = pathName === item.link;
          const itemClass = isActive ? `${styles.sideIcon} ${styles.active}` : styles.sideIcon;

          return (
            <div className={itemClass} key={index}>
              <span className={styles.icon}>{item.svg}</span>
              <Link href={item.link}>{item.title}</Link>
            </div>
          );
        })}
      </div>
      <div className={styles.sidebarOther}>
        <p>Other</p>
        <div className={styles.sideIcon}>
          <span>
            <Logout />
          </span>
          <p
            onClick={() => {
              setOverlay(true);
            }}>
            Log Out
          </p>
        </div>
      </div>
      {overlay ? (
        <LogoutPopup
          action1={() => {
            setOverlay(false);
          }}
          action2={() => {
            router.push("/");
          }}
        />
      ) : null}
    </div>
  );
};

export default Sidenav;
