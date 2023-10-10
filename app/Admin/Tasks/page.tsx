import React from "react";
import styles from "./styles.module.css";
import Title from "@/component/Layout/Title";
import { deleted } from "@/utils/data";
import SingleReportCard from "@/component/SmallComponents/singleReportCard";
import DashboardLayout from "@/component/layouts/dashboard-layout";

const Tasks = () => {
  return (
    <div className={styles.taskContainer}>
      <Title text="My Tasks" />
      {/* <div className={styles.taskWrapper}> */}
      <div className={styles.taskActive}>
        <h2>Active</h2>
        <div className={styles.taskCont}>
          <div className={styles.taskSingle}>
            <h2>In Progress</h2>
            <div>
              <SingleReportCard title="Annual Report - FY2023" number="12" text="Edit" type={true} />
              <SingleReportCard title="Annual Report - FY2023" number="12" text="Edit" type={true} />
            </div>
          </div>
          <div className={styles.taskSingle}>
            <h2>Under Review</h2>
            <div>
              <SingleReportCard title="Annual Report - FY2023" number="12" text="Edit" type={true} />
              <SingleReportCard title="Annual Report - FY2023" number="12" text="Edit" type={true} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.taskRecent}>
        <h2>Recent</h2>
        {deleted?.map((item, index) => {
          return <SingleReportCard title={item.title} text={item.action} number={item.number} key={index} type={false} />;
        })}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Tasks;
