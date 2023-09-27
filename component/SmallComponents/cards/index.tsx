import React from "react";
import styles from "./styles.module.css";
import SingleCards from "../singleCards";
import FormCreated from "@/component/Svgs/formCreated";
import DraftForm from "@/component/Svgs/draftForm";
import Reports from "@/component/Svgs/reports";
import Collaborators from "@/component/Svgs/collaborators";

const Cards = () => {
  return (
    <div className={styles.cardsContainer}>
      <SingleCards title="Forms Created" number="344" logo={<FormCreated />} />
      <SingleCards title="Draft Forms " number="243" logo={<DraftForm />} />
      <SingleCards title="Reports Generated" number="123" logo={<Reports />} />
      <SingleCards title="Collaborators" number="344" logo={<Collaborators />} />
    </div>
  );
};

export default Cards;
