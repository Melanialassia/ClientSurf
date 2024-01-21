import Cards from "../components/Cards";
import style from "./Product.module.css";

const Product = ({ currentPoducts }) => {
  return (
    <div className={style.contenedorproductos}>
      {currentPoducts.length ? (
        currentPoducts.map((product) => (
          <Cards product={product} key={product.idProduct} />
        ))
      ) : (
        <p>NO SE ENCONTRO UN PRODUCTO </p>
      )}
    </div>
  );
};

export default Product;

