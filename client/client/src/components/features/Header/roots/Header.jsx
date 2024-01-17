import React from "react";
import {
  HeartFilled,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {


    
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

      <div>
        <div className={styles.iconButton}>
          <Link>
            <HeartFilled
              style={{
                color: "red",
                fontSize: "30px",
              }}
            />
          </Link>

          <Link to="/login">
            <Avatar
              style={{
                backgroundColor: "#28445c",
              }}
              size={30}
              icon={
                <UserOutlined
                  style={{
                    color: "white",
                    fontSize: "20px",
                  }}
                />
              }
            />
          </Link>
      
        </div>

        <input type="text" placeholder="Search..." />
      </div>

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
