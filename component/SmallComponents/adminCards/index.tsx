import React from "react";
import styles from "./styles.module.css";
import SingleCards from "../singleCards";
import FormCreated from "@/component/Svgs/formCreated";
import DraftForm from "@/component/Svgs/draftForm";
import Reports from "@/component/Svgs/reports";
import Collaborators from "@/component/Svgs/collaborators";

const AdminCards = () => {
  return (
    <div className={styles.cardsContainer}>
      <SingleCards title="Users" number="344" logo={<FormCreated />} />
      <SingleCards title="Supervisors" number="243" logo={<DraftForm />} />
      <SingleCards title="Administrators" number="123" logo={<Reports />} />
      <SingleCards title="Managers" number="2" logo={<Collaborators />} />
    </div>
  );
};

export default AdminCards;
