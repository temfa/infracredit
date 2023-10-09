import React, { useState } from "react";
import styles from "./styles.module.css";

const CeoPageFour = () => {
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
  ]);
  return (
    <div className={styles.pageFour}>
      <h2>2. Capitalisation of up to USD$90 Million Equivalent</h2>
      <p>
        In the 2022 Budget, the Board approved a capital raise plan under which the Company projected to raise up to USD90 million in hard capital (paid-in capital) and soft
        capital (re-guarantees and risk sharing instruments) respectively. In the 2022 Budget, InfraCredit projects to grow its guarantee portfolio over the next 10 months by up to
        N93.4 Billion, translating to a projected total guarantee portfolio of N176.54 Billion.
      </p>
      <p>
        In light of ongoing review of capital adequacy and InfraCredit’s target capital leverage ratio set by its risk appetite framework of 1.4x - 2.5x, in achieving the projected
        guarantee portfolio growth this year of N103 Bln, in the absence of any new equity capital raise in 2022, equity capital leverage ratio will be up to 4.5 times from current
        2.26 times.
      </p>
      <p>The table below sets out the updates in relation to ongoing engagements with various potential capital providers</p>
      <div className={styles.investorsTable}>
        <div className={styles.investorsHeader}>
          <p>NO</p>
          <p>Investor</p>
          <p>Amount</p>
          <p>Status</p>
        </div>
        {data?.map((item, index) => {
          return (
            <div className={styles.investorsSingle} key={index}>
              <p>{index + 1}</p>
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
      <p>The following are key updates with respect to the ongoing efforts on capital raise:</p>
      <p>
        • Ongoing discussions and negotiation in respect of U.S. International Development Finance Corporation (DFC) proposed subordinated debt of $20 mln - term sheet agreed.
        Awaiting DFC Internal Approvals for commercial terms
      </p>
      <p>• Following recent meetings held with AFDB, InfraCredit to make a request for up to $20 mln in a combination of equity and subordinated capital</p>
      <p>• We continue to engage with the rating agencies on the Tier 2 Capital recognition especially as we increase leverage on gross capital to over 1 times</p>
      <p>
        • KfW engagement is ongoing and meeting with GCR and KfW is being arranged for further discussion on the proposed adjustments to align with “equity” capital recognition for
        guarantee leverage calculation
      </p>
    </div>
  );
};

export default CeoPageFour;
