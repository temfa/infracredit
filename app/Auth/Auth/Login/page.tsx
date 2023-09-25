import React from "react";
import styles from "./styles.module.css";
import Input from "@/component/SmallComponents/Input";
import Ifracoloredlogo from "@/component/Svgs/ifracoloredlogo";
import PrimaryButton from "@/component/SmallComponents/buttons/primarybutton";

const Login = () => {
  return (
    <div className={styles.pageCov}>
      <div className={styles.secionA}></div>
      <div className={styles.secionB}>
        <div className={styles.secionLogo}>
          <Ifracoloredlogo />
        </div>
        <div className={styles.inputs}>
          <Input text="Username" placeholder="Enter Username" types="text" />
          <Input
            text="Password"
            placeholder="Enter Password"
            types="Password"
          />
        </div>
        <div className={styles.inputsBtn}>
          <PrimaryButton text="Sign in" />
        </div>
      </div>
    </div>
  );
};

export default Login;
