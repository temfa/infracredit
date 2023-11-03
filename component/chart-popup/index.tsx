import React from "react";
import styles from "./styles.module.css";
import PopupStyle from "../SmallComponents/popupStyle";
import SecondInput from "../SmallComponents/second-input";
import { pieValue } from "@/utils/pieValue";

const ChartPopup = ({ popupClose, chartDatas, setChartDatas }: { popupClose: any; chartDatas: any; setChartDatas: any }) => {
  return (
    <PopupStyle action={popupClose} width="53%" maxwidth="760px" height="80vh">
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
  );
};

export default ChartPopup;
