import React from "react";
import {
  HeartFilled,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div>
        <img
          className={styles.logo}
          src="/assets/images/LaOlaUrbanaLogo.png"
          alt="Logo"
        />
      </div>

      <div className={styles.navbar}>
        <NavBar />
      </div>

      <div>
        <div className={styles.iconButton}>
          <Link>
            <HeartFilled
              style={{
                color: "red",
                fontSize: "25px",
              }}
            />
          </Link>

          <Link to="/login">
            <UserOutlined
              style={{
                color: "black",
                fontSize: "25px",
              }}
            />
          </Link>
        </div>

        <input type="text" placeholder="Search..." />
      </div>

      <div>
        <Link to="/Home">
          <ShoppingCartOutlined
            style={{
              color: "blue",
              fontSize: "35px",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
