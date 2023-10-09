"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Title from "@/component/Layout/Title";
import Createuser from "@/component/createUser";
import AdminCards from "@/component/SmallComponents/adminCards";
import OrganizationTask from "@/component/organizationTask";
import ThreeDots from "@/component/Svgs/threeDots";
import DashboardLayout from "@/component/layouts/dashboard-layout";

const Admin = () => {
  const roles: string[] = ["All", "User", "Supervisor", "Administrator", "Manager"];
  const report = [
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
  const [state, setState] = useState(false);
  const [members, setMembers] = useState("");
  return (
    <DashboardLayout>
      <div className={styles.adminContainer}>
        <Title
          text="Welcome back"
          admin="admin"
          action={() => {
            setState(true);
          }}
        />
        {state ? (
          <Createuser
            action={() => {
              setState(false);
            }}
          />
        ) : null}
        <AdminCards />
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
              {report
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
      </div>
    </DashboardLayout>
  );
};

export default Admin;
