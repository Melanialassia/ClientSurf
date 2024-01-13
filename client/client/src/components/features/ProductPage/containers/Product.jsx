import Cards from "../components/Cards";
import style from "./Product.module.css";

const Product = ({ currentProducts }) => {
  return (
    <div className={style.contenedorproductos}>
      {currentProducts.map((product) => (
        <Cards product={product} key={product.idProduct} />
      ))}
    </div>
  );
};

export default Product;
