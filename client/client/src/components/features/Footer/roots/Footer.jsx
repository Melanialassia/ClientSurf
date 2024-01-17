import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>
        <img
          className={styles.logo}
          src="/assets/images/logoFooter.png"
          alt="Logo"
        />
      </div>

      <div>
        <p>MI CUENTA</p>
        <p>POLITICA DE CAMBIO</p>
        <p>CONTACTO</p>
      </div>
      <a
        href="https://www.instagram.com/laolaurbana.ros/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles.logoIg}
          src="/assets/images/logoIg.png"
          alt="LogoIg"
        />
      </a>
    </div>
  );
};

export default Footer;
