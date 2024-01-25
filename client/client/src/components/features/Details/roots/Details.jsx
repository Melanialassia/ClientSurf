import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./details.module.css";
import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  addToFavorites,
  deleteFavorite,
  getAllFavoriteProducts,
} from "../../../../redux/actions/action";
import LoginModal from "../../LoginModal/root/LoginModal";

import {
  HeartOutlined,
  HeartFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import { OPEN_MODAL } from "../../../../redux/actions-types/actions-types";

const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const imgRef = useRef(null);
  const [quantity, setQuantity] = useState(1);

  const logedUser = JSON.parse(localStorage.getItem("logedUser"));
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));

  const favoriteProducts = useSelector((s) => s.favoriteProducts);
  const open = useSelector((s) => s.openModal);

  const isProductInFavorites = favoriteProducts.some(
    (favProduct) => favProduct.idProduct === product.idProduct
  );

  const [isInFavorites, setIsInFavorites] = useState(isProductInFavorites);

  useEffect(() => {
    if(logedUser === true){

      dispatch(getAllFavoriteProducts(dataUser.idUser))
    }
  }, [])

  useEffect(() => {
    setIsInFavorites(isProductInFavorites);
  }, [isProductInFavorites]);

  const storedAccess = localStorage.getItem("access");
  const userAccess = storedAccess ? JSON.parse(storedAccess) : null;
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          `https://surf-4i7c.onrender.com/surf/product/${id}`
        );
        const { data } = response;
        setProduct(data.listProducts[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

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
        img.style.transformOrigin = "center center";
        img.style.transform = "scale(1)";
      };

      img.addEventListener("mousemove", handleMouseMove);
      img.addEventListener("mouseout", handleMouseOut);

      return () => {
        img.removeEventListener("mousemove", handleMouseMove);
        img.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [imgRef.current]);

  const filteredCharacteristics = Object.entries(
    product.characteristics || {}
  ).filter(([key, value]) => value !== true);

  const translateColor = (spanishColor) => {
    const colorMap = {
      gris: "grey",
      azul: "blue",
      verde: "green",
      negro: "black",
      rojo: "red",
      blanco: "white",
      amarillo: "yellow",
      rosa: "pink",
      morado: "purple",
      naranja: "orange",
      marrón: "brown",
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
    if (logedUser === null || logedUser === false) {
      handleOpenModal();
    } else {
      try {
        await dispatch(
          addToCart(product.idProduct, userId, quantity, product.description)
        );

        navigate("/cart");
      } catch (error) {
        console.error("Error al agregar al carrito:", error);
      }
    }
  };

  const addToFavoritesHandler = () => {
    if (logedUser === false || logedUser === null) {
      handleOpenModal();
    } else {
      
      dispatch(addToFavorites(dataUser.idUser, product.idProduct));
      setIsInFavorites(!isInFavorites);
    }
  };

  const removeFromFavoritesHandler = () => {
    dispatch(deleteFavorite(dataUser.idUser, product.idProduct));
    setIsInFavorites(!isInFavorites);
  };

  const handleOpenModal = () => {
    dispatch({ type: OPEN_MODAL });
  };

  const getColorButtons = () => {
    if (product.nameColor) {
      const colors = product.nameColor.split("/");

      return (
        <div className={styles.colorButtons}>
          <strong>Color: </strong>
          {colors.map((color) => (
            <button
              key={color}
              style={{
                backgroundColor: translateColor(color),
                marginRight: "5px",
                width: "30px",
                height: "30px",
                border: `2px solid ${
                  translateColor(color) === selectedColor
                    ? "lightblue"
                    : "transparent"
                }`,
                borderRadius: "100px",
              }}
              onClick={() => handleColorSelect(translateColor(color))}
            />
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <div className={styles.detailsContainer}>
        <div className={styles.imgContainer}>
          <img
            ref={imgRef}
            src={product.image}
            alt="ej"
            style={{ transform: "scale(1.2)" }}
          />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.subInfoContainer1}>
            <div className={styles.heartButton}>
              {isInFavorites ? (
                <HeartFilled
                  onClick={removeFromFavoritesHandler}
                  style={{
                    color: "#E89038",
                    fontSize: "35px",
                    marginLeft: "10px",
                  }}
                />
              ) : (
                <HeartOutlined
                  onClick={addToFavoritesHandler}
                  style={{
                    color: "#E89038",
                    fontSize: "35px",
                    marginLeft: "10px",
                  }}
                />
              )}
            </div>
            <h2>{product.name}</h2>
            <div className={styles.price}>
              <h2>${product.priceProduct}</h2>
            </div>
          </div>

          <div className={styles.description}>
            <h3>Descripcion:</h3>

            <p>{product.description}</p>
            <p>
              <div className={styles.color}>{getColorButtons()}</div>
              <br />
              <div className={styles.size}>
                <br />
                <strong>Talle:</strong> {product.nameSize}
              </div>
              <div className={styles.stock}>
                <strong>Stock:</strong>{" "}
                {product.stock > 0 ? "Disponible" : "Agotado"}
              </div>
            </p>
          </div>
          <div className={styles.cartButton}>
            <label htmlFor="quantityInput">Cantidad:</label>

            <select
              className={styles.quantityLabel}
              id="quantityInput"
              name="quantityInput"
              value={quantity}
              onChange={handleQuantityChange}
            >
              {[...Array(product.stock).keys()].map((count) => (
                <option key={count + 1} value={count + 1}>
                  {count + 1}
                </option>
              ))}
            </select>

            <button disabled={product.stock === 0} onClick={addToCartHandler}>
              Añadir al carrito <ShoppingCartOutlined />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.politicas}>
        <p>
          En LA OLA URBANA tenés 15 días para cambiar luego de haber realizado
          la compra. El cambio puede ser por talle o color y se respeta el
          precio que pagaste. PASO A PASO: Envíanos un mail a
          laolaurbana@gmail.com con el asunto “Cambio/Devolución” indicando en
          el cuerpo del mail las siguientes informaciones: * Nombre completo *
          DNI * Número de pedido * Producto para devolver * Nuevo producto que
          quiero recibir * Motivo del cambio/devolución Vas a recibir nuestra
          respuesta con los pasos a seguir y la información necesaria para
          realizar el envío. IMPORTANTE! Los productos deben ser enviados en
          perfecto estado, sin uso, sin perfumes, sin manchas y sin haberse
          lavado. Cada prenda debe contar con su etiqueta adherida y encontrarse
          en su paquete correspondiente. El cargo de envío por cambios o
          devoluciones correrá por tu cuenta. Gracias! LA OLA URBANA
        </p>
      </div>

      <br></br>

      <div>
        <LoginModal open={open} />
      </div>
    </div>
  );
};

export default Details;
