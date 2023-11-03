import React, { useState } from "react";
import styles from "./styles.module.css";

const CeoPageSix = ({ edit }: { edit: boolean }) => {
  const [data, setData] = useState({
    title1: "5. Technical Assistance & Capacity Building Programme",
    text1:
      "• As at February 2021, under the programme, from inception to date, 28 (twenty-eight) trainings have been implemented including six (6) investor roundtable workshops, 14 (fourteen) investors’ trainings and 8 (eight) co-due diligence exercises targeted at participants at different levels of executive management, investment and risk teams of the participating institutional investors.",
    text2:
      "• Two training sessions are scheduled to hold in March 2022 including one roundtable discussion and one development impact training. The trainings are targeted at CIOs, CROs, Analysts of PFAs and PFCs, as well as Insurance companies and Regulators.",
    text3:
      "• With respect to technical assistance grants to support due diligence costs and market studies on InfraCredit’s pipeline of infrastructure projects, status of ongoing  support from KFW Development Bank, and recently negotiated support from Private Infrastructure Development Group (PIDG) and Financial Sector Deepening (FSD) Africa are  listed in the appendix. Successful implementation of this corporate strategy will enable us originate and execute a larger and more diverse infrastructure portfolio by  derisking and reducing the upfront cost of due diligence.",
    title2: "6. Project Development Strategy",
    text4:
      "In Q1 2022, we continued to focus on implementing the project development strategy, using strategic collaborations with project preparation facilities and two new guarantee products aimed at supporting greenfield infrastructure projects in a risk adjusted manner (i.e. Contingent Refinancing Guarantee and Annuity PPP Guarantee). Inclusive of the current deal pipeline are CRG (N56 bln) and Annuity PPP (N20 bln) transactions.",
    text5:
      "Furthermore, the contracting phase for procurement of expert consultants for pilot phase of the Project Development Facility supported by KfW is being finalized with 4 infrastructure projects prequalified for support. AFDB has expressed interest in exploring areas of supporting InfraCredit’s early stage deal pipeline, whilst AFD is providing TA Support for select Annuity PPP projects.",
    title3: "7. IT Infrastructure",
    text6: "As at February 2022, status of our business applications are stated below:",
    text7:
      "o Power BI Implementation (Risk Model): Project completed successfully o Power BI Implementation (HR): Project is currently at the review stage. This project is expected to Go Live by the 6th of March 2022",
    text8:
      "o TRMS Implementation: The project is currently ongoing with a weekly review to track the status of the project. We are expected to have a UAT session on this project bythe 3rd week in March.",
  });
  return (
    <div className={styles.pageSix}>
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
          <input
            type="text"
            value={data.title2}
            onChange={(e) => {
              setData({ ...data, title2: e.target.value });
            }}
          />
          <textarea
            value={data.text4}
            onChange={(e) => {
              setData({ ...data, text4: e.target.value });
            }}
          />
          <textarea
            value={data.text5}
            onChange={(e) => {
              setData({ ...data, text5: e.target.value });
            }}
          />
          <input
            type="text"
            value={data.title3}
            onChange={(e) => {
              setData({ ...data, title3: e.target.value });
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
          <textarea
            value={data.text8}
            onChange={(e) => {
              setData({ ...data, text8: e.target.value });
            }}
          />
        </>
      ) : (
        <>
          <h2>{data.title1}</h2>
          <p>{data.text1}</p>
          <p>{data.text2}</p>
          <p>{data.text3}</p>
          <h2>{data.title2}</h2>
          <p>{data.text4}</p>
          <p>{data.text5}</p>
          <h2>{data.title3}</h2>
          <p>{data.text6}</p>
          <p>{data.text7}</p>
          <p>{data.text8}</p>
        </>
      )}
    </div>
  );
};

export default CeoPageSix;
