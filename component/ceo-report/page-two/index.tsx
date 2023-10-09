import React, { useState } from "react";
import styles from "./styles.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import type { ChartData, ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
const CeoPageTwo = () => {
  interface LineProps {
    options: ChartOptions<"doughnut">;
    data: ChartData<"doughnut">;
  }

  const [chartData, setChartData] = useState<LineProps>({
    data: {
      datasets: [
        {
          // label: "red",
          data: [23, 11, 15, 13, 12, 14, 12],
          backgroundColor: ["#5B9BD5", "#70AD47", "#A9D18E", "#70AD47", "#E2F0D9", "#A5A5A5", "#FFC000"],
          weight: 1,
        },
      ],
      labels: ["GPC 23%", "PAT 11%", "GELUL 15%", "VIATHAN 13%", "NSP 12%", "TTSP 14%", "LFZC 12%"],
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
          position: "top",
          display: true,
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
    <div className={styles.pageTwo}>
      <div className={styles.strategicPlan}>
        <h2>Strategic Business Plan Update</h2>
        <p>
          The following are the updates on our corporate strategic workstreams which include: (i) Growth in Guarantee Portfolio and Execution of New Guarantee Products; (ii) Growth
          in Capital (Core Tier 1 Capital); (iii) Risk Sharing/Participation Arrangements; (iv) Our People Strategy; (v) Technical Assistance/Capacity Building Programme and (vi)
          Project Development Strategy;
        </p>
      </div>
      <div className={styles.currentPort}>
        <h2>I. Current Guarantee Portfolio</h2>
        <div>
          <p>
            Gross guarantee fee income is based on total guarantee guarantees issued since inception of N87.6 Billion through 28 February 2022. In FY2022, a total of N103.4 billion
            in guarantee transactions are projected to reach financial close, with N10.0 billion successfully closed as at 28 February 2022. As of date, the pipeline of active
            mandates comprises 34 transactions totaling N301.5 billion.
          </p>
          <div className={styles.currentChart}>
            <h2>Analysis of Guaranteed Transactions Since Inception of NGN87.6 Billion as at 28 February 2022</h2>
            <Doughnut data={chartData.data} options={chartData.options} />
          </div>
        </div>
      </div>
      <div className={styles.keyStatistics}>
        <div>
          <h2>II. Key Statistics on O&S Activity – Inception to Date</h2>
          <div className={styles.smallLine}></div>
        </div>
        <div className={styles.keyTable}>
          <div className={styles.keyTableHeader}>
            <p>SUMMARY OF KEY ACTIVITY</p>
            <p>2017-20</p>
            <p>2021</p>
            <p>
              2022
              <br />
              <span>(2 months) </span>
            </p>
          </div>
          <div className={styles.keyTableSingle}>
            <p>New Guarantees Executed</p>
            <p>4</p>
            <p>4</p>
            <p>4</p>
          </div>
          <div className={styles.keyTableSingle}>
            <p>Size of New Guarantees Executed</p>
            <p>N43.5 billion</p>
            <p>N43.5 billion</p>
            <p>N10.0 billion</p>
          </div>
          <div className={styles.keyTableSingle}></div>
          <div className={styles.keyTableSingle}>
            <p>New Mandates Signed (excl. Follow-On Mandates)</p>
            <p>24</p>
            <p>22</p>
            <p>N/A</p>
          </div>
          <div className={styles.keyTableSingle}>
            <p>Size of New Mandates Signed</p>
            <p>N293.2 billion</p>
            <p>N284.5 billion</p>
            <p>N/A</p>
          </div>
          <div className={styles.keyTableSingle}>
            <p>Size of Follow-On Mandates</p>
            <p>N3.6 billion</p>
            <p>N/A</p>
            <p>N/A</p>
          </div>
          <div className={styles.keyTableSingle}></div>
          <div className={styles.keyTableSingle}></div>
          <div className={styles.keyTableHeader}>
            <p>PERIOD ENDING STATISTICS</p>
          </div>
          <div className={styles.keyTableSingle}>
            <p>Size of Guaranteed Transactions Since Inception</p>
            <p>N43.5 billion</p>
            <p>N77.6 billion</p>
            <p>N87.6 billion</p>
          </div>
          <div className={styles.keyTableSingle}>
            <p>Size of Mandated Deal Pipeline (period-end)</p>
            <p>N203.5 billion</p>
            <p>N311.5 billion</p>
            <p>N301.5 billion</p>
          </div>
          <div className={styles.keyTableSingle}>
            <p>Advanced Mandates (to close in &lt; 6 months)</p>
            <p>N70.6 billion</p>
            <p>N63.6 billion</p>
            <p>N53.6 billion</p>
          </div>
          <div className={styles.keyTableSingle}>
            <p>Longer Mandates (to close in &gt; 6 months)</p>
            <p>N93.0 billion</p>
            <p>N191.4 billion</p>
            <p>N191.4 billion</p>
          </div>
          <div className={styles.keyTableSingle}>
            <p>Contingent Refis (long-lead Greenfield)</p>
            <p>N39.9 billion</p>
            <p>N56.5 billion</p>
            <p>N56.5 billion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoPageTwo;
