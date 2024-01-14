import React from "react";
import styles from "./PhotoBannerContainer.module.css"

const PhotoBannerContainer = () => {
  return (
    <div className={styles.photoBannerContainer}>
      <img src="/assets/images/Proximamente.png" alt="Imagen 1" />

      <img src="/assets/images/Foto1.png" alt="Imagen 2" />

      <img src="/assets/images/LaOlaUrbanaImage.png" alt="Imagen 3" />

      <img src="/assets/images/Foto2.png" alt="Imagen 4" />

      <img src="/assets/images/LoQueLeFaltaba.png" alt="Imagen 5" />
    </div>
  );
};

export default PhotoBannerContainer;
