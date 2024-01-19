import React from "react";
import { Link } from "react-router-dom";
import style from "./Cards.module.css";
//LIBRARY
import { Card } from 'antd';
const { Meta } = Card;

const Cards = ({ product }) => {
  return (
    <div>
      <Link to={`/details/${product.idProduct}`}>
      <Card
        hoverable
        style={{
          width: 240,
          margin:"10px",
          padding: "40px"
        }}
        cover={
          <img
            alt="example"
            src={product.image}
          />
        }
      >
        <Meta title={product.name} />
        <Meta title={`Color: ${product.nameColor}`} />
          <Meta description={`$${product.priceProduct}`} />
      </Card>
       
      </Link>
    </div>
  );
};

export default Cards;
