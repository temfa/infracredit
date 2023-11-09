import React from "react";
import OtherLayout from "../layouts/other-layout";
import OtherTable from "../layouts/other-table";

const FinanceReport = ({ edit }: { edit: boolean }) => {
  const data = [
    {
      title:
        "The meeting of the Finance and Audit Committee held on the 17th of March 2022 via teleconference at 5:30 pm prompt to consider / review / deliberate on the: LTI impact for legacy staff in 2021 and impact on 2022 budget; Recommendation of Dividend Declaration for 2020 FY; Presentation of 2022 internal audit plan; Presentation of procurement report; Presentation of outsourced projects; Presentation of 2021 Audited Financial Statements and Management Letter; Presentation of valuation report",
      subTitle: [
        {
          title: "Management Presentation on Implications of LTI Computations for Legacy Staff on 2021 Financials and 2022 Budget",
          subTitle:
            "The Committee noted the report. The Committee further noted that the computation was not based on the final set of recommendations made by the Board, and requested that Management review the LTI computation based on the final set of recommendations.",
        },
        {
          title: "Recommendation of Dividend Declaration for 2020 FY",
          subTitle:
            "The Committee noted and approved the following, subject to Board approval: Declaration and capitalization of preference dividends of N1,208,389,986 (One Billion, Two Hundred and Eight Million, Three Hundred and Eighty-Nine Thousand, Nine Hundred and Eighty-Seven Naira only) for the existing preference shareholders as at 31st December 2020.",
        },
        {
          title: "Presentation of EY 2022 Internal Audit Plan",
          subTitle:
            "The Committee noted and approved EY’s 2022 Internal Audit Plan, subject to adoption of the Committee’s comments. The Committee stated that in the future, the internal audit plan should be presented for approval on or before year-end to prevent delays in internal audit review in the subsequent year.",
        },
        {
          title: "Presentation of Procurement Report",
          subTitle:
            "The Committee noted the report and requested that in future procurement reports, Management should provide an explanation when utilizing single sourcing in its procurement, given that single sourcing does not allow for a competitive bidding process.",
        },
        {
          title: "Presentation of Outsourced Projects",
          subTitle:
            "The Committee noted the report and requested that Management outsource the review of its cyber security services to a qualified expert, or consider seeking out cyber risk expertise on the Board. Management noted that as part of its IT strategy, it is considering whether to bring in a second firm (IT-specific or qualified specialists from the internal auditor or external auditor), to review any potential gaps in the Company’s IT systems and cyber security.",
        },
        {
          title: "Presentation of 2021 Audited Financial Statements and Management Letter Points",
          subTitle:
            "The Committee noted the presentations and committed to work with Management to resolve the item flagged as a “significant deficiency” (i.e., the Company’s ECL process). The Committee requested that Management present a status update on the open issues from the internal audit and those raised in the management letter, at the next Committee meeting.",
        },
        {
          title: "Presentation of Valuation Report",
          subTitle: "The Committee noted the report.",
        },
      ],
    },
  ];
  return (
    <OtherLayout>
      <OtherTable edit={edit} datas={data} titles="FINANCE AND AUDIT COMMITTEE" />
    </OtherLayout>
  );
};

export default FinanceReport;
