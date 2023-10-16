import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Message from "../Svgs/message";
import Calender from "../Svgs/calender";
import PrimaryButton from "../SmallComponents/buttons/primarybutton";
import { useRouter } from "next/navigation";

const SingleTask = ({ title, comment, number, date }: { title: string; comment: string; number: number; date: string }) => {
  const router = useRouter();
  return (
    <div className={styles.singleTaskContainer}>
      <div className={styles.singleTaskHeader}>
        <h2>{title}</h2>
        <p>{comment}</p>
      </div>
      <div className={styles.singleTaskComment}>
        <Image src="/images/user.png" alt="Commenter" width={32} height={32} />
        <Image src="/images/user.png" alt="Commenter" width={32} height={32} />
        <Image src="/images/user.png" alt="Commenter" width={32} height={32} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.singleTaskBody}>
        <div>
          <Message />
          <p>{number}</p>
        </div>
        <div>
          <Calender />
          <h2>{date}</h2>
        </div>
      </div>
      <PrimaryButton
        text="Edit Report"
        active={true}
        action={() => {
          router.push("/edit-report");
        }}
      />
    </div>
  );
};

export default SingleTask;
