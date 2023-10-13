import React from "react";
import styles from "./styles.module.css";
import { comment } from "@/utils/data";
import Image from "next/image";

const Comments = () => {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentHeader}>
        <h2>Comments</h2>
      </div>
      <div className={styles.commentBody}>
        {comment?.map((item, index) => {
          return (
            <div className={styles.singleComment} key={index}>
              <div className={styles.commenter}>
                <div>
                  <Image src="/images/user.png" width={24} height={24} alt="commenter" />
                  <h2>{item.commenter}</h2>
                </div>
                <p>{item.time}</p>
              </div>
              <p>{item.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
