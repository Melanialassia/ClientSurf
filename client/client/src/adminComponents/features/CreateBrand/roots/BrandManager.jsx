import React from "react";
import styles from "./BrandManager.module.css";
import CreateBrand from "../components/CreateBrand";
import BrandList from "../components/BrandList";

const BrandManager = () => {
  return (
    <div className={styles.container}>
      <div className={styles.childList}>
        <BrandList />
      </div>
      <div className={styles.childCard}>
        <CreateBrand />
      </div>
    </div>
  );
};

export default BrandManager;
