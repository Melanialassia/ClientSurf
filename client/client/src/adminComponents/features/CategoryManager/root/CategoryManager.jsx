import React from "react";
import CategoryList from "../Components/CategoryList";
import CreateCategory from "../Components/CreateCategory";
import styles from "./CategoryManager.module.css";

const CategoryManager = () => {
  return (
    <div className={styles.container}>
      <div className={styles.childList}>
        <CategoryList />
      </div>
      <div className={styles.childCard}>
        <CreateCategory />
      </div>
    </div>
  );
};

export default CategoryManager;
