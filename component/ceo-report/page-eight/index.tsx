import React, { useState } from "react";
import styles from "./styles.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import type { ChartData, ChartOptions } from "chart.js";
import ChartPopup from "@/component/chart-popup";

ChartJS.register(ArcElement, Tooltip, Legend);
const CeoPageEight = ({ edit, popup, popup1, popupClose, popupAction }: { edit: boolean; popup: boolean; popup1: boolean; popupClose: any; popupAction: any }) => {
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
  const [titleData, setTitleData] = useState({
    title1: "Portfolio Management",
    title2: "Portfolio at a glance",
    title3: "RATING DISTRIBUTION (NGN BN)",
  });
  return (
    <div className={styles.pageEight}>
      {edit ? (
        <input
          type="text"
          value={titleData.title1}
          onChange={(e) => {
            setTitleData({ ...titleData, title1: e.target.value });
          }}
        />
      ) : (
        <h2>{titleData.title1}</h2>
      )}
      <div className={styles.portfolioTable}>
        {edit ? (
          <input
            type="text"
            value={titleData.title2}
            onChange={(e) => {
              setTitleData({ ...titleData, title2: e.target.value });
            }}
          />
        ) : (
          <h2>{titleData.title2}</h2>
        )}
        <div>
          {data?.map((item, index) => {
            return (
              <div className={styles.portfolioSingle} key={index}>
                {edit ? (
                  <>
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) => {
                        const newState = [...data];
                        newState[index].label = e.target.value;
                        setData(newState);
                      }}
                    />
                    <input
                      type="text"
                      value={item.amount}
                      onChange={(e) => {
                        const newState = [...data];
                        newState[index].amount = e.target.value;
                        setData(newState);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <p className={styles.portfolioLabel}>{item.label}</p>
                    <p className={styles.portfolioAmount}>{item.amount}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.portfolioChart}>
        {edit ? (
          <input
            type="text"
            value={titleData.title3}
            onChange={(e) => {
              setTitleData({ ...titleData, title3: e.target.value });
            }}
          />
        ) : (
          <h2>{titleData.title3}</h2>
        )}
        <div className={styles.portfolioChart2}>
          <div>
            <Doughnut data={chartData.data} options={chartData.options} onClick={edit ? popupAction : null} />
          </div>
        </div>
        {popup && popup1 ? <ChartPopup popupClose={popupClose} chartDatas={chartData} setChartDatas={setChartData} /> : null}
      </div>
    </div>
  );
};

export default CeoPageEight;
