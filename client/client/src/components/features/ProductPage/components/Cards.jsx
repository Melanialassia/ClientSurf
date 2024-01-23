import React from "react";
//HOOKS
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//ACTION
import {
  addToFavorites,
  deleteFavorite,
} from "../../../../redux/actions/action";
import LoginModal from "../../LoginModal/root/LoginModal";
import { OPEN_MODAL } from "../../../../redux/actions-types/actions-types";
//LIBRARY
import { Card, Button, Space } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

const Cards = ({ product }) => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((s) => s.favoriteProducts);
  const isProductInFavorites = favoriteProducts.some(
    (favProduct) => favProduct.idProduct === product.idProduct
  );

  const [isInFavorites, setIsInFavorites] = useState(isProductInFavorites);

  const logedUser = JSON.parse(localStorage.getItem("logedUser"));
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));

  useEffect(() => {
    console.log("allFavs", favoriteProducts);
    setIsInFavorites(isProductInFavorites);
  }, [isProductInFavorites]);
  //FAVORITES
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

  //CART
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

  return (
    <div style={{ marginBottom: "20px", position: "relative" }}>
      <Card
        hoverable
        style={{
          width: 240,
          height: 350,
          margin: "10px",
          padding: "0",
          borderRadius: "2rem",
        }}
        className="container"
      >
        <div style={{ height: "100%" }}>
          <Link
            to={`/details/${product.idProduct}`}
            style={{ textDecoration: "none" }}
          >
            <img
              alt="example"
              src={product.image}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
              className="productimage"
            />
            <div style={{ padding: "16px" }}>
              <Meta
                title={<strong>{product.name}</strong>}
                description={
                  <>
                    <p style={{ margin: "8px 0", fontWeight: "bold" }}>
                      ${product.priceProduct}
                    </p>
                  </>
                }
              />
            </div>
          </Link>
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <Space>
              {isInFavorites ? (
                <HeartFilled
                  onClick={removeFromFavoritesHandler}
                  style={{
                    color: "#E89038",
                    fontSize: "20px",
                    marginLeft: "10px",
                    marginTop: "20px"
                  }}
                />
              ) : (
                <HeartOutlined
                  onClick={addToFavoritesHandler}
                  style={{
                    color: "#E89038",
                    fontSize: "20px",
                    marginLeft: "10px",
                    marginTop: "20px"
                  }}
                />
              )}
              <Button
                icon={<ShoppingCartOutlined />}
                onClick={addToCartHandler}
              />
            </Space>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
