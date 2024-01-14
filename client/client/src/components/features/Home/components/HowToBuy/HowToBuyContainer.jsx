import React from "react";
import {
  FileSearchOutlined,
  EyeOutlined,
  CreditCardFilled,
  SmileFilled,
} from "@ant-design/icons";
import { Avatar } from "antd";
import styles from "./HowToBuyContainer.module.css"

const HowToBuyContainer = () => {
  return (
    <div className={styles.container}>
      <div>COMO COMPRAR</div>

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

          <p>BUSCA TU PRODUCTO EN LA TIENDA</p>
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

          <p>ELEGÍ TALLA, COLOR O TAMAÑO Y AGREGALO AL CARRITO</p>
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

          <p>COMPLETA TUS DATOS DE ENVIO Y METODO DE PAGO</p>
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

          <p>DISFRUTA</p>
        </div>
      </div>
    </div>
  );
};

export default HowToBuyContainer;
