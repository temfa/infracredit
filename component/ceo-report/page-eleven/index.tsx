import React, { useState } from "react";
import styles from "./styles.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import type { ChartData, ChartOptions } from "chart.js";
import HeaderLine from "@/component/header-line";
import ChartPopup from "@/component/chart-popup";

const CeoPageEleven = ({ edit, popup, popup1, popupAction, popupClose }: { edit: boolean; popup: boolean; popup1: boolean; popupAction: any; popupClose: any }) => {
  interface LineProps {
    options: ChartOptions<"doughnut">;
    data: ChartData<"doughnut">;
  }

  const [chartData, setChartData] = useState<LineProps>({
    data: {
      datasets: [
        {
          // label: "red",
          data: [93.5, 6.9, 4.4],
          backgroundColor: ["#29ADE4", "#93C953", "#1C4E7A"],
          weight: 1,
        },
      ],
      labels: ["Eurobonds", "FGN bonds", "Commercial paper"],
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
          position: "bottom",
          display: true,
          labels: { boxWidth: 10 },
        },
        title: {
          display: true,
          text: "Investment Portfolio",
          color: "#5E5E5E",
          font: { size: 16, weight: "bold", family: "Inter" },
          fullSize: true,
        },
      },
    },
  });
  const [data, setData] = useState({
    title1: "Statement of Financial Position",
    text1: "• Total assets: N74.45 billion compared to N65.44 billion in 2020 December representing 14% YOY growth",
    text2: "• Investment securities: N67.04 billion compared to N49.58 billion in 2020 December representing 35% YOY growth",
    text3:
      "• Unsecured debt capital: N30.3 billion compared to N28.6 billion in 2020 December representing 6% YOY growth due to additional interest expense accrual and exchange rate movement.",
    text4:
      " • Shareholders’ fund: N37.56 billion compared to N32.00 billion in 2020 December representing 17% YOY growth due to additional funding from InfraCo and Leadway; and profit retention",
    title2: "Analysis of Return Ratios",
    text5:
      "• Pre-tax return on average equity (excluding exchange gains) was 5% as against budget of 5.2% for the year ended 31st December 2021. Return on average equity (inclusive of exchanging gains) as at 31st December 2021 was 10%.",
    text6:
      "• Pre-tax return on average assets (excluding exchange gains) was 2.5% as against budget of 3% for the period ended 31st December 2021. Return on average assets (inclusive of exchanging gains) as at 31st December 2021 was 5%.",
    text7:
      "• Pre-tax return on average capital employed (excluding exchange gains) was 5.6% as against budget of 6% for the period ended 31st December 2021. Return on average capital employed (inclusive of exchanging gains) as at 31st December 2021 was 8.3%.",
    text8:
      "As at 31st December 2021, InfraCredit held a total investment portfolio of N67 billion (including accrued interest) comprising Eurobonds (N62.7 billion; 93.5%),FGN Bonds (N4.6 billion 6.9%), and Commercial paper (N298.9 million 0.4%).",
    text9: "USD-denominated investments account for 94% of total funded capital.",
    text10:
      "The weighted average duration of total investments portfolio is 3.81 years of which long-term and short-term investments respectively account for 4.24 years and 0.24 years.",
  });
  return (
    <div className={styles.pageEleven}>
      {edit ? (
        <>
          <input
            type="text"
            value={data.title1}
            onChange={(e) => {
              setData({ ...data, title1: e.target.value });
            }}
          />
          <textarea
            value={data.text1}
            onChange={(e) => {
              setData({ ...data, text1: e.target.value });
            }}
          />
          <textarea
            value={data.text2}
            onChange={(e) => {
              setData({ ...data, text2: e.target.value });
            }}
          />
          <textarea
            value={data.text3}
            onChange={(e) => {
              setData({ ...data, text3: e.target.value });
            }}
          />
          <textarea
            value={data.text4}
            onChange={(e) => {
              setData({ ...data, text4: e.target.value });
            }}
          />
          <input
            type="text"
            value={data.title2}
            onChange={(e) => {
              setData({ ...data, title2: e.target.value });
            }}
          />
          <textarea
            value={data.text5}
            onChange={(e) => {
              setData({ ...data, text5: e.target.value });
            }}
          />
          <textarea
            value={data.text6}
            onChange={(e) => {
              setData({ ...data, text6: e.target.value });
            }}
          />
          <textarea
            value={data.text7}
            onChange={(e) => {
              setData({ ...data, text7: e.target.value });
            }}
          />
        </>
      ) : (
        <>
          <h2>{data.title1}</h2>
          <p>{data.text1}</p>
          <p>{data.text2}</p>
          <p>{data.text3}</p>
          <p>{data.text4}</p>
          <h2>{data.title2}</h2>
          <p>{data.text5}</p>
          <p>{data.text6}</p>
          <p>{data.text7}</p>
        </>
      )}
      <div className={styles.investmentLine}>
        <h3>Investment Portfolio</h3>
        <HeaderLine />
      </div>
      <div className={styles.financialCharts}>
        <div>
          {edit ? (
            <>
              <textarea
                value={data.text8}
                onChange={(e) => {
                  setData({ ...data, text8: e.target.value });
                }}
              />
              <textarea
                value={data.text9}
                onChange={(e) => {
                  setData({ ...data, text9: e.target.value });
                }}
              />
              <textarea
                value={data.text10}
                onChange={(e) => {
                  setData({ ...data, text10: e.target.value });
                }}
              />
            </>
          ) : (
            <>
              <p>{data.text8}</p>
              <p>{data.text9}</p>
              <p>{data.text10}</p>
            </>
          )}
        </div>
        <div>
          <Doughnut data={chartData.data} options={chartData.options} onClick={edit ? popupAction : null} />
        </div>
      </div>
      {popup && popup1 ? <ChartPopup chartDatas={chartData} setChartDatas={setChartData} popupClose={popupClose} /> : null}
    </div>
  );
};

export default CeoPageEleven;
