import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Cart.module.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartData, setCartData] = useState(null);
 

  const fetchCartData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/surf/cart/1');
      setCartData(response.data);
    } catch (error) {
      console.error('Error al cargar el carrito:', error);
    }
  };

  useEffect(() => {
    fetchCartData();
    
  }, []); 

  const cartListItems = cartData?.cartList || [];

  const handleRemoveProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3001/surf/cart/1`);
      setRefreshCart(true);
    } catch (error) {
      console.error('Error al eliminar el producto del carrito:', error);
    }
  };

  return (
    <div className={styles.cartContainer}>
      {cartListItems.length > 0 ? (
        <div className={styles.productListContainer}>
          <h2>Carrito de Compras</h2>
          <ul className={styles.productList}>
            {cartListItems.map((product) => (
              <li key={product.idProduct} className={styles.productItem}>
                  <div className={styles.productInfo}>
                  <img src={product.image} alt={product.name} className={styles.productImage} />
                <Link to={`/details/${product.idProduct}`} className={styles.productLink}>
                    <p className={styles.productName}>{product.name}</p>
                </Link>
                    <p className={styles.productQuantity}>Cantidad: {product.amount}</p>
                    <p className={styles.productPrice}>Precio: ${product.priceProduct}</p>
                  </div>
                <button
                  className={styles.removeButton}
                  onClick={() => handleRemoveProduct(product.idProduct)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
            <h2>Carrito de Compras</h2>
        <p>No tienes ningún artículo en tu carrito de compras.</p>
        </div>
      )}
      {cartListItems.length > 0 && (
        <div className={styles.totalPriceContainer}>
          <p>Total de venta: <strong>${cartData?.costSale || 0}</strong></p>
          <button className={styles.buyButton}>Finalizar Compra</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

