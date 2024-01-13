import style from './Cards.module.css'
import {Link} from "react-router-dom";
const Cards = ({ product }) => {
    
    return (
        <div>
            <Link to={`/details/${product.id}`} >
            <img
            src="imagen"
            alt="nombredelproducto"
            className={style.productimage}
             />            
                <h3>{product.id}.{product.name}</h3>
                <h4>${product.price}</h4>
                </Link>
        </div>
    )
};

export default Cards;