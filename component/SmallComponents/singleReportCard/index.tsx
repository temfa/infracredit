"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Report from "../../../public/images/report.png";
import { useRouter } from "next/navigation";

const SingleReportCard = ({ title, number, text, type }: { title: string; number: string; text: string; type: boolean }) => {
  const router = useRouter();
  return (
    <div className={type ? styles.singleReportCardConts : styles.singleReportCardCont}>
      <Image src={Report} alt="Report" width={285} />
      <h2>{title}</h2>
      <div>
        <p>
          {number} <span>users</span>
        </p>
        <h2
          onClick={() => {
            router.push("/edit-report");
          }}>
          {text}
        </h2>
      </div>
    </div>
  );
};

export default SingleReportCard;
