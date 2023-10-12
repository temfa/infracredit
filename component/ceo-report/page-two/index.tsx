import React, { useState } from "react";
import styles from "./styles.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import type { ChartData, ChartOptions } from "chart.js";
import PopupStyle from "@/component/SmallComponents/popupStyle";
import { pieValue } from "@/utils/pieValue";
import SecondInput from "@/component/SmallComponents/second-input";

ChartJS.register(ArcElement, Tooltip, Legend);
const CeoPageTwo = ({ edit, popupAction, popup, popupClose }: { edit: boolean; popupAction: any; popup: boolean; popupClose: any }) => {
  interface LineProps {
    options: ChartOptions<"doughnut">;
    data: ChartData<"doughnut">;
  }

  const [chartDatas, setChartDatas] = useState<any>({
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
        title: {
          display: false,
          text: "Analysis of Guaranteed Transactions Since Inception of NGN87.6 Billion as at 28 February 2022",
          color: "#70ad47",
          font: { size: 20, weight: "bold", family: "Inter" },
          fullSize: true,
        },
      },
    },
  });
  const [data, setData] = useState({
    title1: "Strategic Business Plan Update",
    text1:
      "The following are the updates on our corporate strategic workstreams which include: (i) Growth in Guarantee Portfolio and Execution of New Guarantee Products; (ii) Growth in Capital (Core Tier 1 Capital); (iii) Risk Sharing/Participation Arrangements; (iv) Our People Strategy; (v) Technical Assistance/Capacity Building Programme and (vi) Project Development Strategy;",
    title2: "I. Current Guarantee Portfolio",
    text2:
      "Gross guarantee fee income is based on total guarantee guarantees issued since inception of N87.6 Billion through 28 February 2022. In FY2022, a total of N103.4 billionin guarantee transactions are projected to reach financial close, with N10.0 billion successfully closed as at 28 February 2022. As of date, the pipeline of active mandates comprises 34 transactions totaling N301.5 billion.",
    title3: "II. Key Statistics on O&S Activity – Inception to Date",
  });
  return (
    <div className={styles.pageTwo}>
      <div className={styles.strategicPlan}>
        {edit ? <input type="text" value={data?.title1} /> : <h2>{data?.title1}</h2>}
        {edit ? <input type="text" value={data?.text1} /> : <p>{data?.text1}</p>}
      </div>
      <div className={styles.currentPort}>
        {edit ? <input type="text" value={data?.title2} /> : <h2>{data?.title2}</h2>}
        <div>
          {edit ? <input type="text" value={data?.text2} /> : <h2>{data?.text2}</h2>}
          <div className={styles.currentChart}>
            <h2>Analysis of Guaranteed Transactions Since Inception of NGN87.6 Billion as at 28 February 2022</h2>
            <Doughnut data={chartDatas.data} options={chartDatas.options} onClick={edit ? popupAction : null} />
          </div>
          {popup ? (
            <PopupStyle type={false} action={popupClose}>
              <div className={styles.chartPopup}>
                <div className={styles.chartHeader}>
                  <h2>Pie Chart</h2>
                  <p>{chartDatas?.options?.plugins?.title?.text}</p>
                </div>
                <div className={styles.chartBody}>
                  {chartDatas?.data?.datasets[0].data?.map((item: any, index: any) => {
                    return (
                      <div key={index} className={styles.chartSingle}>
                        <p>{chartDatas?.data?.labels[index]}</p>
                        <div className={styles.chartItem}>
                          <div className={styles.chartGroup}>
                            <SecondInput
                              text="Value"
                              types="text"
                              action={(e: any) => {
                                const updatedData = [...chartDatas.data.labels];
                                updatedData[index] = e.target.value;
                                setChartDatas({ ...chartDatas, data: { ...chartDatas.data, labels: updatedData } });
                              }}
                              value={pieValue(chartDatas?.data?.labels, index)}
                            />
                          </div>
                          <div className={styles.chartGroup}>
                            <SecondInput
                              text="Percentage (%)"
                              types="text"
                              action={(e: any) => {
                                const updatedData = [...chartDatas.data.datasets[0].data];
                                updatedData[index] = e.target.value;
                                setChartDatas({ ...chartDatas, data: { ...chartDatas.data, datasets: [{ ...chartDatas.data.datasets[0], data: updatedData }] } });
                              }}
                              value={item}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.chartButtons}>
                  <button>Cancel</button>
                  <button>Save</button>
                </div>
              </div>
            </PopupStyle>
          ) : null}
        </div>
      </div>
      <div className={styles.keyStatistics}>
        <div>
          <h2>{data?.title3}</h2>
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
