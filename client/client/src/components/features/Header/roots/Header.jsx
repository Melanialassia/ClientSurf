//HOOKS
import { useLocation, Link, useNavigate } from "react-router-dom";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//COMPONENTS
import NavBar from "../components/NavBar";
import ProfileMenu from "../components/ProfileMenu";
import ProfileMenuAdmin from "../components/ProfileMenuAdmin";
import LoginModal from "../../LoginModal/root/LoginModal";
//LIBRARYS
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Avatar, Badge } from "antd";
//REDUX
import {
  OPEN_MODAL,
  LOGED_USER,
} from "../../../../redux/actions-types/actions-types";

//STYLE-SHEETS
import styles from "./Header.module.css";
import { getCartProducts } from "../../../../redux/actions/action";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.dataUser);
  const logedUser = JSON.parse(localStorage.getItem("logedUser"));
  const [reload, setReload] = useState(false);
  const cartData = JSON.parse(localStorage.getItem("cartData")) || { cartList: [] };
  console.log(cartData);
  const cartProducts = useSelector((state) => state.cart);
  
 

  const open = useSelector((state) => state.openModal);

  const location = useLocation();

  useEffect(() => {
    dispatch(getCartProducts())
    setReload(true);
  }, [reload]);

  useEffect(() => {
    // Check if access is in localStorage and set logedUser accordingly
    const storedAccess = localStorage.getItem("access");
    if (storedAccess) {
      dispatch({ type: LOGED_USER, payload: true });
    }
  }, [dispatch]);

  let userAccess = null;
  let userLevel = null;
  // const userAccess = !data ? data.access : null;
  if (data) {
    userAccess = data.access;
    userLevel = data.level;

    // Guardar el valor de access en el localStorage
    localStorage.setItem("access", JSON.stringify(userAccess));
    localStorage.setItem("idLevel", JSON.stringify(userLevel));
  } else {
    // Si no hay datos de usuario, intenta recuperar el valor desde el localStorage
    const storedAccess = localStorage.getItem("access");
    userAccess = storedAccess ? JSON.parse(storedAccess) : null;
    const storedIdLevel = localStorage.getItem("idLevel");
    userLevel = storedIdLevel ? JSON.parse(storedIdLevel) : null;
  }

  // const userAccess = data ? data.access || localStorage.getItem("email") : false;
  // const userAccess = data?.access || localStorage.getItem("email");

  const styledButton = {
    backgroundColor: "#30445c",
    borderRadius: "20px",
    color: "#e2dcd1",
    marginTop: "66px",
    textAlign: "center",
    fontWeight: "500",
    fontSize: "20px",
    padding: "20px 20px",
    lineHeight: "-0px",
  };

  const handleCartClick = () => {
    if (logedUser === null || logedUser === false) {
      handleOpenModal();
    } else {
      navigate("/cart");
    }
  };

  const handleOpenModal = () => {
    dispatch({ type: OPEN_MODAL });
  };

  return (
    <div className={styles.headerContainer}>
      <div>
        <a href="/">
          <img
            className={styles.logo}
            src="/assets/images/LogoOla.png"
            alt="Logo"
          />
        </a>
      </div>

      <div>
        <LoginModal open={open} />
      </div>

      <div className={styles.navbar}>
        <NavBar />
      </div>

      {userAccess === true && userLevel === "ADMIN" ? (
        <ProfileMenuAdmin />
      ) : userAccess === true && userLevel === "STANDAR" ? (
        <ProfileMenu />
      ) : (
        <ul className={styles.menuitems}>
          <li>
            <Link to="/login">
              <p href="">Iniciar sesión</p>
            </Link>
          </li>
          <Link to={"/account/create"}>
            <Button type="primary" style={styledButton}>
              Registrarse
            </Button>
          </Link>
        </ul>
      )}

      <div>
        {logedUser ? (
          <a href="#">
            <Badge count={cartData?.cartList?.length || 0}>
              <ShoppingCartOutlined
                onClick={handleCartClick}
                style={{
                  color: "#28445c",
                  fontSize: "35px",
                }}
              />
            </Badge>
          </a>
        ) : (
          <ShoppingCartOutlined
            onClick={handleCartClick}
            style={{
              color: "#28445c",
              fontSize: "35px",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
