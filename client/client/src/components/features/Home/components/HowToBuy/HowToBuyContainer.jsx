import React from "react";
import {useEffect} from 'react';
import {
  FileSearchOutlined,
  EyeOutlined,
  CreditCardFilled,
  SmileFilled,
} from "@ant-design/icons";
import { Avatar } from "antd";
import styles from "./HowToBuyContainer.module.css";

const HowToBuyContainer = () => {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", bottom: 0 });
      }
    }
  }, []);

  return (
    <div id="como-comprar" className={styles.container}>
      <div>TE MOSTRAMOS LOS PASOS A SEGUIR, PARA QUE ADQUIERAS DE NUESTROS PRODUCTOS</div>

      <div>
        <div>
          <Avatar
            style={{
              backgroundColor: "#28445c",
            }}
            size={70}
            icon={
              <FileSearchOutlined
                style={{
                  color: "white",
                  fontSize: "40px",
                }}
              />
            }
          />

          <p>BUSCÁ TU PRODUCTO EN LA TIENDA</p>
        </div>

        <div>
          <Avatar
            style={{
              backgroundColor: "#28445c",
            }}
            size={70}
            icon={
              <EyeOutlined
                style={{
                  color: "white",
                  fontSize: "40px",
                }}
              />
            }
          />

          <p>ELEGÍ TALLE, COLOR Y AGREGALO AL CARRITO</p>
        </div>

        <div>
          <Avatar
            style={{
              backgroundColor: "#28445c",
            }}
            size={70}
            icon={
              <CreditCardFilled
                style={{
                  color: "white",
                  fontSize: "40px",
                }}
              />
            }
          />

          <p>COMPLETÁ TUS DATOS DE ENVÍO Y MÉTODO DE PAGO</p>
        </div>

        <div>
          <Avatar
            style={{
              backgroundColor: "#28445c",
            }}
            size={70}
            icon={
              <SmileFilled
                style={{
                  color: "white",
                  fontSize: "40px",
                }}
              />
            }
          />

          <p>¡AHORA DISFRUTÁ DE TU COMPRA!</p>
        </div>
      </div>
    </div>
  );
};

export default HowToBuyContainer;
