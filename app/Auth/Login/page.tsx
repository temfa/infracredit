"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import Input from "@/component/SmallComponents/Input";
import Ifracoloredlogo from "@/component/Svgs/ifracoloredlogo";
import PrimaryButton from "@/component/SmallComponents/buttons/primarybutton";
import Image from "next/image";
import Macbook from "../../../public/images/macbook.png";
import Infrawhitelogo from "@/component/Svgs/infrawhitelogo";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.pageCov}>
      <div className={styles.secionA}>
        <div>
          <Infrawhitelogo />
          <h2>We provide you with the best platform to Create and Edit Reports of your choice. </h2>
        </div>
        <Image src={Macbook} alt="macbook" />
      </div>
      <div className={styles.secionB}>
        <div className={styles.sectionBWrapper}>
          <div className={styles.secionLogo}>
            <Ifracoloredlogo />
          </div>
          <div className={styles.sectionBGroup}>
            <div className={styles.inputs}>
              <Input
                text="Username"
                placeholder="Enter Username"
                types="text"
                action={(e: any) => {
                  setUsername(e?.target?.value);
                }}
              />
              <Input
                text="Password"
                placeholder="Enter Password"
                types="Password"
                action={(e: any) => {
                  setPassword(e?.target?.value);
                  if (e?.target?.value.length > 0) {
                    setActive(true);
                  } else {
                    setActive(false);
                  }
                }}
              />
            </div>
            <div className={styles.inputsBtn}>
              <PrimaryButton
                text="Sign in"
                active={active}
                action={() => {
                  router.push("/Admin/Dashboard");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
