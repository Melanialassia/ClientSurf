import React from "react";
import { Carousel } from "antd";
import styles from "./CarouselContainer.module.css";

const CarouselContainer = () => {
  const contentStyle = {
    height: "450px",
    color: "#fff",
    lineHeight: "400px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Carousel autoplay className={styles.customCarousel}>
      <div className={styles.carouselItem}>
        <img
          className={styles.carouselImage}
          src="/assets/images/carousel1.png"
          alt="Imagen Carousel 1"
        />
      </div>
      <div className={styles.carouselItem}>
        <img
          className={styles.carouselImage}
          src="/assets/images/tiposdetablas.jpg"
          alt="Imagen Carousel 2"
        />
      </div>
      <div className={styles.carouselItem}>
        <img
          className={styles.carouselImage}
          src="/assets/images/carousel3.png"
          alt="Imagen Carousel 3"
        />
      </div>
      <div className={styles.carouselItem}>
        <img
          className={styles.carouselImage}
          src="/assets/images/carousel4.png"
          alt="Imagen Carousel 4"
        />
      </div>
    </Carousel>
  );
};

export default CarouselContainer;
