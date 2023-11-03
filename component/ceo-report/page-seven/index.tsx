import React, { useState } from "react";
import styles from "./styles.module.css";

const CeoPageSeven = ({ edit }: { edit: boolean }) => {
  const [data, setData] = useState({
    title1: "Risk Management",
    text1: "Key updates on the various on-going workstreams within the Risk Management group include:",
    text2:
      "§ The design of InfraCredit’s Internal Capital Adequacy Assessment (ICAAP) framework was concluded during the period by PwC and InfraCredit’s risk team. The exercise entailed detailed review of our current risk management framework, gap assessment of our existing capital management process, design and documentation of the recommended ICAAP methodology/framework. We expect to obtain board approval for the methodologies within the first month of Q2, 2022 for complete implementation.",
    text3:
      "§ The project to deliver a Risk Management automated dashboard (PowerBI) for executive management use was also deployed during the quarter. This allows access to our guarantee portfolio reports, amongst other features. The agreed methodologies have been deployed to the live environment and currently been updated with current portfolio details before final sign off.",
    text4:
      "§ Rating, Pricing and Impairment Model: The modified version that incorporated additional functionalities raised by the Risk Team was delivered by KPMG during the quarter.  However, the User Acceptance Session held resulted in the need for further enhancements that include autogeneration of amortization schedule for our guaranteed bonds and other instruments, amongst others.",
    title2: "Health, Safety, Environment and Social",
    text5: "Key updates on the various on-going workstreams within the HSES Unit include:",
    text6: "§ Following the approval of the Clean Energy Transition Strategy and Roadmap document by the Board, full implementation will commence from 2022.",
    text7: "§ Commenced the development of InfraCredit 2021 Sustainability Report",
  });
  return (
    <div className={styles.pageSeven}>
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
          <input
            type="text"
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
          <h3>{data.text5}</h3>
          <p>{data.text6}</p>
          <p>{data.text7}</p>
        </>
      )}
    </div>
  );
};

export default CeoPageSeven;
