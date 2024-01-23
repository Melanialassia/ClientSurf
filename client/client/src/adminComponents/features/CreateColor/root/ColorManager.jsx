import React from "react";
import styles from "./ColorManager.module.css";
import CreateColor from "../components/CreateColor";
import ColorList from "../components/ColorList";

const ColorManager = () => {
  return (
    <div className={styles.container}>
      <div className={styles.childList}>
        <ColorList />
      </div>
      <div className={styles.childCard}>
        <CreateColor />
      </div>
    </div>
  );
};

export default ColorManager;
