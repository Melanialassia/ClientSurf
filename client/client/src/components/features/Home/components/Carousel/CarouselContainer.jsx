import React from "react";
import { Carousel } from "antd";

const CarouselContainer = () => {
  const contentStyle = {
    height: "400px",
    color: "#fff",
    lineHeight: "400px",
    textAlign: "center",
    background: "#364d79",
  };

  return (


    <Carousel autoplay>
      <div>

        <h3 style={contentStyle}>Image 1</h3>

      </div>
      <div>
        <h3 style={contentStyle}>Image 2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Image 3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Image 4</h3>
      </div>
    </Carousel>
  );
};

export default CarouselContainer;
