import React from "react";
//import CreateCategory from "../Components/CreateCategory";
import styles from "./UserManager.module.css";
import CurrentUsers from "../components/CurrentUsers";
import DeletedUsers from "../components/DeletedUsers";

const UserManager = () => {
  return (
    <div className={styles.container}>
      <div className={styles.childList}>
        <CurrentUsers />
      </div>
      <div className={styles.childCard}>
        <DeletedUsers />
      </div>
    </div>
  );
};

export default UserManager;
