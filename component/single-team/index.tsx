import React from "react";
import styles from "./styles.module.css";
import { ProgressStyled } from "@/component/single-team/progress";
import Image from "next/image";
import Message from "../Svgs/message";
import Calender from "../Svgs/calender";

const SingleTeam = ({ title, width, bgColor }: { title: string; width: string; bgColor: string }) => {
  return (
    <div className={styles.singleTeam}>
      <div className={styles.singleTeamHeader}>
        <h2>{title}</h2>
        <div>
          <Image src="/images/user.png" alt="Commenter" width={32} height={32} />
          <Image src="/images/user.png" alt="Commenter" width={32} height={32} />
          <Image src="/images/user.png" alt="Commenter" width={32} height={32} />
        </div>
      </div>
      <div className={styles.progress}>
        <div className={styles.review}>
          <h2>Review</h2>
          <p>{width} Done</p>
        </div>
        <div className={styles.progressWidth}>
          <ProgressStyled bgColor={bgColor} width={width}></ProgressStyled>
        </div>
      </div>
      {/* <div className={styles.singleTeamBody}>
        <div>
          <Message />
          <p>{number}</p>
        </div>
        <div>
          <Calender />
          <h2>{date}</h2>
        </div>
      </div> */}
    </div>
  );
};

export default SingleTeam;
