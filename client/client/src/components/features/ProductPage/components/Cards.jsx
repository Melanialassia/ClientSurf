import React from "react";
//HOOKS
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//ACTION
import {
  addToCart,
  addToFavorites,
  deleteFavorite,
  getAllFavoriteProducts
} from "../../../../redux/actions/action";
import LoginModal from "../../LoginModal/root/LoginModal";
import { OPEN_MODAL } from "../../../../redux/actions-types/actions-types";
//LIBRARY
import { Card, Button, Space, message} from "antd";
import {
  HeartOutlined,
  HeartFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

const Cards = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favoriteProducts = useSelector((s) => s.favoriteProducts);
  const logedUser = JSON.parse(localStorage.getItem("logedUser"));
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const userId = localStorage.getItem("userId");
  const [messageApi, contextHolder] = message.useMessage();
  
  const isProductInFavorites = favoriteProducts.some(
    (favProduct) => favProduct.idProduct === product.idProduct
  );

  const [isInFavorites, setIsInFavorites] = useState(isProductInFavorites);
    //MESSAGE
/*     const openMessage = () => {
      messageApi.open({
        key: 'addToFavoritesMessage', // Asegúrate de tener una clave única para cada mensaje
        type: 'success',
        content: 'Producto agregado a favoritos',
        duration: 2,
      });
    }; */

  //FAVORITES
  
  useEffect(() => {
    if(logedUser === true){
      dispatch(getAllFavoriteProducts(dataUser.idUser))
    }
  }, [])


  useEffect(() => {
    setIsInFavorites(isProductInFavorites);
  }, [isProductInFavorites]);

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

/*   useEffect(() => {
    if (isInFavorites) {
      openMessage(); // Llama a la función openMessage dentro del efecto
    }
  }, [isInFavorites]); */

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
          addToCart(product.idProduct, dataUser.idUser, 1/* , product.description */)
        );
        messageApi.open({
          type: "success",
          content: "Producto agregado al carrito!",
        });
        //navigate("/cart");
      } catch (error) {
        console.error("Error al agregar al carrito:", error);
      }
    }
  };
  return (
    <div style={{ marginBottom: "20px", position: "relative" }}>
      {contextHolder} 
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
