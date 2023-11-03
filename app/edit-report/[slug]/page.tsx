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
import UserPopup from "@/component/SmallComponents/userPopup";
import { toast } from "react-toastify";
import CeoReport from "@/component/ceo-report";
import Renumeration from "@/component/renumeration-com";

const EditReport = ({ params }: { params: { slug: string } }) => {
  console.log(params);
  const router = useRouter();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(params.slug);
  const [popup, setPopup] = useState(false);
  const [overlay, setOverlay] = useState(false);
  return (
    <div className={styles.editReport}>
      <Topnav
        action={() => {
          setOverlay(true);
          setPopup(true);
        }}
      />
      <div className={popup === true ? styles.editReportBodys : styles.editReportBody}>
        {overlay && popup ? (
          <UserPopup
            action={() => {
              setOverlay(false);
              setPopup(false);
            }}
          />
        ) : null}
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
                  toast.warning("Edit Mode");
                }}>
                Edit
              </button>
            )}

            <button
              onClick={() => {
                setEdit(false);
                toast.success("Saved Successfully");
              }}>
              Save
            </button>
            <button>Submit</button>
          </div>
        </div>
        <div className={styles.editReportContainer}>
          <EditPages />
          <div className={styles.editReportContent}>
            {params.slug === "CEOReport" ? <CeoReport edit={edit} /> : params.slug === "REMUNERATIONANDNOMINATIONCOMMITTEE" ? <Renumeration edit={edit} /> : <h2>Hello World</h2>}
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