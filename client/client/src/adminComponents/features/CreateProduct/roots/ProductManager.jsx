import React from "react";
import styles from "./ProductManager.module.css";
import CreateProducts from "./CreateProducts";
import ProductList from "../components/ProductList";

const ProductManager = () => {
  return (
    <div className={styles.container}>
      <div className={styles.childList}>
        <ProductList />
      </div>
      <div className={styles.childCard}>
        <CreateProducts/>
      </div>
    </div>
  );
};

export default ProductManager;
