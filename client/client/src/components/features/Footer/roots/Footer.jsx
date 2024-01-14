import React from "react";
import { Link } from "react-router-dom";
import { InstagramFilled } from "@ant-design/icons";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>
        <img
          className={styles.logo}
          src="/assets/images/LaOlaUrbanaLogo.png"
          alt="Logo"
        />
      </div>

      <div >
        <p>MI CUENTA</p>
        <p>POLITICA DE CAMBIO</p>
        <p>CONTACTO</p>
      </div>

      <div className={styles.socialMedia}>
        <a href="https://www.instagram.com/laolaurbana.ros/" target="_blank" rel="noopener noreferrer">
          <InstagramFilled
            style={{
              color: "purple",
              fontSize: "50px",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
