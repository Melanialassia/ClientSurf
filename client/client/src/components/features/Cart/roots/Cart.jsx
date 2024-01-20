import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Cart.module.css';
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';
import EmptyPage from '../../EmptyPage/roots/EmptyPage';


const Cart = () => {
  const [cartData, setCartData] = useState(null);
  const [refreshCart, setRefreshCart] = useState(false);
  
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
    setRefreshCart(false);
  }, [refreshCart]); 
  
  const cartListItems = cartData?.cartList || [];
  console.log(cartData);
  
  const handleRemoveProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3001/surf/cart/1/${productId}`); 
      setRefreshCart(true);
    } catch (error) {
      console.error('Error al eliminar el producto del carrito:', error);
    }
  };

  const handleRemoveAllProducts = async () => {
    try {
      await axios.delete(`http://localhost:3001/surf/cart/1`);
      setRefreshCart(true);
    } catch (error) {
      console.error('Error al eliminar todos los productos del carrito:', error);
    }
  };

  const handleFinish = async () => {
    let listCart = cartListItems.map((item) => {
      return {
        id: item.idProduct, 
        name: item.name,
        image: item.image,
        price: item.priceProduct, 
        quantity: item.amount, 
        description: item.description, 
        userId: "1",
      };
    });

    
    console.log(listCart);
    try {
      const response = await axios.post('http://localhost:3001/surf/mecado', listCart);
      console.log('Response:', response);
      const data = response.data;
      
      console.log(data);
      window.location.href = data;
    } catch (error) {
      console.error('Error al finalizar la compra:', error);
    }
  }
  
  
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
                    className={styles.customButton}
                    onClick={() => handleRemoveProduct(product.idProduct)}
                  >
                    <DeleteOutlined />
                  </button>
                </li>
              ))}
            </ul>
            <button  className={styles.customPrimaryButton} onClick={handleRemoveAllProducts}>
              Vaciar Carrito
            </button>
          </div>
        ) : (
          <div>
            <h2>Carrito de Compras</h2>
            <EmptyPage className={styles.emptyPage}/>
          </div>
        )}
        {cartListItems.length > 0 && (
          <div className={styles.totalPriceContainer}>
            <p>Total de venta: <strong>${cartData?.costSale || 0}</strong></p>
            <button className={styles.buyButton} onClick={handleFinish}>
              FINALIZAR COMPRA
            </button>
          </div>
        )}
      </div>
    
  );
  }
  export default Cart;
  

