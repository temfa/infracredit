import React, { useState } from "react";
import styles from "./styles.module.css";

const CeoPageFive = ({ edit }: { edit: boolean }) => {
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
  const [textData, setTextData] = useState({
    title1: "3. Risk Sharing/Participation Facility",
    text1:
      "Incorporating risk sharing instruments into our capital structure as we grow remains an integral part of our strategy especially as we increase leverage. Successful implementation of our risk sharing strategy will enable us issue more guarantees with comparably less capital requirement.",
    text2:
      "The target this year is to pilot on-going negotiation of risk sharing arrangements with ATI, and potentially other International DFIs by way of co-guarantees. We have successfully completed risk sharing arrangement with ATI on the PAT bond transaction.",
    text3: "Below is an update on the various workstreams and ongoing discussions:",
    title2: "4. People Strategy",
    text4:
      "In furtherance of the implementation of our Competency Framework under our People Strategy, we have commenced the development of skills matrix for support departments in addition to the completed matrix for Origination & Structuring department. These departments include Finance, Credit Risk, Procurement, Human Resources, Administration, ESG/HSES and others. This will further improve the performance management system and continuous development and career growth.",
  });
  return (
    <div className={styles.pageFive}>
      {edit ? (
        <>
          <input
            type="text"
            value={textData.title1}
            onChange={(e) => {
              setTextData({ ...textData, title1: e.target.value });
            }}
          />
          <textarea
            value={textData.text1}
            onChange={(e) => {
              setTextData({ ...textData, text1: e.target.value });
            }}
          />
          <textarea
            value={textData.text2}
            onChange={(e) => {
              setTextData({ ...textData, text2: e.target.value });
            }}
          />
          <textarea
            value={textData.text3}
            onChange={(e) => {
              setTextData({ ...textData, text3: e.target.value });
            }}
          />
        </>
      ) : (
        <>
          <h2>{textData.title1}</h2>
          <p>{textData.text1}</p>
          <p>{textData.text2}</p>
          <p>{textData.text3}</p>
        </>
      )}
      <div className={styles.sharingTable}>
        <div className={styles.sharingHeader}>
          <p>Counterparty</p>
          <p>Risk Sharing Product</p>
          <p>Status</p>
        </div>
        {data?.map((item, index) => {
          return (
            <div className={styles.sharingSingle} key={index}>
              {edit ? (
                <>
                  <input
                    type="text"
                    value={item.investor}
                    onChange={(e) => {
                      const updatedState = [...data];
                      updatedState[index].investor = e.target.value;
                      setData(updatedState);
                    }}
                  />
                  <input
                    type="text"
                    value={item.amount}
                    onChange={(e) => {
                      const updatedState = [...data];
                      updatedState[index].amount = e.target.value;
                      setData(updatedState);
                    }}
                  />
                  <div>
                    <input
                      type="text"
                      value={item.status.status1}
                      onChange={(e) => {
                        const updatedState = [...data];
                        updatedState[index].status.status1 = e.target.value;
                        setData(updatedState);
                      }}
                    />
                    <input
                      type="text"
                      value={item.status.status2}
                      onChange={(e) => {
                        const updatedState = [...data];
                        updatedState[index].status.status2 = e.target.value;
                        setData(updatedState);
                      }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <p>{item.investor}</p>
                  <p>{item.amount}</p>
                  <div>
                    <p>{item.status.status1}</p>
                    <p>{item.status.status2}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
      {edit ? (
        <>
          <input
            type="text"
            value={textData.title1}
            onChange={(e) => {
              setTextData({ ...textData, title2: e.target.value });
            }}
          />
          <textarea
            value={textData.text4}
            onChange={(e) => {
              setTextData({ ...textData, text4: e.target.value });
            }}
          />
        </>
      ) : (
        <>
          <h1>{textData.title2}</h1>
          <p>{textData.text4}</p>
        </>
      )}
    </div>
  );
};

export default CeoPageFive;
