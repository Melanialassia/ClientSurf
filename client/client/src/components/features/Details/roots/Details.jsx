import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import styles from './details.module.css';


const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    
    console.log(id);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios(`http://localhost:3001/surf/product/${id}`);
              const { data } = response;
                
                setProduct(data.listProducts[0]);
             
              
            } catch (error) {
              
            } 
          };

        fetchData(); }, [id]);

        console.log(product);

        const filteredCharacteristics = Object.entries(product.characteristics || {})
    .filter(([key, value]) => value !== true);
        
    const translateColor = (spanishColor) => {
      const colorMap = {
        gris: 'grey',
        azul: 'blue',
        verde:'green',
        negro:'black'
        // Agrega más traducciones según sea necesario
      };
    
      // Devuelve el color traducido o el color original si no hay traducción disponible
      return colorMap[spanishColor.toLowerCase()] || spanishColor;
    };

    const handleSizeSelect = (size) => {
      setSelectedSize(size);
    };
  
    const handleColorSelect = (color) => {
      setSelectedColor(color);
    };
  
    const addToCart = () => {
      // Aquí puedes enviar el producto al carrito con las tallas y colores seleccionados
      console.log('Producto agregado al carrito:', {
        ...product,
        selectedSize,
        selectedColor,
      });
      // Resto de la lógica para agregar al carrito...
    };
 
    console.log(selectedColor);
    console.log(selectedSize);
  return (
    <div>
        <div className={styles.detailsContainer}>
            <div className={styles.imgContainer}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_756414-MLA48403444692_122021-O.webp" alt="ej" />
            </div>
            <div className={styles.infoContainer}>
           
            <div className={styles.subInfoContainer1}>
              
            <h2>{product.name}</h2>
                <h2>${product.priceProduct}</h2>
                <div className={styles.characteristics}>
                <h3>Características:</h3>
                <ul>
                {filteredCharacteristics.map(([key, value]) => (
  <li key={key}>
    {key === 'Talla' ? (
      // Si la característica es "Talla", renderiza botones
      <>
        <strong>{key}:</strong> {value.split(',').map((talla) => (
          <button
          key={talla}
          style={{
            marginRight: '5px',
            border: talla === selectedSize ? '2px solid lightblue' : '2px solid transparent',
          }}
          onClick={() => handleSizeSelect(talla)}
        >
          {talla}
        </button>
        ))}
      </>
    ) : key === 'Color' ? (
      // Si la característica es "Color", renderiza botones
      <>
        <strong>{key}:</strong> {value.split('/').map((color) => (
          <button
          key={color}
          style={{
            backgroundColor: translateColor(color),
            marginRight: '5px',
            width: '20px',
            height: '20px',
            border: `4px solid ${translateColor(color) === selectedColor ? 'lightblue' : 'transparent'}`,
          }}
          onClick={() => handleColorSelect(translateColor(color))}
        >
          {/* Puedes agregar aquí el texto o icono que desees */}
        </button>
        ))}
      </>
    ) : (
      // Si no es "Talla" ni "Color", renderiza como texto
      <>
        <strong>{key}:</strong> {value}
      </>
    )}
  </li>
))}
              </ul>
              
            </div>
          </div>
        
            <div className={styles.description}>
            <p>{product.description}</p>
            </div>
            <div className={styles.cartButton}>
              <Link to='/cart'>
                <button>Añadir al carrito</button>
                </Link>
            </div>
            </div>
        </div>
            <div>
                <p>Politicas de Cambioo</p>
            </div>

    </div>
  )
}

export default Details