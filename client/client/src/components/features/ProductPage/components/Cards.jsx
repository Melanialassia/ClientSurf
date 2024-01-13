import style from './Cards.module.css'
const Cards = ({ product }) => {

    return (
        <div>
            <img
                src={product.image}
                alt="nombredelproducto"
                className={style.productimage}
            />
            <h3>{product.idProduct}.{product.name}</h3>
            <h4>${product.priceProduct}</h4>

        </div>
    )
};

export default Cards;