import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Cart.module.css';
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';
import EmptyPage from '../../EmptyPage/roots/EmptyPage';
import { useSelector, useDispatch } from "react-redux";
import { InputNumber } from 'antd';



const Cart = () => {
  const [cartData, setCartData] = useState(null);
  const [refreshCart, setRefreshCart] = useState(false);
  const dataUser = useSelector((state) => state.dataUser);
  const userId = localStorage.getItem('userId');
  const storedAccess = localStorage.getItem('access');
  const userAccess = storedAccess ? JSON.parse(storedAccess) : null;
  
 
  
  const fetchCartData = async () => {
    try {
      const response = await axios.get(`https://surf-4i7c.onrender.com/surf/cart/1`);
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
  
  const handleRemoveProduct = async (productId) => {
    try {
      await axios.delete(`https://surf-4i7c.onrender.com/surf/cart/${userId}/${productId}`); 
      setRefreshCart(true);
    } catch (error) {
      console.error('Error al eliminar el producto del carrito:', error);
    }
  };

  const handleRemoveAllProducts = async () => {
    try {
      await axios.delete(`https://surf-4i7c.onrender.com/surf/cart/${userId}`);
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
        code: item.code,
        userId: userId
      };
    });
    
      const cartItemsJSON = JSON.stringify(listCart);
      localStorage.setItem('cartItems', cartItemsJSON);
   
    
    console.log(listCart);
    
    
    try {
      const response = await axios.post('https://surf-4i7c.onrender.com/surf/mecado', listCart);
      const data = response.data;
      
      console.log(data);
      window.location.href = data;
    } catch (error) {
      console.error('Error al finalizar la compra:', error);
    }
  }
  
  
  if (!userAccess) {
    return (
      <div>
        <h2>Carrito de Compras</h2>
        <p>No tienes ningún artículo en tu carrito de compras.</p>
      </div>
    );
  }
 
  const handleQuantityChange = async (productId, newQuantity) => {
    
    try {
      await axios.put(`https://surf-4i7c.onrender.com/surf/cart`, {
        idProduct: productId,
        idUser: 1,
        amount: newQuantity
      });
      setRefreshCart(true);
    } catch (error) {
      console.error('Error al modificar la cantidad del producto en el carrito:', error);
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
                    <p className={styles.productQuantity}>
                    Cantidad:{" "}
                    <InputNumber
                      type="number"
                      value={product.amount}
                      onChange={(value) => {
                        console.log("Input change:", value);
                        const newQuantity = parseInt(value, 10);
                        console.log("Parsed Quantity:", newQuantity);
                        if (!isNaN(newQuantity)) {
                          handleQuantityChange(product.idProduct, newQuantity);
                        }
                      }}
                    />
                  </p>
                    
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
            <hr></hr>
            <button className={styles.buyButton} onClick={handleFinish}>
              FINALIZAR COMPRA
            </button>
          </div>
        )}
      </div>
    
  );
  }
  export default Cart;
  

