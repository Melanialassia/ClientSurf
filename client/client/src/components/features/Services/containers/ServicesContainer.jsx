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
      <div className={styles.text}>
      <h3>NUESTROS SERVICIOS</h3>
      <h4>Para más información de los servicios que ofrece LA OLA URBANA contactate con nosotros!</h4>
      </div>
      <div className={styles.serviceContainer}>
      <div className={styles.serviceItem}>
      <p>{fixedSurfBoards}</p>
      <img src="/assets/images/arreglotablas.jpg" alt="" className={styles.imagen} />
      </div>

      <div className={styles.serviceItem}>
      <p>{fixedWetSuits}</p>
      <img src="/assets/images/arregloneoprenne.jpg" alt="" className={styles.imagen} />
      </div>

      <div className={styles.serviceItem}>
      <p>{surfLessons}</p>
      <img src="/assets/images/clasessurf.jpg" alt="" className={`${styles.imagen} ${styles.largeImage}`}/>
      </div>
      
      <div className={styles.serviceItem}>
      <p>{garageSurfBoards}</p>
      <img src="/assets/images/guarderíatablas.jpg" alt=""  className={`${styles.imagen} ${styles.largeImagen}`}/>
     </div>
     </div>
    </div>
  );
};

export default ServicesContainer;
