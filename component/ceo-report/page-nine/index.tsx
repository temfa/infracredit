import React, { useState } from "react";
import styles from "./styles.module.css";

const CeoPageNine = ({ edit }: { edit: boolean }) => {
  const [data, setData] = useState({
    title1: "Staffing",
    title2: "Key Summary Update:",
    text1:
      "InfraCredit workforce comprises 26 full time employees (FTEs) and 11 individual project / term based-consultants. Our total headcount as at end of Q1, 2022 is 37. We continue to retain the use of individual consultants to support workforce requirements in most functional areas and departments in the company.",
    text2:
      "§ In Q1 2022, we commenced the sensitization of staff on the Whistle blowing policy and Tip-Off Anonymous platform deployed by our partner company, Deloitte Nigeria. This  included the placement of fliers around the office premises, hosting of a sensitization workshop where employees were walked through the Whistle blowing process. This  workstream was executed in collaboration with the Compliance and Internal control officer.",
    text3: "§ Trainings under Learning and Development .are ongoing for the year.",
    text4: "§ Performance Appraisal for 2021 concluded.",
    text5: "§ Occupational health and safety was prioritized in Q1 2022 through continuous activities.",
    text6: "§ No open employee relations cases",
    title3: "Other Recruitment Comments:",
    title4:
      "In line with the recommendation of the Board and Board committee, we have sourced relevant talent for replacement positions and identified business needs as detailed below:",
    text7:
      "§ In line with increasing the bench strength across functional units at InfraCredit, recruitment workstreams are ongoing across board. In Q1 2022, we have recruited 2 new hires into the Origination and Structuring team at the senior associate level and associate level.",
    text8: "§ There are also ongoing recruitments for the Transaction Legal team and Environmental and Social Governance team.",
    title5: "Exits:",
    text9:
      "§ In line with increasing the bench strength across functional units at InfraCredit, recruitment workstreams are ongoing across board. In Q1 2022, we have recruited 2 new hires into the Origination and Structuring team at the senior associate level and associate level. § There are also ongoing recruitments for the Transaction Legal team and Environmental and Social Governance team.",
    title6: "Exits:",
    text10: "HR recorded stable Employee Relations in Q1 2022,. Below are results of key metrics:",
    text11: "§ Illness: No illnesses were recorded in Q1 2022",
    text12: "§ Security: We recorded no case of security breaches in Q1 2022.",
    text13:
      "§ COVID-19 cases: Continuous management with recommended protocols. We have continued to provide needed support for testing when required and flexible working for social distancing purposes. There were no recorded cases of employees with COVID-19 in Q1 2022",
    text14: "§ Disciplinary cases: There were no disciplinary cases in Q1 2022",
    text15: "§ Grievance cases: There were no grievance cases from Q1 2022 ",
    text16: "§ Absences: No priority cases of absences",
  });
  return (
    <div className={styles.pageNine}>
      {edit ? (
        <input
          type="text"
          value={data.title1}
          onChange={(e) => {
            setData({ ...data, title1: e.target.value });
          }}
        />
      ) : (
        <h1>{data.title1}</h1>
      )}
      <div>
        {edit ? (
          <>
            <input
              type="text"
              value={data.title2}
              onChange={(e) => {
                setData({ ...data, title2: e.target.value });
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
          </>
        ) : (
          <>
            <h2>{data.title2}</h2>
            <p>{data.text1}</p>
            <p>{data.text2}</p>
            <p>{data.text3}</p>
            <p>{data.text4}</p>
            <p>{data.text5}</p>
            <p>{data.text6}</p>
          </>
        )}
      </div>
      <div>
        <h2>Operational Overview</h2>
        <div className={styles.operationalTable}>
          <div className={styles.operationalHead}>
            <p>Q1 2022</p>
            <p>Q2 2022</p>
            <p>Q3 2022</p>
            <p>Q4 2022</p>
            <p>Total</p>
          </div>
          <div className={styles.operationalSingle}>
            <p>2</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>2</p>
          </div>
        </div>
        <div className={styles.overviewTable}>
          <div className={styles.overviewHead}>
            <p>Q1 2022</p>
            <p>Q2 2022</p>
            <p>Q3 2022</p>
            <p>Q4 2022</p>
          </div>
          <div className={styles.overviewSingle}>
            <p>Originating and Structuring</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
          </div>
        </div>
      </div>
      <div>
        {edit ? (
          <>
            <input
              type="text"
              value={data.title3}
              onChange={(e) => {
                setData({ ...data, title3: e.target.value });
              }}
            />
            <input
              type="text"
              value={data.title4}
              onChange={(e) => {
                setData({ ...data, title4: e.target.value });
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
            <h2>{data.title2}</h2>
            <h3>{data.title3}</h3>
            <p>{data.text1}</p>
            <p>{data.text2}</p>
          </>
        )}
      </div>
      <div>
        {edit ? (
          <>
            <input
              type="text"
              value={data.title5}
              onChange={(e) => {
                setData({ ...data, title5: e.target.value });
              }}
            />
            <textarea
              value={data.text9}
              onChange={(e) => {
                setData({ ...data, text9: e.target.value });
              }}
            />
          </>
        ) : (
          <>
            <h2>{data.title5}</h2>
            <p>{data.text9}</p>
          </>
        )}
      </div>
      <div>
        {edit ? (
          <>
            <input
              type="text"
              value={data.title6}
              onChange={(e) => {
                setData({ ...data, title6: e.target.value });
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
            <h2>{data.title6}</h2>
            <p>{data.text10}</p>
          </>
        )}
        <div className={styles.results}>
          {edit ? (
            <>
              <textarea
                value={data.text11}
                onChange={(e) => {
                  setData({ ...data, text11: e.target.value });
                }}
              />
              <textarea
                value={data.text12}
                onChange={(e) => {
                  setData({ ...data, text12: e.target.value });
                }}
              />
              <textarea
                value={data.text13}
                onChange={(e) => {
                  setData({ ...data, text13: e.target.value });
                }}
              />
              <textarea
                value={data.text14}
                onChange={(e) => {
                  setData({ ...data, text14: e.target.value });
                }}
              />
              <textarea
                value={data.text15}
                onChange={(e) => {
                  setData({ ...data, text15: e.target.value });
                }}
              />
              <textarea
                value={data.text16}
                onChange={(e) => {
                  setData({ ...data, text16: e.target.value });
                }}
              />
            </>
          ) : (
            <>
              <p>{data.text11}</p>
              <p>{data.text12}</p>
              <p>{data.text13}</p>
              <p>{data.text14}</p>
              <p>{data.text15}</p>
              <p>{data.text16}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CeoPageNine;
