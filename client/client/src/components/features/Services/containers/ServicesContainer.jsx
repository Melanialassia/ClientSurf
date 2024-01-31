//HOOKS
import React from "react";
import { useEffect } from "react";
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
import { logOut } from "../../../../redux/actions/action";




const ServicesContainer = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);

  return (

    <div className={styles.container}  >
    <div data-aos="fade-down">
      <h3 className={styles.text}>NUESTROS SERVICIOS</h3>
    </div >
    <div className={styles.serviceColumns} >

      <div className={styles.serviceRow} data-aos="fade-down">
        <div className={styles.serviceItem} >
          <p>{fixedSurfBoards}</p>
          <img src="/assets/images/tablaicon.jpg" alt="" className={styles.imageone}  />
        </div>
        <p className={styles.texto}>{fixedSurfBoardsText}</p>
      </div>

      <br />
      <br />

      <div className={styles.serviceRow} data-aos="fade-down">
        <div className={styles.serviceItem}>
          <p>{surfLessons}</p>
          <img src="/assets/images/clasesssurf.jpg" alt="" className={styles.imagetwo} />
        </div>
        <p className={styles.texto}>{surfLessonsText}</p>
      </div>

      <br />
      <br />

      <div className={styles.serviceRow} data-aos="fade-down">
        <div className={styles.serviceItem}>
          <p>{fixedWetSuits}</p>
          <img src="/assets/images/trajesneoprenne.jpg" alt="" className={styles.imagethree} />
        </div>
        <p className={styles.texto}>{fixedWetSuitsText}</p>
      </div>

      <br />
      <br />

      <div className={styles.serviceRow} data-aos="fade-down">
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
