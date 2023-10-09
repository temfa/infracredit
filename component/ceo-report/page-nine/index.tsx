import React from "react";
import styles from "./styles.module.css";

const CeoPageNine = () => {
  return (
    <div className={styles.pageNine}>
      <h1>Staffing</h1>
      <div>
        <h2>Key Summary Update:</h2>
        <p>
          InfraCredit workforce comprises 26 full time employees (FTEs) and 11 individual project / term based-consultants. Our total headcount as at end of Q1, 2022 is 37. We
          continue to retain the use of individual consultants to support workforce requirements in most functional areas and departments in the company.
        </p>
        <p>
          § In Q1 2022, we commenced the sensitization of staff on the Whistle blowing policy and Tip-Off Anonymous platform deployed by our partner company, Deloitte Nigeria. This
          included the placement of fliers around the office premises, hosting of a sensitization workshop where employees were walked through the Whistle blowing process. This
          workstream was executed in collaboration with the Compliance and Internal control officer.
        </p>
        <p>§ Trainings under Learning and Development are ongoing for the year.</p>
        <p>§ Performance Appraisal for 2021 concluded.</p>
        <p>§ Occupational health and safety was prioritized in Q1 2022 through continuous activities. </p>
        <p>§ No open employee relations cases</p>
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
            <p>
              Originating and <br /> Structuring
            </p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Other Recruitment Comments:</h2>
        <h3>
          In line with the recommendation of the Board and Board committee, we have sourced relevant talent for replacement positions and identified business needs as detailed
          below:
        </h3>
        <p>
          § In line with increasing the bench strength across functional units at InfraCredit, recruitment workstreams are ongoing across board. In Q1 2022, we have recruited 2 new
          hires into the Origination and Structuring team at the senior associate level and associate level.
        </p>
        <p>§ There are also ongoing recruitments for the Transaction Legal team and Environmental and Social Governance team.</p>
      </div>
      <div>
        <h2>Exits:</h2>
        <p>
          § In line with increasing the bench strength across functional units at InfraCredit, recruitment workstreams are ongoing across board. In Q1 2022, we have recruited 2 new
          hires into the Origination and Structuring team at the senior associate level and associate level. § There are also ongoing recruitments for the Transaction Legal team
          and Environmental and Social Governance team.
        </p>
      </div>
      <div>
        <h2>Exits:</h2>
        <p>HR recorded stable Employee Relations in Q1 2022,. Below are results of key metrics: § Illness: No illnesses were recorded in Q1 2022</p>
        <div className={styles.results}>
          <p>§ Security: We recorded no case of security breaches in Q1 2022.</p>
          <p>
            § COVID-19 cases: Continuous management with recommended protocols. We have continued to provide needed support for testing when required and flexible working for
            social distancing purposes. There were no recorded cases of employees with COVID-19 in Q1 2022
          </p>
          <p>§ Disciplinary cases: There were no disciplinary cases in Q1 2022</p>
          <p>§ Grievance cases: There were no grievance cases from Q1 2022 </p>
          <p>§ Absences: No priority cases of absences</p>
        </div>
      </div>
    </div>
  );
};

export default CeoPageNine;
