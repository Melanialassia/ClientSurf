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
        <h3 style={contentStyle}>Aqui va la 1ra imagen</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Aqui va la 2da imagen</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Aqui va la 3ra imagen</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Aqui va la 4ta imagen</h3>
      </div>
    </Carousel>
  );
};

export default CarouselContainer;
