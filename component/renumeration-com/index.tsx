import React, { useState } from "react";
import styles from "./styles.module.css";
import Ifracoloredlogo from "../Svgs/ifracoloredlogo";

const Renumeration = ({ edit }: { edit: boolean }) => {
  const [title, setTitle] = useState("REMUNERATION AND NOMINATION COMMITTEE");
  const [data, setData] = useState([
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
  ]);
  return (
    <div className={styles.renuContainer}>
      <div className={styles.renuHeader}>
        <Ifracoloredlogo />
      </div>
      <div className={styles.renuBody}>
        {edit ? (
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        ) : (
          <h2>{title}</h2>
        )}
        <div className={styles.renuContent}>
          <div className={styles.renuContentHeader}>
            <p>S/N</p>
            <p>MEETING</p>
            <p>DELIBERATION AND OUTCOME</p>
          </div>
          {data?.map((items, index) => {
            return (
              <div className={styles.renuContentHeader}>
                <p>{index + 1}</p>
                {edit ? (
                  <textarea
                    value={items.title}
                    onChange={(e) => {
                      const newState = [...data];

                      newState[index].title = e.target.value;
                      setData(newState);
                    }}
                  />
                ) : (
                  <p>{items.title}</p>
                )}
                <div>
                  {items.subTitle.map((item, index2) => {
                    return (
                      <div className={styles.renuContentType}>
                        {edit ? (
                          <input
                            type="text"
                            value={item.title}
                            onChange={(e) => {
                              const newState = [...data];
                              newState[index].subTitle[index2].title = e.target.value;
                              setData(newState);
                            }}
                          />
                        ) : (
                          <h2>
                            {index2 + 1}. {item.title}
                          </h2>
                        )}
                        {edit ? (
                          <textarea
                            value={item.subTitle}
                            onChange={(e) => {
                              const newState = [...data];
                              newState[index].subTitle[index2].subTitle = e.target.value;
                              setData(newState);
                            }}
                          />
                        ) : (
                          <p>{item.subTitle}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Renumeration;
