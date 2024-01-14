import React from "react";
import { MailOutlined } from "@ant-design/icons";
import styles from "./NewsletterSubscribe.module.css";
import { Input } from "antd";

const NewsletterSubscribe = () => {
  return (
    <div className={styles.container}>
      <div>
        <p>
          Subscribete ahora para recibir las últimas novedadas y ofertas
          exclusivas!
        </p>

        <div>
          <Input placeholder="Ingresa tu correo" style={{ width: 350 }} />
          <button>Subscribirse</button>
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
