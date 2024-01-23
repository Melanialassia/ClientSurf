import React from "react";
import styles from "./SizeManager.module.css";
import CreateSize from "../components/CreateSize";
import SizeList from "../components/SizeList";

const SizeManager = () => {
  return (
    <div className={styles.container}>
      <div className={styles.childList}>
        <SizeList />
      </div>
      <div className={styles.childCard}>
        <CreateSize />
      </div>
    </div>
  );
};

export default SizeManager;
