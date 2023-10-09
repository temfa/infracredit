import React from "react";
import styles from "./styles.module.css";
import ViewMore from "../Svgs/viewMore";

const OrganizationTask = () => {
  return (
    <div className={styles.organizationTask}>
      <div className={styles.organizationHead}>
        <h2>Manage Organizational Tasks</h2>
        <p>
          View More
          <span>
            <ViewMore />
          </span>
        </p>
      </div>
      <div className={styles.organizationLevel}>
        <div className={styles.toDo}>
          <div></div>
          <h2>
            To-Do <span>(344)</span>
          </h2>
        </div>
        <div className={styles.inProgress}>
          <div></div>
          <h2>
            In Progress <span>(344)</span>
          </h2>
        </div>
        <div className={styles.review}>
          <div></div>
          <h2>
            Review <span>(344)</span>
          </h2>
        </div>
        <div className={styles.completed}>
          <div></div>
          <h2>
            Completed <span>(344)</span>
          </h2>
        </div>
        <div className={styles.closeOut}>
          <div></div>
          <h2>
            Closed Out <span>(344)</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OrganizationTask;
