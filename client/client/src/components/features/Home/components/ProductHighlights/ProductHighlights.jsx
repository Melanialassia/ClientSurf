import { Divider } from "antd";
import React from "react";
import styles from "./ProductHighlights.module.css";

const ProductHighlights = () => {
  return (
    <div className={styles.container}>
      <div>
        <p>PRODUCTOS DESTACADOS</p>
      </div>

      <div>
        <img
          src="https://contents.mediadecathlon.com/p1740855/k$3e879c4ba2c156a37ee33d580cd5419b/tabla-de-surf-de-espuma-900-6-se-entrega-con-3-quillas.jpg?format=auto&quality=40&f=800x800"
          alt="Imagen 1"
        />

        <img
          src="https://contents.mediadecathlon.com/p1758423/k$67bbeda9f04f2087ee325b8f841778cc/tabla-evolutiva-de-espuma-con-1-leash-y-3-quillas-surf-500-7-.jpg?format=auto&quality=40&f=452x452"
          alt="Imagen 2"
        />

        <img
          src="https://m.media-amazon.com/images/I/613KIO7ThDL._AC_SX569_.jpg"
          alt="Imagen 3"
        />

        <img
          src="https://http2.mlstatic.com/D_NQ_NP_916474-CBT72192850133_102023-O.webp"
          alt="Imagen 4"
        />

        <img
          src="https://www.aquadelta.com.ar/img/articulos/cera_antideslizante_para_tablas_de_surf_sexwax_imagen1.jpg"
          alt="Imagen 5"
        />
      </div>
    </div>
  );
};

export default ProductHighlights;