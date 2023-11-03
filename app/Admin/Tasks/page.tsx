"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Title from "@/component/Layout/Title";
// import { deleted } from "@/utils/data";
// import SingleReportCard from "@/component/SmallComponents/singleReportCard";
import DashboardLayout from "@/component/layouts/dashboard-layout";
import SingleTask from "@/component/single-task";
import SingleTeam from "@/component/single-team";
import { useAppSelector } from "@/reduxtoolkit/store/store";
import SingleReportCard from "@/component/SmallComponents/singleReportCard";
import Ceo from "../../../public/images/ceo-report.png";
import Manage from "../../../public/images/management-report.png";
import Finance from "../../../public/images/finance.png";
import New from "../../../public/images/new.png";
import Nominate from "../../../public/images/nomination.png";
import Risk from "../../../public/images/risk.png";
import Plus from "@/component/Svgs/plus";

const Tasks = () => {
  // let role;
  // if (typeof window !== "undefined") {
  const role = useAppSelector((store) => store.role);
  // };
  const [state, setState] = useState(role === "Admin" ? "Teams" : "Tasks");
  return (
    <DashboardLayout>
      <div className={styles.taskContainer}>
        <Title text="My Tasks" />
        {role === "Admin" ? (
          <div className={styles.taskHeader}>
            <h2
              className={state === "Teams" ? styles.active : ""}
              onClick={() => {
                setState("Teams");
              }}>
              Teams
            </h2>
            <h2
              className={state === "Tasks" ? styles.active : ""}
              onClick={() => {
                setState("Tasks");
              }}>
              Tasks
            </h2>
            <h2
              className={state === "Reports" ? styles.active : ""}
              onClick={() => {
                setState("Reports");
              }}>
              Templates
            </h2>
          </div>
        ) : null}
        {/* <div className={styles.taskWrapper}> */}
        {/* <div className={styles.taskActive}>
          <h2>In Progress</h2>
          <div className={styles.taskCont}>
            <div className={styles.taskSingle}>
              <h2></h2>
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
          <h2>Under Review</h2>
          {deleted?.map((item, index) => {
            return <SingleReportCard title={item.title} text={item.action} number={item.number} key={index} type={false} />;
          })}
        </div> */}
        {/* </div> */}
        {state === "Tasks" ? (
          <div className={styles.taskBody}>
            <div className={styles.taskTodo}>
              <h2>
                Todo
                <span>
                  <p>4</p>
                </span>
              </h2>
              <div className={styles.taskCont}>
                <SingleTask completed={false} title="CEO Report" comment="Work on pages 1,2,3 , should be ready by Monday" number={13} date="Due Monday ,22/04/2023" />
                <SingleTask completed={false} title="MANAGEMENT REPORT" comment="Work on pages 1,2,3 , should be ready by Monday" number={13} date="Due Monday ,22/04/2023" />
                <SingleTask
                  completed={false}
                  title="FINANCE AND AUDIT COMMITTEE"
                  comment="Work on pages 1,2,3 , should be ready by Monday"
                  number={13}
                  date="Due Monday ,22/04/2023"
                />
                <SingleTask
                  completed={false}
                  title="NEW BUSINESS/CREDIT COMMITTEE"
                  comment="Work on pages 1,2,3 , should be ready by Monday"
                  number={13}
                  date="Due Monday ,22/04/2023"
                />
                <SingleTask
                  completed={false}
                  title="REMUNERATION AND NOMINATION COMMITTEE"
                  comment="Work on pages 1,2,3 , should be ready by Monday"
                  number={13}
                  date="Due Monday ,22/04/2023"
                />
                <SingleTask
                  completed={false}
                  title="RISK AND CAPITAL COMMITTEE"
                  comment="Work on pages 1,2,3 , should be ready by Monday"
                  number={13}
                  date="Due Monday ,22/04/2023"
                />
              </div>
            </div>
            <div className={styles.taskInProgress}>
              <h2>
                In Progress
                <span>
                  <p>4</p>
                </span>
              </h2>
              <div className={styles.taskCont}>
                <SingleTask completed={false} title="Annual report" comment="Work on pages 1,2,3 , should be ready by Monday" number={13} date="Due Monday ,22/04/2023" />
                <SingleTask completed={false} title="Annual report" comment="Work on pages 1,2,3 , should be ready by Monday" number={13} date="Due Monday ,22/04/2023" />
                {/* <SingleTask completed={false} title="Annual report" comment="Work on pages 1,2,3 , should be ready by Monday" number={13} date="Due Monday ,22/04/2023" />
              <SingleTask completed={false} title="Annual report" comment="Work on pages 1,2,3 , should be ready by Monday" number={13} date="Due Monday ,22/04/2023" /> */}
              </div>
            </div>
            <div className={styles.taskUnderReview}>
              <h2>
                Under Review
                <span>
                  <p>4</p>
                </span>
              </h2>
              <div className={styles.taskCont}>
                <SingleTask completed={false} title="Annual report" comment="Work on pages 1,2,3 , should be ready by Monday" number={13} date="Due Monday ,22/04/2023" />
                <SingleTask completed={false} title="Annual report" comment="Work on pages 1,2,3 , should be ready by Monday" number={13} date="Due Monday ,22/04/2023" />
                <SingleTask completed={false} title="Annual report" comment="Work on pages 1,2,3 , should be ready by Monday" number={13} date="Due Monday ,22/04/2023" />
                <SingleTask completed={false} title="Annual report" comment="Work on pages 1,2,3 , should be ready by Monday" number={13} date="Due Monday ,22/04/2023" />
              </div>
            </div>
            <div className={styles.taskCompleted}>
              <h2>
                Completed
                <span>
                  <p>4</p>
                </span>
              </h2>
              <div className={styles.taskCont}>
                <SingleTask completed={true} title="Annual report" comment="Work on pages 1,2,3 , should be ready by Monday" number={13} date="Due Monday ,22/04/2023" />
                <SingleTask completed={true} title="Annual report" comment="Work on pages 1,2,3 , should be ready by Monday" number={13} date="Due Monday ,22/04/2023" />
                <SingleTask completed={true} title="Annual report" comment="Work on pages 1,2,3 , should be ready by Monday" number={13} date="Due Monday ,22/04/2023" />
                <SingleTask completed={true} title="Annual report" comment="Work on pages 1,2,3 , should be ready by Monday" number={13} date="Due Monday ,22/04/2023" />
              </div>
            </div>
          </div>
        ) : state === "Reports" ? (
          <div className={styles.teamsBody}>
            <div className={styles.teamsCont}>
              <SingleReportCard title="CEO REPORT" type={false} img={Ceo} />
              <SingleReportCard title="MANAGEMENT REPORT" type={false} img={Manage} />
              <SingleReportCard title="FINANCE AND AUDIT COMMITTEE" type={false} img={Finance} />
              <SingleReportCard title="NEW BUSINESS/CREDIT COMMITTEE" type={false} img={New} />
            </div>
            <div className={styles.teamsCont}>
              <SingleReportCard title="REMUNERATION AND NOMINATION COMMITTEET" type={false} img={Nominate} />
              <SingleReportCard title="RISK AND CAPITAL COMMITTEE" type={false} img={Risk} />
              <div className={styles.createNew}>
                <Plus color="#3183B4" />
                <h2>Create New Template</h2>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.teamsBody}>
            <div className={styles.teamsCont}>
              <SingleTeam title="HR" width="75%" bgColor="#FF8F00" />
              <SingleTeam title="FinCon" width="5%" bgColor="#FF8F00" />
              <SingleTeam title="SysCon" width="100%" bgColor="#34C759" />
              <SingleTeam title="Legal" width="55%" bgColor="#3D77F1" />
              <SingleTeam title="Sales" width="100%" bgColor="#34C759" />
            </div>
            <div className={styles.teamsCont}>
              <SingleTeam title="Procurements" width="5%" bgColor="#FF8F00" />
              <SingleTeam title="Design" width="55%" bgColor="#3D77F1" />
              <SingleTeam title="Dev Team" width="75%" bgColor="#FF8F00" />
              <SingleTeam title="Customer Excellence" width="100%" bgColor="#34C759" />
              <SingleTeam title="PR Team" width="100%" bgColor="#34C759" />
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Tasks;
