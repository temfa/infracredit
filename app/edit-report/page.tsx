"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Topnav from "@/component/Layout/TopNav";
import Undo from "@/component/Svgs/undo";
import CeoLayout from "@/component/layouts/ceo-layout";
import EditPages from "@/component/edit-pages";
import TableContent from "@/component/ceo-report/table-content";
import CeoPageOne from "@/component/ceo-report/page-one";
import CeoPageTwo from "@/component/ceo-report/page-two";
import CeoPageThree from "@/component/ceo-report/page-three";
import CeoPageFour from "@/component/ceo-report/page-four";
import CeoPageFive from "@/component/ceo-report/page-five";
import CeoPageSix from "@/component/ceo-report/page-six";
import CeoPageSeven from "@/component/ceo-report/page-seven";
import CeoPageEight from "@/component/ceo-report/page-eight";
import CeoPageNine from "@/component/ceo-report/page-nine";
import CeoPageTen from "@/component/ceo-report/page-ten";
import CeoPageEleven from "@/component/ceo-report/page-eleven";
import CeoPageTwelve from "@/component/ceo-report/page-twelve";
import CeoLastPage from "@/component/ceo-report/last-page";
import CeoPageThirteen from "@/component/ceo-report/page-thirteen";
import CeoPageFourteen from "@/component/ceo-report/page-fourteen";
import CeoPageSixteen from "@/component/ceo-report/page-sixteen";
import { useRouter } from "next/navigation";
import ReportDescription from "@/component/report-description";
import Comments from "@/component/comments";

const EditReport = () => {
  const router = useRouter();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("CEO REPORT");
  const [popup, setPopup] = useState(false);
  return (
    <div className={styles.editReport}>
      <Topnav />
      <div className={popup === true ? styles.editReportBodys : styles.editReportBody}>
        <div className={styles.editReportHead}>
          <div className={styles.editReportText}>
            <div>
              <Undo
                action={() => {
                  router.push("/admin/Dashboard");
                }}
              />
            </div>
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
          </div>
          <div className={styles.editReportAction}>
            {edit ? (
              <button
                onClick={() => {
                  window?.location?.reload();
                }}>
                Cancel Edit
              </button>
            ) : (
              <button
                onClick={() => {
                  setEdit(true);
                }}>
                Edit
              </button>
            )}

            <button
              onClick={() => {
                setEdit(false);
              }}>
              Save
            </button>
            <button>Submit</button>
          </div>
        </div>
        <div className={styles.editReportContainer}>
          <EditPages />
          <div className={styles.editReportContent}>
            <CeoLayout edit={edit} number={1}>
              <TableContent edit={edit} />
            </CeoLayout>
            <CeoLayout edit={edit} number={2}>
              <CeoPageOne edit={edit} />
            </CeoLayout>
            <CeoLayout edit={edit} number={3}>
              <CeoPageTwo
                edit={edit}
                popupAction={() => {
                  setPopup(true);
                }}
                popupClose={() => {
                  setPopup(false);
                }}
                popup={popup}
              />
            </CeoLayout>
            <CeoLayout edit={edit} number={4}>
              <CeoPageThree />
            </CeoLayout>
            <CeoLayout edit={edit} number={5}>
              <CeoPageFour />
            </CeoLayout>
            <CeoLayout edit={edit} number={6}>
              <CeoPageFive />
            </CeoLayout>
            <CeoLayout edit={edit} number={7}>
              <CeoPageSix />
            </CeoLayout>
            <CeoLayout edit={edit} number={8}>
              <CeoPageSeven />
            </CeoLayout>
            <CeoLayout edit={edit} number={9}>
              <CeoPageEight />
            </CeoLayout>
            <CeoLayout edit={edit} number={10}>
              <CeoPageNine />
            </CeoLayout>
            <CeoLayout edit={edit} number={11}>
              <CeoPageTen />
            </CeoLayout>
            <CeoLayout edit={edit} number={12}>
              <CeoPageEleven />
            </CeoLayout>
            <CeoLayout edit={edit} number={13}>
              <CeoPageTwelve />
            </CeoLayout>
            <CeoLayout edit={edit} number={14}>
              <CeoPageThirteen />
            </CeoLayout>
            <CeoLayout edit={edit} number={15}>
              <CeoPageFourteen />
            </CeoLayout>
            <CeoLayout edit={edit} number={17}>
              <CeoPageSixteen />
            </CeoLayout>
            <CeoLastPage />
          </div>
          <div className={styles.editReportDiscuss}>
            <ReportDescription />
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditReport;
