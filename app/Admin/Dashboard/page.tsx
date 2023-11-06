"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Cards from "@/component/SmallComponents/cards";
import ThreeDots from "@/component/Svgs/threeDots";
import Title from "@/component/Layout/Title";
import AssignReport from "@/component/assignReport";
import DashboardLayout from "@/component/layouts/dashboard-layout";
import SingleTask from "@/component/single-task";
import OrganizationTask from "@/component/organizationTask";
import Createuser from "@/component/createUser";
import { useAppSelector } from "@/reduxtoolkit/store/store";
import { useRouter } from "next/navigation";
// import Plus from "@/component/Svgs/plus";

const Dashboard = () => {
  const router = useRouter();
  const role = useAppSelector((store) => store.role);
  const [state, setState] = useState(false);
  const report = [
    {
      title: "CEO Report",
      createdBy: "Olukemi Mayowa",
      createdOn: "23, May 2023",
      currentUser: "Wale Peter",
    },
    {
      title: "REMUNERATION AND NOMINATION COMMITTEE",
      createdBy: "Faiz Muhammed",
      createdOn: "24, May 2023",
      currentUser: "Adegbenro Muniru",
    },
    {
      title: "RISK AND CAPITAL COMMITTEE",
      createdBy: "Olukemi Mayowa",
      createdOn: "23, May 2023",
      currentUser: "Wale Peter",
    },
  ];
  const roles: string[] = ["All", "User", "Supervisor", "Administrator", "Manager"];
  const reports = [
    {
      name: "Olusanya Ezekiel Ayomide",
      email: "Olusanyadtgoc@gmail.com",
      joinedOn: "23, May 2023",
      role: "User",
    },
    {
      name: "Ifeoluwa Opemipo",
      email: "Olusanyaerehdh@gmail.com",
      joinedOn: "23, May 2023",
      role: "Supervisor",
    },
    {
      name: "Nnneka Blessing",
      email: "Olusanyadtgoc@gmail.com",
      joinedOn: "23, May 2023",
      role: "Administrator",
    },
  ];
  // const [state, setState] = useState(false);
  const [members, setMembers] = useState("");
  return (
    <DashboardLayout>
      <div className={styles.dashboardContainer}>
        <Title
          text="Welcome back"
          admin={role === "Supervisor" ? "supervisor" : role === "Admin" ? "admin" : "dashboard"}
          action={() => {
            setState(true);
          }}
        />
        <div className={styles.dashboardWrapper}>
          <Cards role={role} />
          {role === "Admin" ? (
            <>
              <OrganizationTask />
              <div className={styles.historyContainer}>
                <h2>Manage members</h2>
                <div className={styles.historyWrapper}>
                  {roles?.map((item: string, index: number) => {
                    return (
                      <h2
                        key={index}
                        className={item === members ? styles.active : ""}
                        onClick={() => {
                          setMembers(item);
                        }}>
                        {item}
                      </h2>
                    );
                  })}
                </div>
                <div>
                  <div className={styles.historyHead}>
                    <p>S/N</p>
                    <p>Name</p>
                    <p>Email</p>
                    <p>Role</p>
                    <p>Joined On</p>
                    <p></p>
                  </div>
                  <div className={styles.historyBody}>
                    {reports
                      ?.filter((item) => item?.role.toLowerCase().includes(members.toLowerCase()))
                      ?.map((item, index) => {
                        return (
                          <div className={styles.historySingle} key={index}>
                            <p>{index + 1}</p>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                            <p>{item.role}</p>
                            <p>{item.joinedOn}</p>
                            <div>
                              <ThreeDots />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              {state ? (
                <Createuser
                  action={() => {
                    setState(false);
                  }}
                />
              ) : null}
            </>
          ) : (
            <>
              <div className={styles.reportContainer}>
                {role === "Supervisor" ? <h2>Pending Review</h2> : <h2>Current Tasks</h2>}
                <div className={styles.reportWrapper}>
                  {/* <SingleReportCard title="Annual Report Template" number="12" text="Edit" type={false} />
              <SingleReportCard title="Quarterly Report Template" number="12" text="Edit" type={false} />
              <SingleReportCard title="Monthly Report Template" number="123,566" text="Edit" type={false} />
            <SingleReportCard title="Weekly Report Template" number="123,566" text="Edit" type={false} /> */}
                  <div>
                    <SingleTask title="CEO Report" comment="Work on pages 1,2,3 , should be ready by Monday" number={13} date="Due Monday ,22/04/2023" completed={false} />
                  </div>
                  <div>
                    <SingleTask
                      title="RISK AND CAPITAL COMMITTEE"
                      comment="Work on pages 1,2,3 , should be ready by Monday"
                      number={13}
                      date="Due Monday ,22/04/2023"
                      completed={false}
                    />
                  </div>
                </div>
              </div>
              {role === "Admin" ? null : role === "User" ? null : <OrganizationTask />}
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
                        <div
                          className={styles.historySingle}
                          key={index}
                          onClick={() => {
                            router.push(`/edit-report/${item.title.replaceAll(" ", "")}`);
                          }}>
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
              {state ? (
                <AssignReport
                  action={() => {
                    setState(false);
                  }}
                />
              ) : null}
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
