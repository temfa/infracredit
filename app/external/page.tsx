"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Topnav from "@/component/Layout/TopNav";
import UserPopup from "@/component/SmallComponents/userPopup";
import Popup from "@/component/SmallComponents/popup";
import PopupStyled from "@/component/SmallComponents/popupStyle/style";
import Ifracoloredlogo from "@/component/Svgs/ifracoloredlogo";
import Edit from "@/component/Svgs/edit";
import PrimaryButton from "@/component/SmallComponents/buttons/primarybutton";
import ReportLayout from "@/component/layouts/report-layout";
import CeoReport from "@/component/ceo-report";

const External = () => {
  const [popup, setPopup] = useState(false);
  const [overlay, setOverlay] = useState(true);
  const [alert, setAlert] = useState(true);
  return (
    <div className={styles.editReport}>
      <Topnav
        action={() => {
          setOverlay(true);
          if (alert) {
            null;
          } else {
            setPopup(true);
          }
        }}
      />
      <div className={popup === true || alert === true ? styles.editReportBodys : styles.editReportBody}>
        <div className={styles.editHeader}>
          <h2>CEO Report</h2>
          <div>
            <PrimaryButton
              text="Sign Document"
              active={true}
              action={() => {
                setOverlay(true);
              }}
            />
          </div>
        </div>
        <ReportLayout>
          <CeoReport edit={false} />
        </ReportLayout>
        {overlay && popup ? (
          <UserPopup
            action={() => {
              setOverlay(false);
              setPopup(false);
            }}
          />
        ) : null}
        {overlay && alert ? (
          <Popup>
            <PopupStyled height="489px" width="36%" maxwidth="513px">
              <div className={styles.alertPopup}>
                <Ifracoloredlogo />
                <Edit />
                <div className={styles.alertText}>
                  <div>
                    <h2>Contractual Agreement | January 3, 2023</h2>
                    <p>
                      Shared by: <span>James Falcone</span>
                    </p>
                  </div>
                  <h2>Please review and attach your signature to the document</h2>
                </div>
                <PrimaryButton
                  text="Proceed"
                  action={() => {
                    setAlert(false);
                    setOverlay(false);
                  }}
                  active={true}
                />
              </div>
            </PopupStyled>
          </Popup>
        ) : null}
      </div>
    </div>
  );
};

export default External;
