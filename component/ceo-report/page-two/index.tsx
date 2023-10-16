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

  type SampleBody = {
    title: string;
    text1: string;
    text2: string;
    text3: string;
  };

  interface Sample {
    header: {
      header1: string;
      header2: string;
      header3: string;
      header4: string;
    };
    body: SampleBody[];
  }

  const [tableData, setTableData] = useState<Sample[]>([
    {
      header: {
        header1: "SUMMARY OF KEY ACTIVITY",
        header2: "2017-20",
        header3: "2021",
        header4: "2022",
      },
      body: [
        {
          title: "New Guarantees Executed",
          text1: "4",
          text2: "4",
          text3: "4",
        },
        {
          title: "Size of New Guarantees Executed",
          text1: "N43.5 billion",
          text2: "N43.5 billion",
          text3: "N10.0 billion",
        },
        {
          title: "",
          text1: "",
          text2: "",
          text3: "",
        },
        {
          title: "New Mandates Signed (excl. Follow-On Mandates)",
          text1: "24",
          text2: "22",
          text3: "N/A",
        },
        {
          title: "Size of New Mandates Signed",
          text1: "N293.2 billion",
          text2: "N293.2 billion",
          text3: "N/A",
        },
        {
          title: "Size of Follow-On Mandates",
          text1: "N3.6 billion",
          text2: "N/A",
          text3: "N/A",
        },
        {
          title: "",
          text1: "",
          text2: "",
          text3: "",
        },
        {
          title: "New Business Committee (NBC) Approvals",
          text1: "39",
          text2: "25",
          text3: "N/A",
        },
        {
          title: "SUMMARY OF KEY ACTIVITY",
          text1: "4",
          text2: "4",
          text3: "4",
        },
        {
          title: "",
          text1: "",
          text2: "",
          text3: "",
        },
        {
          title: "",
          text1: "",
          text2: "",
          text3: "",
        },
      ],
    },
    {
      header: {
        header1: "PERIOD ENDING STATISTICS",
        header2: "",
        header3: "",
        header4: "",
      },
      body: [
        {
          title: "Size of Guaranteed Transactions Since Inception",
          text1: "N43.5 billion",
          text2: "N77.6 billion",
          text3: "N87.6 billion",
        },
        {
          title: "Size of Mandated Deal Pipeline (period-end)",
          text1: "N203.5 billion",
          text2: "N311.5 billion",
          text3: "N301.5 billion",
        },
        {
          title: "Advanced Mandates (to close in <6 months",
          text1: "N70.6 billion",
          text2: "N63.6 billion",
          text3: "N53.6 billion",
        },
        {
          title: "Longer Mandates (to close in >6 months)",
          text1: "N93.0 billion",
          text2: "N191.4 billion",
          text3: "N191.4 billion",
        },
        {
          title: "Contingent Refis (long-lead Greenfield)",
          text1: "N39.9 billion",
          text2: "N56.5 billion",
          text3: "N56.5 billion",
        },
      ],
    },
  ]);
  return (
    <div className={styles.pageTwo}>
      <div className={styles.strategicPlan}>
        {edit ? (
          <input
            type="text"
            value={data?.title1}
            onChange={(e) => {
              setData({ ...data, title1: e.target.value });
            }}
          />
        ) : (
          <h2>{data?.title1}</h2>
        )}
        {edit ? (
          <textarea
            value={data?.text1}
            onChange={(e) => {
              setData({ ...data, text1: e.target.value });
            }}
          />
        ) : (
          <p>{data?.text1}</p>
        )}
      </div>
      <div className={styles.currentPort}>
        {edit ? (
          <input
            type="text"
            value={data?.title2}
            onChange={(e) => {
              setData({ ...data, title2: e.target.value });
            }}
          />
        ) : (
          <h2>{data?.title2}</h2>
        )}
        <div>
          {edit ? (
            <textarea
              value={data?.text2}
              onChange={(e) => {
                setData({ ...data, text2: e.target.value });
              }}
            />
          ) : (
            <p>{data?.text2}</p>
          )}
          <div className={styles.currentChart}>
            <h2>Analysis of Guaranteed Transactions Since Inception of NGN87.6 Billion as at 28 February 2022</h2>
            <Doughnut data={chartDatas.data} options={chartDatas.options} onClick={edit ? popupAction : null} />
          </div>
          {popup ? (
            <PopupStyle action={popupClose} width="53%" maxWidth="760px" height="80vh">
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
                  <button onClick={popupClose}>Cancel</button>
                  <button onClick={popupClose}>Save</button>
                </div>
              </div>
            </PopupStyle>
          ) : null}
        </div>
      </div>
      <div className={styles.keyStatistics}>
        <div>
          {edit ? (
            <input
              type="text"
              value={data?.title3}
              onChange={(e) => {
                setData({ ...data, title3: e.target.value });
              }}
              className={styles.keyStatisticsInput}
            />
          ) : (
            <h2>{data?.title3}</h2>
          )}

          <div className={styles.smallLine}></div>
        </div>
        <div className={styles.keyTable}>
          {tableData?.map((item, index) => {
            return (
              <div key={index}>
                <div className={styles.keyTableHeader}>
                  {edit ? (
                    <>
                      <input
                        type="text"
                        value={item.header.header1}
                        onChange={(e) => {
                          const updatedData = [...tableData];
                          updatedData[index].header.header1 = e.target.value;
                          setTableData(updatedData);
                        }}
                      />
                      <input
                        type="text"
                        value={item.header.header2}
                        onChange={(e) => {
                          const updatedData = [...tableData];
                          updatedData[index].header.header2 = e.target.value;
                          setTableData(updatedData);
                        }}
                      />
                      <input
                        type="text"
                        value={item.header.header3}
                        onChange={(e) => {
                          const updatedData = [...tableData];
                          updatedData[index].header.header3 = e.target.value;
                          setTableData(updatedData);
                        }}
                      />
                      <input
                        type="text"
                        value={item.header.header4}
                        onChange={(e) => {
                          const updatedData = [...tableData];
                          updatedData[index].header.header4 = e.target.value;
                          setTableData(updatedData);
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <p>{item.header.header1}</p>
                      <p>{item.header.header2}</p>
                      <p>{item.header.header3}</p>
                      <p>{item.header.header4}</p>
                    </>
                  )}
                </div>
                {item.body?.map((items, index2) => {
                  return (
                    <div className={styles.keyTableSingle} key={index2}>
                      {edit ? (
                        <>
                          <input
                            type="text"
                            value={items.title}
                            onChange={(e) => {
                              const updatedData = [...tableData];
                              updatedData[index].body[index2].title = e.target.value;
                              setTableData(updatedData);
                            }}
                          />
                          <input
                            type="text"
                            value={items.text1}
                            onChange={(e) => {
                              const updatedData = [...tableData];
                              updatedData[index].body[index2].text1 = e.target.value;
                              setTableData(updatedData);
                            }}
                          />
                          <input
                            type="text"
                            value={items.text2}
                            onChange={(e) => {
                              const updatedData = [...tableData];
                              updatedData[index].body[index2].text2 = e.target.value;
                              setTableData(updatedData);
                            }}
                          />
                          <input
                            type="text"
                            value={items.text3}
                            onChange={(e) => {
                              const updatedData = [...tableData];
                              updatedData[index].body[index2].text3 = e.target.value;
                              setTableData(updatedData);
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <p>{items.title}</p>
                          <p>{items.text1}</p>
                          <p>{items.text2}</p>
                          <p>{items.text3}</p>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CeoPageTwo;
