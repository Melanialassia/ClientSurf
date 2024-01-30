import React from "react";
import { useDispatch } from "react-redux";
import { deleteFavorite } from "../../../../../redux/actions/action";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./FavoriteCard.module.css";
import { Link } from "react-router-dom";
import {
  addToCart,
  } from "../../../../../redux/actions/action";


const logedUser = JSON.parse(localStorage.getItem("logedUser"));
const userId = localStorage.getItem("userId");

const FavoriteCard = ({ product, user }) => {
  const dispatch = useDispatch();
console.log(product);
  const handleDelete = () => {
    dispatch(deleteFavorite(user.idUser, product.idProduct));
  };

  const addToCartHandler = async () => {
    if (logedUser === null || logedUser === false) {
      
    } else {
      try {
        await dispatch(
          addToCart(product.idProduct, user.idUser, 1)
        );
      } catch (error) {
        console.error("Error al agregar al carrito:", error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <img src={product.image} alt="Product image" className={styles.image} />

      <div className={styles.productInfo}>
        <Link to={`/details/${product.idProduct}`}>
          <p>{product.name}</p>
        </Link>

        <p>${product.priceProduct}</p>
      </div>

      <div className={styles.buttons}>
        <Button onClick={addToCartHandler} type="primary" icon={<ShoppingCartOutlined />}>
          Agregar al carrito
        </Button>

        <Button onClick={handleDelete} type="primary" icon={<DeleteOutlined />}>
          Eliminar
        </Button>
      </div>
    </div>
  );
};

export default FavoriteCard;
