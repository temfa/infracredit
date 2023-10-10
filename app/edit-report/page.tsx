"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
// import Topnav from "@/component/Layout/TopNav";
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
import CeoPageSixteen from "@/component/ceo-report/page-fourteen copy";
import { useRouter } from "next/navigation";

const EditReport = () => {
  const router = useRouter();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("CEO REPORT");
  const [popup, setPopup] = useState(false);
  return (
    <div className={popup === true ? styles.editReports : styles.editReport}>
      <div className={styles.editReportBody}>
        <div className={styles.editReportHead}>
          <div className={styles.editReportText}>
            <div>
              <Undo action={router.push("/dashboard")} />
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
                  window.location.reload();
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
            <CeoLayout number={1}>
              <TableContent edit={edit} />
            </CeoLayout>
            <CeoLayout number={2}>
              <CeoPageOne />
            </CeoLayout>
            <CeoLayout number={3}>
              <CeoPageTwo
                edit={edit}
                popupAction={() => {
                  console.log("test");
                  setPopup(true);
                }}
                popup={popup}
              />
            </CeoLayout>
            <CeoLayout number={4}>
              <CeoPageThree />
            </CeoLayout>
            <CeoLayout number={5}>
              <CeoPageFour />
            </CeoLayout>
            <CeoLayout number={6}>
              <CeoPageFive />
            </CeoLayout>
            <CeoLayout number={7}>
              <CeoPageSix />
            </CeoLayout>
            <CeoLayout number={8}>
              <CeoPageSeven />
            </CeoLayout>
            <CeoLayout number={9}>
              <CeoPageEight />
            </CeoLayout>
            <CeoLayout number={10}>
              <CeoPageNine />
            </CeoLayout>
            <CeoLayout number={11}>
              <CeoPageTen />
            </CeoLayout>
            <CeoLayout number={12}>
              <CeoPageEleven />
            </CeoLayout>
            <CeoLayout number={13}>
              <CeoPageTwelve />
            </CeoLayout>
            <CeoLayout number={14}>
              <CeoPageThirteen />
            </CeoLayout>
            <CeoLayout number={15}>
              <CeoPageFourteen />
            </CeoLayout>
            <CeoLayout number={17}>
              <CeoPageSixteen />
            </CeoLayout>
            <CeoLastPage />
          </div>
          <div className={styles.editReportDiscuss}></div>
        </div>
      </div>
    </div>
  );
};

export default EditReport;
