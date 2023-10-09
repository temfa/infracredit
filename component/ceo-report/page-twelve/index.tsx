import React from "react";
import styles from "./styles.module.css";
import HeaderLine from "@/component/header-line";
import Signature from "@/component/Svgs/signature";

const CeoPageTwelve = () => {
  return (
    <div className={styles.pageTwelve}>
      <div className={styles.header}>
        <h2>Other Matters</h2>
        <HeaderLine />
      </div>
      <p>
        Strategic Collaborations: InfraCredit continues to actively explore strategic collaboration with development partners that will enhance its deal flow, ongoing discussions
        with Rockerfeller Foundation to support clean energy projects.
      </p>
      <div className={styles.header}>
        <HeaderLine /> <h2>Conclusion</h2> <HeaderLine />
      </div>
      <p>
        For the year ended 31 December 2021, Profit before tax (excluding exchange gains): N1.75 billion compared to N654 million in 2020 December (168% YOY growth) and budget of
        N2.03 billion for the year ended 31st December 2021. Inclusive of exchange gains, profit before tax increased by 41% to N3.47 billion from N2.467 billion recorded during
        the prior year period. Net guarantee fees income contributed 28% of net revenue. Year to date, Profit before tax (excluding exchange gains): N542 million compared to N342
        million in 2021 February (58% YOY growth) and budget of N209 million for the period ended 28 February 2022.
      </p>
      <p>
        In 2022, we expect the growth poles of the economy to remain resilient though escalation of the supply disruptions and inflation pressure in developed markets might weigh
        on our growth forecast.
      </p>
      <p>
        With the successful closure of the PAT N10 bn bond, our first guarantee bond for the year which represents c.10% of our guarantee target, we are actively working on closing
        pending credit committee approved transactions towards achieving our guarantee issuance budget of N103.4 billion for FY2022.
      </p>
      <p>
        With ongoing review of capital adequacy for calculation of leverage, and a proposed guarantee portfolio target of N178 billion by 2022 Year End, our leverage on equity is
        expected to grow to 4.5 times assuming we achieve the guarantee issuance target with no additional equity raise.
      </p>
      <p>
        We are actively exploring adjustments to Tier 2 Capital and several risk sharing strategies as highlighted in this report alongside ongoing discussions on additional
        capital injection.
      </p>
      <p>We look forward to the continued support of the Board</p>
      <div className={styles.signatures}>
        <p>Yours Sincerely,</p>
        <Signature />
        <div>
          <p>Chinua Azubike</p>
          <h2>Chief Executive Officer</h2>
        </div>
      </div>
    </div>
  );
};

export default CeoPageTwelve;
