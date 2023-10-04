"use client";
import React, { useReducer, useState } from "react";
import styles from "./styles.module.css";
import Topnav from "./TopNav";
import { useRouter, usePathname } from "next/navigation";
import Sidenav from "./SideNav";
import { AnimatePresence, motion } from "framer-motion";
import UserPopup from "../SmallComponents/userPopup";

const Layout = ({ children }: { children: any }) => {
  const [overlay, setoverlay] = useState(false);
  const variants = {
    hidden: { background: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
  };
  // const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
        className="">
        <div className={styles.layoutContainer}>
          {pathname.includes("admin") ? (
            <Topnav
              action={() => {
                setoverlay(true);
              }}
            />
          ) : null}
          <div className={styles.layoutBody}>
            {overlay ? (
              <UserPopup
                action={() => {
                  setoverlay(false);
                }}
              />
            ) : null}
            {pathname.includes("admin") ? <Sidenav /> : null}
            <div className={pathname.includes("admin") ? styles.layoutCont : ""}>{children}</div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
