import React, { useState } from "react";
import styles from "./styles.module.css";

const CeoPageSixteen = ({ edit }: { edit: boolean }) => {
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
  const [textData, setTextData] = useState({
    title: "Statement of Financial Position as at 28 Feb. 2022- comparison with prior period",
    text1: "",
    text2: "February 2021",
    text3: "February 2020",
    text4: "YOY Growth",
  });
  return (
    <div className={styles.pageFourteen}>
      {edit ? (
        <input
          type="text"
          value={textData.title}
          onChange={(e) => {
            setTextData({ ...textData, title: e.target.value });
          }}
        />
      ) : (
        <h2>{textData.title}</h2>
      )}
      <div className={styles.statementTable}>
        <div className={styles.statementHead}>
          {edit ? (
            <>
              <input
                type="text"
                value={textData.text1}
                onChange={(e) => {
                  setTextData({ ...textData, text1: e.target.value });
                }}
              />
              <input
                type="text"
                value={textData.text2}
                onChange={(e) => {
                  setTextData({ ...textData, text2: e.target.value });
                }}
              />
              <input
                type="text"
                value={textData.text3}
                onChange={(e) => {
                  setTextData({ ...textData, text3: e.target.value });
                }}
              />
              <input
                type="text"
                value={textData.text4}
                onChange={(e) => {
                  setTextData({ ...textData, text4: e.target.value });
                }}
              />
            </>
          ) : (
            <>
              <p>{textData.text1}</p>
              <p>{textData.text2}</p>
              <p>{textData.text3}</p>
              <p>{textData.text4}</p>
            </>
          )}
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
              {edit ? (
                <>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => {
                      const newState = [...data];
                      newState[index].title = e.target.value;
                      setData(newState);
                    }}
                  />
                  <input
                    type="text"
                    value={item.first}
                    onChange={(e) => {
                      const newState = [...data];
                      newState[index].first = e.target.value;
                      setData(newState);
                    }}
                  />
                  <input
                    type="text"
                    value={item.second}
                    onChange={(e) => {
                      const newState = [...data];
                      newState[index].second = e.target.value;
                      setData(newState);
                    }}
                  />
                  <input
                    type="text"
                    value={item.growth}
                    onChange={(e) => {
                      const newState = [...data];
                      newState[index].growth = e.target.value;
                      setData(newState);
                    }}
                  />
                </>
              ) : (
                <>
                  <p>{item.title}</p>
                  <p>{item.first}</p>
                  <p>{item.second}</p>
                  <p>{item.growth}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CeoPageSixteen;
