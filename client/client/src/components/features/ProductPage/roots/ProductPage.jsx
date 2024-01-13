import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
//COMPONENTS
import CategoryFilter from '../containers/CategoryFilter';
import Product from '../containers/Product';
//ACTIONS
import { getAllCategorys, getAllProducts } from "../../../../redux/actions/action";
import { filterProductsByCategory } from '../../../../redux/actions/action';
//STYLE
import style from './PropductPage.module.css';

const ProductPage = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector((s) => s.filter); 
    const allCategorys = useSelector((s) => s.allCategorys);

    const [category, setCategory] = useState("");

    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getAllCategorys());
    },[]);


    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);
        dispatch(filterProductsByCategory(selectedCategory));
    };


    return (
        <div className={style.wrapper}>
            <aside className={style.aside}>
                <header className={style.titulo}>
                    <h2>Filtros</h2>
                </header>
                <select 
                className={style.filtro} 
                onChange={handleCategoryChange} 
                value={category}>
                   <option value="">Categorias</option>
                   <CategoryFilter allCategorys={allCategorys}/>
                </select>
                <ul className={style.filtro}>
                    <h3>Sexo</h3>
                    <button>Se muestran todos los colores(hacer mapeo)</button>
                </ul>

            </aside>
            <main className={style.main}>
                <div className={style.priceSection}>
                    <h4>Ordenar por</h4>
                    <select className={style.select}>
                        <option>Menor Precio</option>
                        <option>Mayor Precio</option>
                    </select>
                </div>
                    <Product allProducts={allProducts}/>
            </main>
        </div>
    )
};

export default ProductPage;