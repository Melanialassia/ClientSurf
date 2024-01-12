import Cards from "../components/Cards";
import products from "../db/db";
import style from './Product.module.css';

const Product = () => {
    return (
        <div className={style.contenedorproductos}>
            {
                products.map((product) => (
                    <Cards product={product} key={product.id} />
                ))
            }
        </div>
    )
};

export default Product;