import React, { useState } from "react";
import styles from "./styles.module.css";

const CeoPageFive = () => {
  interface CeoTable {
    investor: string;
    amount: string;
    status: {
      status1: string;
      status2: string;
    };
  }
  const [data, setData] = useState<CeoTable[]>([
    {
      investor: "Investor",
      amount: "Up to USD$20 Million Tier 2 Subordinated loan facility",
      status: {
        status1: "• Ongoing discussions on Term sheet ",
        status2: "• Credit approval expected in Q2 22",
      },
    },
    {
      investor: "Investor",
      amount: "Up to USD$20 Million Tier 2 Subordinated loan facility",
      status: {
        status1: "• Ongoing discussions on Term sheet ",
        status2: "• Credit approval expected in Q2 22",
      },
    },
    {
      investor: "Investor",
      amount: "Up to USD$20 Million Tier 2 Subordinated loan facility",
      status: {
        status1: "• Ongoing discussions on Term sheet ",
        status2: "• Credit approval expected in Q2 22",
      },
    },
    {
      investor: "Investor",
      amount: "Up to USD$20 Million Tier 2 Subordinated loan facility",
      status: {
        status1: "• Ongoing discussions on Term sheet ",
        status2: "• Credit approval expected in Q2 22",
      },
    },
    {
      investor: "Investor",
      amount: "Up to USD$20 Million Tier 2 Subordinated loan facility",
      status: {
        status1: "• Ongoing discussions on Term sheet ",
        status2: "• Credit approval expected in Q2 22",
      },
    },
    {
      investor: "Investor",
      amount: "Up to USD$20 Million Tier 2 Subordinated loan facility",
      status: {
        status1: "• Ongoing discussions on Term sheet ",
        status2: "• Credit approval expected in Q2 22",
      },
    },
    {
      investor: "Investor",
      amount: "Up to USD$20 Million Tier 2 Subordinated loan facility",
      status: {
        status1: "• Ongoing discussions on Term sheet ",
        status2: "• Credit approval expected in Q2 22",
      },
    },
  ]);
  return (
    <div className={styles.pageFive}>
      <h2>3. Risk Sharing/Participation Facility</h2>
      <p>
        Incorporating risk sharing instruments into our capital structure as we grow remains an integral part of our strategy especially as we increase leverage. Successful
        implementation of our risk sharing strategy will enable us issue more guarantees with comparably less capital requirement.
      </p>
      <p>
        The target this year is to pilot on-going negotiation of risk sharing arrangements with ATI, and potentially other International DFIs by way of co-guarantees. We have
        successfully completed risk sharing arrangement with ATI on the PAT bond transaction.
      </p>
      <p>Below is an update on the various workstreams and ongoing discussions:</p>
      <div className={styles.sharingTable}>
        <div className={styles.sharingHeader}>
          <p>Counterparty</p>
          <p>Risk Sharing Product</p>
          <p>Status</p>
        </div>
        {data?.map((item, index) => {
          return (
            <div className={styles.sharingSingle} key={index}>
              <p>{item.investor}</p>
              <p>{item.amount}</p>
              <div>
                <p>{item.status.status1}</p>
                <p>{item.status.status2}</p>
              </div>
            </div>
          );
        })}
      </div>
      <h1>4. People Strategy</h1>
      <p>
        In furtherance of the implementation of our Competency Framework under our People Strategy, we have commenced the development of skills matrix for support departments in
        addition to the completed matrix for Origination & Structuring department. These departments include Finance, Credit Risk, Procurement, Human Resources, Administration,
        ESG/HSES and others. This will further improve the performance management system and continuous development and career growth.
      </p>
    </div>
  );
};

export default CeoPageFive;
