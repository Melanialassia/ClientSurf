//hooks
import React from "react";
//contants
import {
  fixedSurfBoards,
  fixedWetSuits,
  surfLessons,
  garageSurfBoards,
} from "../utils/constants";
//style-sheets
import styles from "./ServicesContainer.module.css";

const ServicesContainer = () => {
  return (
    <div className={styles.container}>
      <p>{fixedSurfBoards}</p>
      <p>{fixedWetSuits}</p>
      <p>{surfLessons}</p>
      <p>{garageSurfBoards}</p>
    </div>
  );
};

export default ServicesContainer;
