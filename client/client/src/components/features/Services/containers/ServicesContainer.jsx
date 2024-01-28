//hooks
import React from "react";
//contants
import {
  fixedSurfBoards,
  fixedWetSuits,
  surfLessons,
  garageSurfBoards,
  fixedWetSuitsText,
  surfLessonsText,
  garageSurfBoardsText,
  fixedSurfBoardsText
} from "../utils/constants";
//style-sheets
import styles from "./ServicesContainer.module.css";

const ServicesContainer = () => {
  return (

    <div className={styles.container}>
    <div className={styles.text}>
      <h3>NUESTROS SERVICIOS</h3>
    </div>
    <div className={styles.serviceColumns}>
      <div className={styles.serviceColumn}>
        <br />
        <br />
        <p>{fixedSurfBoards}</p>
        <br />
        <br />
        <p >{fixedSurfBoardsText}</p>
        <br />
        <br />
        <br />
        <br />
        <p>{surfLessons}</p>
        <br />
        <br />
        <p>{surfLessonsText}</p>
      </div>
      <div className={styles.serviceColumn}>
      <br />
        <br />
        <p>{fixedWetSuits}</p>
        <br />
        <br />
        <p>{fixedWetSuitsText}</p>
        <br />
        <br />
        <br />
        <br />
        <p>{garageSurfBoards}</p>
        <br />
        <br />
        <p>{garageSurfBoardsText}</p>
      </div>
    </div>
  </div>
  );
};

export default ServicesContainer;
