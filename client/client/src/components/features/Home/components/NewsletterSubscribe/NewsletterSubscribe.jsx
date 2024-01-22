import React from "react";
import styles from "./NewsletterSubscribe.module.css";
import { Input } from "antd";

const NewsletterSubscribe = () => {

    //HANDLE ALERT
    const handleAlert = () => {
      alert("Estamos trabajando para que puedas recibir las ultimas novedades")
    }

  return (
    <div className={styles.container}>
      <div>
        <p>
          Subscribete ahora para recibir las últimas novedadas y ofertas
          exclusivas!
        </p>

        <div>
          <Input placeholder="Ingresa tu correo" style={{ width: 350 }} />
          <button className={styles.button} onClick={handleAlert}>Subscribirse</button>
        </div>
      </div>

      <div>
        <img
          src="/assets/images/FotoTabla.png"
          alt="Table image"
        />
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
