import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Add from "../Svgs/add";

const ReportDescription = () => {
  return (
    <div className={styles.reportDescription}>
      <div className={styles.report}>
        <h2>Report Description</h2>
        <div>
          <input type="text" placeholder="This is a description" />
          <button>Save</button>
        </div>
      </div>
      <div className={styles.reviewer}>
        <h2>Reviewers</h2>
        <div className={styles.reviewerPicture}>
          <Image src="/images/user.png" width={44} alt="user" height={44} />
          <p>Jerry</p>
        </div>
        <div className={styles.addReviewer}>
          <p>Add New Reviewer</p>
          <div>
            <Add />
          </div>
        </div>
        {/* <p>Created January 12, 2023</p> */}
      </div>
    </div>
  );
};

export default ReportDescription;
