import style from './Cards.module.css'
const Cards = ({ product }) => {
    
    return (
        <div>
            <img
            src="imagen"
            alt="nombredelproducto"
            className={style.productimage}
             />            
                <h3>{product.id}.{product.name}</h3>
                <h4>${product.price}</h4>
    
        </div>
    )
};

export default Cards;