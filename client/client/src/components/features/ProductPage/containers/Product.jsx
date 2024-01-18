import Cards from "../components/Cards";
import style from "./Product.module.css";

const Product = ({ currentPoducts}) => {
  return (
    <div className={style.contenedorproductos}>
      {currentPoducts .map((product) => (
        <Cards product={product} key={product.idProduct} />
      ))}
    </div>
  );
};

export default Product;
