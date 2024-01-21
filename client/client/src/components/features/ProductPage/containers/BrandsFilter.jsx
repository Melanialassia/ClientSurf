import React from "react";
//STYLES
import styles from "./FilterCategory.module.css";

const BrandsFilter = ({ allBrands, handleChange }) => {
  return (
    <div className={styles.filter}>
      <h4>Marca:</h4>
      <select
        name="idBrand"
        className={styles.selectStyle}
        onChange={(event) => handleChange(event)}
      >
        <option value="">TODAS</option>
        {allBrands.map((c, index) => (
          <option key={index} value={c.idBrand} className={styles.optionStyle}>
            {c.brandName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BrandsFilter;
