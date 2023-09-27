import React from "react";
import styles from "./styles.module.css";

const SingleCards = ({ logo, number, title }: { logo: any; number: string; title: string }) => {
  return (
    <div className={styles.singleCardsContainer}>
      <div className={styles.singleCardsHead}>
        <div>{logo}</div>
        <h2>{title}</h2>
      </div>
      <p>{number}</p>
    </div>
  );
};

export default SingleCards;
