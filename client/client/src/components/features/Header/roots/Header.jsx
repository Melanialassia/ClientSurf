//Hooks
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
//Librarys
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
//Components
import NavBar from "../components/NavBar";
//style-sheets
import styles from "./Header.module.css";
//JavaScript

const Header = () => {
  const data = useSelector((state) => state.dataUser);

  const location = useLocation();
let userAccess = null;
  // const userAccess = !data ? data.access : null;
  if(data){
   userAccess = data.access;
} 


  console.log(userAccess)

  const styledButton = {
    backgroundColor: "#30445c",
    borderRadius: "20px",
    color: "#e2dcd1",
    marginTop: "-5px",
    textAlign: "center",
    fontWeight: "500",
    fontSize: "20px",
    padding: "20px 20px",
    lineHeight: "-0px",
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

      <div className={styles.navbar}>
        <NavBar />
      </div>

      {!userAccess && (
        <div>
          <ul className={styles.menuitems}>
            <li>
              <Link to="/login">
                <a href="">Iniciar sesión</a>
              </Link>
            </li>

            <Link to={"/account/create"}>
              <Button type="primary" style={styledButton}>
                Registrarse
              </Button>
            </Link>
          </ul>
        </div>
      )}

      <div>
        <Link to="/">
          <ShoppingCartOutlined
            style={{
              color: "#28445c",
              fontSize: "35px",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
