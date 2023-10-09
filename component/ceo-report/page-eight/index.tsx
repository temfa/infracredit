import React, { useState } from "react";
import styles from "./styles.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import type { ChartData, ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
const CeoPageEight = () => {
  interface Data {
    label: string;
    amount: string;
  }

  const [data, setData] = useState<Data[]>([
    {
      label: "Aggregate Portfolio size:",
      amount: "NGN 84.66bn",
    },
    {
      label: "Aggregate Portfolio size:",
      amount: "NGN 84.66bn",
    },
    {
      label: "Aggregate Portfolio size:",
      amount: "NGN 84.66bn",
    },
    {
      label: "Aggregate Portfolio size:",
      amount: "NGN 84.66bn",
    },
    {
      label: "Aggregate Portfolio size:",
      amount: "NGN 84.66bn",
    },
    {
      label: "Aggregate Portfolio size:",
      amount: "NGN 84.66bn",
    },
    {
      label: "Aggregate Portfolio size:",
      amount: "NGN 84.66bn",
    },
    {
      label: "Aggregate Portfolio size:",
      amount: "NGN 84.66bn",
    },
    {
      label: "InfraCredit Core capital:",
      amount: "NGN 84.66bn",
    },
    {
      label: "InfraCredit Gross Leverage ratio (excluding callable and subordinated debt):",
      amount: "NGN 84.66bn",
    },
    {
      label: "InfraCredit Net Leverage ratio (excluding callable and subordinated debt):",
      amount: "NGN 84.66bn",
    },
  ]);
  interface LineProps {
    options: ChartOptions<"doughnut">;
    data: ChartData<"doughnut">;
  }

  const [chartData, setChartData] = useState<LineProps>({
    data: {
      datasets: [
        {
          // label: "red",
          data: [11, 11, 11, 11, 11],
          backgroundColor: ["#93C953", "#0C4421", "#29ADE4", "#4E82BD", "#1D4F79"],
          weight: 1,
        },
      ],
      labels: ["BBB_(11%)", "BBB(11%)", "BBB+(11%)", "A+(11%)%", "AA(11%)"],
    },
    options: {
      responsive: true,
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
      plugins: {
        legend: {
          position: "left",
          display: true,
          labels: {
            boxWidth: 10,
          },
        },
        // title: {
        //   display: true,
        //   text: "Analysis of Guaranteed Transactions Since Inception of NGN87.6 Billion as at 28 February 2022",
        //   color: "#70ad47",
        //   font: { size: 20, weight: "bold", family: "Inter" },
        //   fullSize: true,
        // },
      },
    },
  });
  return (
    <div className={styles.pageEight}>
      <h2>Portfolio Management</h2>
      <div className={styles.portfolioTable}>
        <h2>Portfolio at a glance</h2>
        <div>
          {data?.map((item, index) => {
            return (
              <div className={styles.portfolioSingle} key={index}>
                <p className={styles.portfolioLabel}>{item.label}</p>
                <p className={styles.portfolioAmount}>{item.amount}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.portfolioChart}>
        <h2>RATING DISTRIBUTION (NGN BN)</h2>
        <div className={styles.portfolioChart2}>
          <div>
            <Doughnut data={chartData.data} options={chartData.options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoPageEight;
