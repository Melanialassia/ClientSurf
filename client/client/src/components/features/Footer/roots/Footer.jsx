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

      <div className={styles.policies}>
        <p>MI CUENTA</p>
        </div>
        <div className={styles.policies}>
        <p>POLÍTICA DE CAMBIO</p>
        </div>
        <div className={styles.policies}>
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
