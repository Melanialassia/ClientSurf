//COMPONENT
import Cards from "../components/Cards";
//STYLE
import style from "./Product.module.css";
//LIBRARY
import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";

const Product = ({ currentPoducts }) => {
  return (
    <div className={style.contenedorproductos}>
      {currentPoducts.length ? (
        currentPoducts.map((product) => (
          <Cards product={product} key={product.idProduct} />
        ))
      ) : (
        <div className={style.centeredResultContainer}>
          <Result
            className={style.centeredResult}
            icon={<SmileOutlined />}
            title="Aun no tenemos ese producto!."
          />
        </div>
      )}
    </div>
  );
};

export default Product;
