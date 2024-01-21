import React from "react";
//STYLES
import styles from "./FilterCategory.module.css";

const CategoryFilter = ({ allCategorys, handleChange }) => {
  return (
    <div className={styles.filter}>
      <h4>Categoria:</h4>
      <select
        name="idCategory"
        className={styles.selectStyle}
        onChange={(event) => handleChange(event)}
      >
        <option value="">TODAS</option>
        {allCategorys.map((c, index) => (
          <option key={index} value={c.idCategory} className={styles.optionStyle}>
            {c.nameCategory}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
