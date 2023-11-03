import React, { useState } from "react";
import styles from "./styles.module.css";

const CeoPageThirteen = ({ edit }: { edit: boolean }) => {
  interface Table {
    title: string;
    actual: string;
    budget: string;
    budgetAchieved: string;
    secondActual: string;
    growth: string;
  }
  const [data, setData] = useState<Table[]>([
    {
      title: "Gross Revenue",
      actual: "3,890",
      budget: "4,878",
      budgetAchieved: "12%",
      secondActual: "345",
      growth: "1.2%",
    },
    {
      title: "Guarantee fee income",
      actual: "3,890",
      budget: "4,878",
      budgetAchieved: "12%",
      secondActual: "345",
      growth: "1.2%",
    },
    {
      title: "Guarantee feee expenses",
      actual: "3,890",
      budget: "4,878",
      budgetAchieved: "12%",
      secondActual: "345",
      growth: "1.2%",
    },
    {
      title: "Net guarantee fee",
      actual: "3,890",
      budget: "4,878",
      budgetAchieved: "12%",
      secondActual: "345",
      growth: "1.2%",
    },
    {
      title: "Investment income",
      actual: "3,890",
      budget: "4,878",
      budgetAchieved: "12%",
      secondActual: "345",
      growth: "1.2%",
    },
    {
      title: "Interest expense",
      actual: "3,890",
      budget: "4,878",
      budgetAchieved: "12%",
      secondActual: "345",
      growth: "1.2%",
    },
    {
      title: "Net investment income",
      actual: "3,890",
      budget: "4,878",
      budgetAchieved: "12%",
      secondActual: "345",
      growth: "1.2%",
    },
    {
      title: "Total net revenue",
      actual: "3,890",
      budget: "4,878",
      budgetAchieved: "12%",
      secondActual: "345",
      growth: "1.2%",
    },
    {
      title: "Unrealized net exchange gains",
      actual: "3,890",
      budget: "4,878",
      budgetAchieved: "12%",
      secondActual: "345",
      growth: "1.2%",
    },
    {
      title: "Net total income (incl. exch. gains/(losses)",
      actual: "3,890",
      budget: "4,878",
      budgetAchieved: "12%",
      secondActual: "345",
      growth: "1.2%",
    },
    {
      title: "Net total income (excl. exch. Gains/(losses)",
      actual: "3,890",
      budget: "4,878",
      budgetAchieved: "12%",
      secondActual: "345",
      growth: "1.2%",
    },
    {
      title: "Staff costs",
      actual: "3,890",
      budget: "4,878",
      budgetAchieved: "12%",
      secondActual: "345",
      growth: "1.2%",
    },
    {
      title: "Other operating expenses",
      actual: "3,890",
      budget: "4,878",
      budgetAchieved: "12%",
      secondActual: "345",
      growth: "1.2%",
    },
    {
      title: "Total operating expenses",
      actual: "3,890",
      budget: "4,878",
      budgetAchieved: "12%",
      secondActual: "345",
      growth: "1.2%",
    },
    {
      title: "Profit/(loss) before tax (incl. exch. Gains/losses)",
      actual: "3,890",
      budget: "4,878",
      budgetAchieved: "12%",
      secondActual: "345",
      growth: "1.2%",
    },
    {
      title: "Profit/(loss) before tax (excl. exch. Gains/(losses)",
      actual: "3,890",
      budget: "4,878",
      budgetAchieved: "12%",
      secondActual: "345",
      growth: "1.2%",
    },
    {
      title: "",
      actual: "",
      budget: "",
      budgetAchieved: "",
      secondActual: "",
      growth: "",
    },
    {
      title: "Cost to income ratio (Incl.exch. Gains/(losses)",
      actual: "12%",
      budget: "12%",
      budgetAchieved: "",
      secondActual: "12%",
      growth: "",
    },
    {
      title: "Cost to income ratio (excl. exch. Gains/(losses)",
      actual: "12%",
      budget: "12%",
      budgetAchieved: "",
      secondActual: "12%",
      growth: "",
    },
  ]);
  const [textData, setTextData] = useState({
    title1: "Profit or loss: Variance analysis- Actual Vs. Budget and Comparative Period",
    title2: "Profit or loss analysis- 31st December 2021",
    text1: "",
    text2: "2021 Actual",
    text3: "2021 budget",
    text4: "Budget Achieved",
    text5: "2020 Actual",
    text6: "YOY Growth",
  });
  return (
    <div className={styles.pageThirteen}>
      <div className={styles.header}>
        {edit ? (
          <>
            <input
              type="text"
              value={textData.title1}
              onChange={(e) => {
                setTextData({ ...textData, title1: e.target.value });
              }}
            />
            <input
              type="text"
              value={textData.title2}
              onChange={(e) => {
                setTextData({ ...textData, title2: e.target.value });
              }}
            />
          </>
        ) : (
          <>
            <h1>{textData.title1}</h1>
            <h2>{textData.title2}</h2>
          </>
        )}
      </div>
      <div className={styles.profitTable}>
        <div className={styles.profitHead}>
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
              <input
                type="text"
                value={textData.text5}
                onChange={(e) => {
                  setTextData({ ...textData, text5: e.target.value });
                }}
              />
              <input
                type="text"
                value={textData.text6}
                onChange={(e) => {
                  setTextData({ ...textData, text6: e.target.value });
                }}
              />
            </>
          ) : (
            <>
              <p>{textData.text1}</p>
              <p>{textData.text2}</p>
              <p>{textData.text3}</p>
              <p>{textData.text4}</p>
              <p>{textData.text5}</p>
              <p>{textData.text6}</p>
            </>
          )}
        </div>
        <div className={styles.profitHeader}>
          <p></p>
          <p>N’million</p>
          <p>N’million</p>
          <p>%</p>
          <p>N’million</p>
          <p>%</p>
        </div>
        {data?.map((item, index) => {
          return (
            <div className={styles.profitSingle} key={index}>
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
                    value={item.actual}
                    onChange={(e) => {
                      const newState = [...data];
                      newState[index].actual = e.target.value;
                      setData(newState);
                    }}
                  />
                  <input
                    type="text"
                    value={item.budget}
                    onChange={(e) => {
                      const newState = [...data];
                      newState[index].budget = e.target.value;
                      setData(newState);
                    }}
                  />
                  <input
                    type="text"
                    value={item.budgetAchieved}
                    onChange={(e) => {
                      const newState = [...data];
                      newState[index].budgetAchieved = e.target.value;
                      setData(newState);
                    }}
                  />
                  <input
                    type="text"
                    value={item.secondActual}
                    onChange={(e) => {
                      const newState = [...data];
                      newState[index].secondActual = e.target.value;
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
                  <p>{item.actual}</p>
                  <p>{item.budget}</p>
                  <p>{item.budgetAchieved}</p>
                  <p>{item.secondActual}</p>
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

export default CeoPageThirteen;
