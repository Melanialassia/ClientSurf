
import style from "./Cards.module.css";
import { Link } from "react-router-dom";



const Cards = ({ product }) => {

  return (
    <div >
      <Link to={`/details/${product.idProduct}`}>
        <img
          src={product.image}
          alt=""
          className={style.productimage}
        />
        <h3 className={style.container}>
          {product.name}
        </h3>
        <h4 className={style.container}>${product.priceProduct}</h4>
        <h4 >{product.nameColor}</h4>
      </Link>
    </div>
  );
};

export default Cards;
