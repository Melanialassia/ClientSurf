//HOOKS
import React from "react";
//CONSTANTS
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
//STYLE-SHEETS
import styles from "./ServicesContainer.module.css";

const ServicesContainer = () => {
  return (

    <div className={styles.container}>
    <div className={styles.text}>
      <h3>NUESTROS SERVICIOS</h3>
    </div>
    <div className={styles.serviceColumns}>

      <div className={styles.serviceRow}>
        <div className={styles.serviceItem}>
          <p>{fixedSurfBoards}</p>
          <img src="/assets/images/tablaicon.jpg" alt="" className={styles.imageone} />
        </div>
        <p className={styles.texto}>{fixedSurfBoardsText}</p>
      </div>

      <br />
      <br />

      <div className={styles.serviceRow}>
        <div className={styles.serviceItem}>
          <p>{surfLessons}</p>
          <img src="/assets/images/clasesssurf.jpg" alt="" className={styles.imagetwo} />
        </div>
        <p className={styles.texto}>{surfLessonsText}</p>
      </div>

      <br />
      <br />

      <div className={styles.serviceRow}>
        <div className={styles.serviceItem}>
          <p>{fixedWetSuits}</p>
          <img src="/assets/images/trajesneoprenne.jpg" alt="" className={styles.imagethree} />
        </div>
        <p className={styles.texto}>{fixedWetSuitsText}</p>
      </div>

      <br />
      <br />

      <div className={styles.serviceRow}>
        <div className={styles.serviceItem}>
          <p>{garageSurfBoards}</p>
          <img src="/assets/images/personwithboardicon.jpg" alt="" className={styles.imagefour} />
        </div>
        <p className={styles.texto}>{garageSurfBoardsText}</p>
      </div>
    </div>
  </div>
  );
};

export default ServicesContainer;
