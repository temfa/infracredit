import React, { useState } from "react";
import styles from "./styles.module.css";

const CeoPageFourteen = () => {
  interface Sample {
    title: string;
    first: string;
    second: string;
    growth: string;
  }
  const [data, setData] = useState<Sample[]>([
    {
      title: "Assets",
      first: "",
      second: "",
      growth: "",
    },
    {
      title: "Cash and cash equivalents",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Investment securities",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Guarantee fee receivable",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Other assets",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Property and equipment",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Right of use asset",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Intangible assets",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Cash and cash equivalents",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Total assets",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "",
      first: "",
      second: "",
      growth: "",
    },
    {
      title: "Liabilities",
      first: "",
      second: "",
      growth: "",
    },
    {
      title: "Deferred tax asset",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Deferred tax asset",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Deferred tax asset",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Deferred tax asset",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Deferred tax asset",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Total liabilities",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "",
      first: "",
      second: "",
      growth: "",
    },
    {
      title: "Equity",
      first: "",
      second: "",
      growth: "",
    },
    {
      title: "Deferred tax asset",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Deferred tax asset",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Deferred tax asset",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Deferred tax asset",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Deferred tax asset",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Deferred tax asset",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Total equity",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
    {
      title: "Equity and liabilities",
      first: "1,760",
      second: "1,760",
      growth: "2.4%",
    },
  ]);
  return (
    <div className={styles.pageFourteen}>
      <h2>Statement of Financial Position- comparison with prior year</h2>
      <div className={styles.statementTable}>
        <div className={styles.statementHead}>
          <p></p>
          <p>December 2021</p>
          <p>December 2020</p>
          <p>YOY Growth</p>
        </div>
        <div className={styles.statementHeader}>
          <p></p>
          <p>N’million</p>
          <p>N’million</p>
          <p>%</p>
        </div>
        {data?.map((item, index) => {
          return (
            <div className={styles.statementSingle} key={index}>
              <p>{item.title}</p>
              <p>{item.first}</p>
              <p>{item.second}</p>
              <p>{item.growth}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CeoPageFourteen;
