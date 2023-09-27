import React from "react";
import styles from "./styles.module.css";
import Cards from "@/component/SmallComponents/cards";
import SingleReportCard from "@/component/SmallComponents/singleReportCard";
import ThreeDots from "@/component/Svgs/threeDots";
import Title from "@/component/Layout/Title";
// import Plus from "@/component/Svgs/plus";

const Dashboard = () => {
  const report = [
    {
      title: "2023 Annual Financial Budget Report v1.0",
      createdBy: "Olukemi Mayowa",
      createdOn: "23, May 2023",
      currentUser: "Wale Peter",
    },
    {
      title: "Title",
      createdBy: "Faiz Muhammed",
      createdOn: "24, May 2023",
      currentUser: "Adegbenro Muniru",
    },
    {
      title: "Title",
      createdBy: "Olukemi Mayowa",
      createdOn: "23, May 2023",
      currentUser: "Wale Peter",
    },
  ];
  return (
    <div className={styles.dashboardContainer}>
      <Title text="Welcome back" />
      <div className={styles.dashboardWrapper}>
        <Cards />
        <div className={styles.reportContainer}>
          <h2>Report Templates</h2>
          <div className={styles.reportWrapper}>
            <SingleReportCard title="Annual Report Template" number="123,566" text="Edit" type={false} />
            <SingleReportCard title="Quarterly Report Template" number="123,566" text="Edit" type={false} />
            <SingleReportCard title="Monthly Report Template" number="123,566" text="Edit" type={false} />
            <SingleReportCard title="Weekly Report Template" number="123,566" text="Edit" type={false} />
          </div>
        </div>
        <div className={styles.historyContainer}>
          <h2>History</h2>
          <div>
            <div className={styles.historyHead}>
              <p>S/N</p>
              <p>Title</p>
              <p>Created By</p>
              <p>Created On</p>
              <p>Current User</p>
              <p></p>
            </div>
            <div className={styles.historyBody}>
              {report?.map((item, index) => {
                return (
                  <div className={styles.historySingle}>
                    <p>{index + 1}</p>
                    <p>{item.title}</p>
                    <p>{item.createdBy}</p>
                    <p>{item.createdOn}</p>
                    <p>{item.currentUser}</p>
                    <div>
                      <ThreeDots />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
