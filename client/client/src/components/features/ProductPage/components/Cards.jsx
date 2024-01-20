import React from "react";
import { Link } from "react-router-dom";
import { Card } from 'antd';
const { Meta } = Card;

const Cards = ({ product }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Link to={`/details/${product.idProduct}`}>
        <Card
          hoverable
          style={{
            width: 240,
            height: 350,
            margin: "10px",
            padding: "0", 
            borderRadius: '2rem',
          }}
          className="container"
        >
          <div style={{ height: '100%' }}>
            <img
              alt="example"
              src={product.image}
              style={{
                width: '100%',
                height: '200px', 
                objectFit: 'cover',
              }}
              className="productimage"
            />
            <div style={{ padding: '16px' }}>
              <Meta
                title={<strong>{product.name}</strong>}
                description={
                  <>
                    <p style={{ margin: '8px 0' }}>{product.nameColor}</p>
                    <p style={{ margin: '8px 0', fontWeight: 'bold' }}>
                      ${product.priceProduct}
                    </p>
                  </>
                }
              />
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default Cards;