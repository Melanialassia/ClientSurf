import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './details.module.css';

const Details = () => {
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios(`http://localhost:3001/surf/detail/${id}`);
              const { data } = response;
              console.log(data);
        
              
            } catch (error) {
              
            } 
          };

        fetchData(); }, [id]);
  return (
    <div>
        <div className={styles.detailsContainer}>
            <div className={styles.imgContainer}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_756414-MLA48403444692_122021-O.webp" alt="ej" />
            </div>
            <div className={styles.infoContainer}>
            <button className={styles.favButton}>❤️</button>
            <div className={styles.subInfoContainer1}>
            <h2>Nombre del producto</h2>
                <h3>Precio</h3>
            </div>
            <h2>talle/medida</h2>
            <p>Detalle de producto</p>
                <button>Añadir al carrito</button>
            </div>
        </div>
            <div>
                <p>Politicas de Cambioo</p>
            </div>

    </div>
  )
}

export default Details