"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
// import Report from "../../../public/images/report.png";
import { useRouter } from "next/navigation";

const SingleReportCard = ({ title, type, img }: { title: string; type: boolean; img: any }) => {
  const router = useRouter();
  return (
    <div className={type ? styles.singleReportCardConts : styles.singleReportCardCont}>
      <Image src={img} alt="Report" width={260} />
      <h2>{title}</h2>
      <h3>This is the report description for the template, what they are supposed to work on</h3>
      {/* <div>
        <p>
          {number} <span>users</span>
        </p>
        <h2
          onClick={() => {
            router.push("/edit-report");
          }}>
          {text}
        </h2>
      </div> */}
    </div>
  );
};

export default SingleReportCard;
