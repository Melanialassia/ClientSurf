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
          src="https://res.cloudinary.com/dfvebd4zw/image/upload/v1706246046/Products_Surf/ut45y0v8mpea8espwzp2.png"
          alt="Imagen Carousel 1"
        />
      </div>
      <div className={styles.carouselItem}>
        <img
          className={styles.carouselImage}
          src="https://res.cloudinary.com/dfvebd4zw/image/upload/v1706299699/Products_Surf/fqolk3979kswkd4eyvqp.jpg"
          alt="Imagen Carousel 2"
        />
      </div>
      <div className={styles.carouselItem}>
        <img
          className={styles.carouselImage}
          src="https://res.cloudinary.com/dfvebd4zw/image/upload/v1706245985/Products_Surf/vw30gu8wgsdv3wwm1w7w.png"
          alt="Imagen Carousel 3"
        />
      </div>
      <div className={styles.carouselItem}>
        <img
          className={styles.carouselImage}
          src="https://res.cloudinary.com/dfvebd4zw/image/upload/v1706245917/Products_Surf/nn8upa1gpvay7brdj3jt.png"
          alt="Imagen Carousel 4"
        />
      </div>
    </Carousel>
  );
};

export default CarouselContainer;
