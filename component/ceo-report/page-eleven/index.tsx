import React, { useState } from "react";
import styles from "./styles.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import type { ChartData, ChartOptions } from "chart.js";
import HeaderLine from "@/component/header-line";

const CeoPageEleven = () => {
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
  return (
    <div className={styles.pageEleven}>
      <h2>Statement of Financial Position</h2>
      <p>• Total assets: N74.45 billion compared to N65.44 billion in 2020 December representing 14% YOY growth</p>
      <p>• Investment securities: N67.04 billion compared to N49.58 billion in 2020 December representing 35% YOY growth</p>
      <p>
        • Unsecured debt capital: N30.3 billion compared to N28.6 billion in 2020 December representing 6% YOY growth due to additional interest expense accrual and exchange rate
        movement.
      </p>
      <p>
        • Shareholders’ fund: N37.56 billion compared to N32.00 billion in 2020 December representing 17% YOY growth due to additional funding from InfraCo and Leadway; and profit
        retention
      </p>
      <h2>Analysis of Return Ratios</h2>
      <p>
        • Pre-tax return on average equity (excluding exchange gains) was 5% as against budget of 5.2% for the year ended 31st December 2021. Return on average equity (inclusive of
        exchanging gains) as at 31st December 2021 was 10%.
      </p>
      <p>
        • Pre-tax return on average assets (excluding exchange gains) was 2.5% as against budget of 3% for the period ended 31st December 2021. Return on average assets (inclusive
        of exchanging gains) as at 31st December 2021 was 5%.
      </p>
      <p>
        • Pre-tax return on average capital employed (excluding exchange gains) was 5.6% as against budget of 6% for the period ended 31st December 2021. Return on average capital
        employed (inclusive of exchanging gains) as at 31st December 2021 was 8.3%.
      </p>
      <div className={styles.investmentLine}>
        <h3>Investment Portfolio</h3>
        <HeaderLine />
      </div>
      <div className={styles.financialCharts}>
        <div>
          <p>
            As at 31st December 2021, InfraCredit held a total investment portfolio of N67 billion (including accrued interest) comprising Eurobonds (N62.7 billion; 93.5%),FGN
            Bonds (N4.6 billion 6.9%), and Commercial paper (N298.9 million 0.4%).
          </p>
          <p>USD-denominated investments account for 94% of total funded capital.</p>
          <p>
            The weighted average duration of total investments portfolio is 3.81 years of which long-term and short-term investments respectively account for 4.24 years and 0.24
            years.
          </p>
        </div>
        <div>
          <Doughnut data={chartData.data} options={chartData.options} />
        </div>
      </div>
    </div>
  );
};

export default CeoPageEleven;
