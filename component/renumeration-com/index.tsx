import React, { useState } from "react";
import styles from "./styles.module.css";
import Ifracoloredlogo from "../Svgs/ifracoloredlogo";
import OtherLayout from "../layouts/other-layout";
import OtherTable from "../layouts/other-table";

const Renumeration = ({ edit }: { edit: boolean }) => {
  const data = [
    {
      title:
        "The meeting of the Remuneration and Nomination Committee (the Committee) held on the 17th of March 2022 via teleconference at 02:00 pm prompt to consider / review / deliberate on the general update on human resources; and the report on the end of the year appraisal.",
      subTitle: [
        {
          title: "Human Resources & Administration Operational Report.",
          subTitle: "The Committee noted the report.",
        },
        {
          title: "Human Resources & Administration Operational Report.",
          subTitle:
            "The Committee noted the report and requested that Management update the report format in future to ensure assessment scoring and comments will be easily understood by the Committee (e.g. limited to main achievements with no element of subjectivity). The Committee also requested that Management revert with suggestions on the reward system for high performing staff, to be incorporated into the talent management process.",
        },
      ],
    },
  ];
  return (
    <OtherLayout>
      <OtherTable edit={edit} titles="REMUNERATION AND NOMINATION COMMITTEE" datas={data} />
    </OtherLayout>
  );
};

export default Renumeration;
