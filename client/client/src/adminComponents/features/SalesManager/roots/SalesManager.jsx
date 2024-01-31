import React from "react";
import SalesTable from "../components/SalesTable";
import styles from "./SalesManager.module.css";

const SalesManager = () => {
  return (
    <div className={styles.container}>
      <div className={styles.childList}>
        <SalesTable />
      </div>
    </div>
  );
};

export default SalesManager;
