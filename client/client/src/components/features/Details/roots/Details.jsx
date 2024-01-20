import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./details.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToFavorites,
  deleteFavorite,
} from "../../../../redux/actions/action";
import LoginModal from "../../LoginModal/root/LoginModal";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

import { OPEN_MODAL } from "../../../../redux/actions-types/actions-types";

const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const idUser = 1;
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const imgRef = useRef(null);
  const [quantity, setQuantity] = useState(1);

  const logedUser = useSelector((state) => state.logedUser);
  const favoriteProducts = useSelector((s) => s.favoriteProducts);
  const open = useSelector((s) => s.openModal);
  const dataUser = useSelector((state) => state.dataUser);

  const isProductInFavorites = favoriteProducts.some(
    (favProduct) => favProduct.idProduct === product.idProduct
  );

  const [isInFavorites, setIsInFavorites] = useState(isProductInFavorites);

  useEffect(() => {
    console.log("allFavs", favoriteProducts);
    setIsInFavorites(isProductInFavorites);
  }, [isProductInFavorites]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          `http://localhost:3001/surf/product/${id}`
        );
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

  console.log(product);

  const filteredCharacteristics = Object.entries(
    product.characteristics || {}
  ).filter(([key, value]) => value !== true);

  const translateColor = (spanishColor) => {
    const colorMap = {
      gris: "grey",
      azul: "blue",
      verde: "green",
      negro: "black",
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
    if (logedUser === false) {
      handleOpenModal();
    } else {
      try {
        console.log("idUser:", idUser);
        console.log(product);
        await dispatch(
          addToCart(product.idProduct, 1, quantity, product.description)
        );

        navigate("/cart");
      } catch (error) {
        console.error("Error al agregar al carrito:", error);
      }
    }
  };

  const addToFavoritesHandler = () => {
    if (logedUser === false) {
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
            <h2>{product.name}</h2>
            <div className={styles.price}>
              <h2>${product.priceProduct}</h2>
            </div>
          </div>

          <div className={styles.description}>
            <h3>Descripcion:</h3>

            <p>{product.description}</p>
            <p>
              <div className={styles.color}>
                <strong>Color:</strong> {product.nameColor}
              </div>
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
              Añadir al carrito
            </button>

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
        </div>
      </div>
      <div className={styles.politicas}>
        <p>Politicas de Cambioo</p>
      </div>

      <br></br>

      <div>
        <LoginModal open={open} />
      </div>
    </div>
  );
};

export default Details;
