//COMPONENT
import Cards from "../components/Cards";
//STYLE
import style from "./Product.module.css";
//IMAGE
import productNotFound from "../../../../images/productonoencontrado.gif";
//LIBRARY
import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import React, { useEffect, useState } from "react";
import surferLoaderImage from "../../../../images/loader.gif";

const Product = ({ currentPoducts }) => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className={style.contenedorproductos}>
      {loading ? (
        <div className={style.centeredResultContainer}>
          <Result
            className={style.centeredResult}
            icon={<img
              className={style.loaderImage}
              src={surferLoaderImage}
              alt="Surfer Loader"
            />}
            title="Cargando productos..."
          />
            
        </div>
      ) : currentPoducts.length ? (
        currentPoducts.map((product) => (
          <Cards product={product} key={product.idProduct} />
        ))
      ) : (
        <div className={style.image} >
          <img src={productNotFound} alt="producto no encontrado"/>
          <p>¡Lo sentimos, no se encontraron productos que coincidan con tu búsqueda!</p>
        </div>
      )}
    </div>
  );
};

export default Product;