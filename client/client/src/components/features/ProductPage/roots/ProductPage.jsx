import Product from "../containers/Product";
import style from './PropductPage.module.css';

const ProductPage = () => {
    return (
        <div className={style.wrapper}>
            <aside className={style.aside}>
                <header className={style.titulo}>
                    <h2>Filtros</h2>
                </header>
                <ul className={style.filtro}>
                    <h3>Colores</h3>
                    <button>Se muestran todos los colores(hacer mapeo)</button>
                </ul>
                <ul className={style.filtro}>
                    <h3>Sexo</h3>
                    <button>Se muestran todos los colores(hacer mapeo)</button>
                </ul>

            </aside>
            <main className={style.main}>
                <Product />
            </main>
        </div>
    )
};

export default ProductPage;