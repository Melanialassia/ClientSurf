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

      <div className={styles.policies}>
        <p>Politica de cambio</p>
        <p>Contacto</p>
      </div>

      <div className={styles.socialMedia}>
        <Link>
          <InstagramFilled
            style={{
              color: "purple",
              fontSize: "50px",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
