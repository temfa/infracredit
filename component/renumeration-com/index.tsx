import React, { useState } from "react";
import styles from "./styles.module.css";
import Ifracoloredlogo from "../Svgs/ifracoloredlogo";
import OtherLayout from "../layouts/other-layout";
import OtherTable from "../layouts/other-table";

const Renumeration = ({ edit, data, title }: { edit: boolean; data: any; title: string }) => {
  return (
    <OtherLayout>
      <OtherTable edit={edit} titles={title} datas={data} />
    </OtherLayout>
  );
};

export default Renumeration;
