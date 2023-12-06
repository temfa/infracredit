import React from "react";
import styles from "./styles.module.css";
import EditPages from "@/component/edit-pages";
import ReportDescription from "@/component/report-description";
import Comments from "@/component/comments";

const ReportLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.editReportContainer}>
      <EditPages />
      <div className={styles.editReportContent}>{children}</div>
      <div className={styles.editReportDiscuss}>
        <ReportDescription />
        <Comments />
      </div>
    </div>
  );
};

export default ReportLayout;
