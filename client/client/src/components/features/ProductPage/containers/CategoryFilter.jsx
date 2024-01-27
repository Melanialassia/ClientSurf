import React from "react";
//HOOKS
import { useState, useEffect } from "react";
//STYLES
import styles from "./FilterCategory.module.css";

const CategoryFilter = ({ allCategorys, handleChange, selectedValue }) => {
  const [currentValue, setCurrentValue] = useState(selectedValue);

  useEffect(() => {
    setCurrentValue(selectedValue);
  }, [selectedValue]);

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setCurrentValue(selectedValue);
    handleChange(event);
  };

  return (
    <div className={styles.filter}>
      <h4>Categoria:</h4>
      <select
        name="idCategory"
        className={styles.selectStyle}
        onChange={(event) => handleCategoryChange(event)}
        value={currentValue}
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
