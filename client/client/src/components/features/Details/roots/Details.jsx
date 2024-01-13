import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import styles from './details.module.css';


const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [cart, setCart] = useState([]);
    console.log(id);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios(`http://localhost:3001/surf/detail/${id}`);
              const { data } = response;
              console.log(data);

              if (data.name) {
                setProduct(data);
              }
        
              
            } catch (error) {
              
            } 
          };

        fetchData(); }, [id]);

        const addToCart = () => {
          // Check if the product is already in the cart
          const isInCart = cart.some(item => item.id === product.id);
  
          if (!isInCart) {
              // If not, add it to the cart
              const newCart = [...cart, product];
              setCart(newCart);
  
              // Store the updated cart in localStorage
              localStorage.setItem('cart', JSON.stringify(newCart));
          } else {
              console.warn('Product is already in the cart.');
          }
      };
       console.log(localStorage.getItem('cart'));
  return (
    <div>
        <div className={styles.detailsContainer}>
            <div className={styles.imgContainer}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_756414-MLA48403444692_122021-O.webp" alt="ej" />
            </div>
            <div className={styles.infoContainer}>
           
            <div className={styles.subInfoContainer1}>
              <h1>ESPERANDO RUTAS DE BACK DETAIL</h1>
            <h2>Nombre de producto</h2>
                <h3>Precio</h3>
            </div>
            <h2>talle/medida</h2>
            <p>Detalle de producto</p>
                <button onClick={addToCart}>Añadir al carrito</button>
            </div>
        </div>
            <div>
                <p>Politicas de Cambioo</p>
            </div>

    </div>
  )
}

export default Details