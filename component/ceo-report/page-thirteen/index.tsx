import React, { useState } from "react";
import styles from "./styles.module.css";

const CeoPageThirteen = () => {
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
  return (
    <div className={styles.pageThirteen}>
      <div className={styles.header}>
        <h1>Profit or loss: Variance analysis- Actual Vs. Budget and Comparative Period</h1>
        <h2>Profit or loss analysis- 31st December 2021</h2>
      </div>
      <div className={styles.profitTable}>
        <div className={styles.profitHead}>
          <p></p>
          <p>
            2021 <br /> Actual
          </p>
          <p>
            2021 <br />
            budget
          </p>
          <p>
            Budget <br /> Achieved
          </p>
          <p>
            2020 <br /> Actual
          </p>
          <p>
            YOY <br /> Growth
          </p>
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
              <p>{item.title}</p>
              <p>{item.actual}</p>
              <p>{item.budget}</p>
              <p>{item.budgetAchieved}</p>
              <p>{item.secondActual}</p>
              <p>{item.growth}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CeoPageThirteen;
