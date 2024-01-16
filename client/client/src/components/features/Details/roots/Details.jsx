import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styles from './details.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../../redux/actions/action"



const Details = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const idUser = 1
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const imgRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
 
  
 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`http://localhost:3001/surf/product/${id}`);
        const { data } = response;
        setProduct(data.listProducts[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  console.log(product);

  useEffect(() => {
    if (imgRef.current) {
        const img = imgRef.current;
        const handleMouseMove = (e) => {
            const { left, top, width, height } = e.target.getBoundingClientRect();
            const x = ((e.pageX - left) / width) * 100;
            const y = ((e.pageY - top) / height) * 100;
            
            const scaleFactor = 1.4;
            img.style.transformOrigin = `${x}% ${y}%`;
            img.style.transform = `scale(${scaleFactor})`;
        };

        const handleMouseOut = () => {
            img.style.transformOrigin = 'center center';
            img.style.transform = 'scale(1)';
        };

        img.addEventListener('mousemove', handleMouseMove);
        img.addEventListener('mouseout', handleMouseOut);

        return () => {
            img.removeEventListener('mousemove', handleMouseMove);
            img.removeEventListener('mouseout', handleMouseOut);
        };
    }
}, [imgRef.current]);

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
  
    const handleQuantityChange = (event) => {
      setQuantity(Number(event.target.value));
    };

    const addToCartHandler = async () => {
      
      try {
        console.log("idUser:", idUser); 
         await dispatch(addToCart(product.idProduct, 1, quantity));

        
      } catch (error) {
        console.error('Error al agregar al carrito:', error);
      }
    };
 
    


  
  return (
    
    <div>
        <div className={styles.detailsContainer}>
        <div className={styles.imgContainer}>
          <img
            ref={imgRef}
            src={product.image}
            alt="ej"
            style={{ transform: 'scale(1.2)' }} 
          />
        </div>
            <div className={styles.infoContainer}>
           
            <div className={styles.subInfoContainer1}>
              
            <h2>{product.name}</h2>
            <div className={styles.price}>
                <h2>${product.priceProduct}</h2>
                </div>
                

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
              <h3>Descripcion:</h3>

            <p>{product.description}</p>
            </div>
            <div className={styles.cartButton}>
            <label htmlFor="quantityInput">Cantidad:</label>
        <input className={styles.quantityLabel}
          type="number"
          id="quantityInput"
          name="quantityInput"
          min="1"
          max={product.stock}
          value={quantity}
          onChange={handleQuantityChange}
        />
        <Link to="/cart">
              <button type="primary" onClick={addToCartHandler}>Añadir al carrito</button>
              </Link>
            </div>
            </div>
        </div>
            <div className={styles.politicas}>
                <p>Politicas de Cambioo</p>
            </div>

    </div>
    
  )
}

export default Details