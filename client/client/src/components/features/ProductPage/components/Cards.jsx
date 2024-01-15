
import style from "./Cards.module.css";
import { Link } from "react-router-dom";



const Cards = ({ product }) => {

  return (
    <div>
      <Link to={`/details/${product.idProduct}`}>
        <img
          src={product.image}
          alt="nombredelproducto"
          className={style.productimage}
        />
        <h3>
          {product.name}
        </h3>
        <h4>${product.priceProduct}</h4>
        <h4>{product.nameColor}</h4>
      </Link>
    </div>
  );
};

export default Cards;
