import React from "react";
//COMPONENTS
import AddProduct from "../components/AddProducts";
import DeleteProducts from "../components/DeleteProducts";
//STYLE
import styles from "./ProductsManager.module.css"


const ProductsManager = () => {
    return ( 
        <div className={styles.container}>
        <div className={styles.childList}>
          <AddProduct />
        </div>
        <div className={styles.childList}> 
          <DeleteProducts />
        </div>
      </div>
    )
};

export default ProductsManager;