import React from "react";
//HOOKS
import { useState, useEffect } from "react";
//STYLES
import styles from "./FilterCategory.module.css";

const BrandsFilter = ({ allBrands, handleChange, selectedValue }) => {
  const [currentValue, setCurrentValue] = useState(selectedValue);

  useEffect(() => {
    setCurrentValue(selectedValue);
  }, [selectedValue]);

  const handleBrandChange = (event) => {
    const selectedValue = event.target.value;
    setCurrentValue(selectedValue);
    handleChange(event);
  };

  return (
    <div className={styles.filter}>
      <h4>Marca:</h4>
      <select
        name="idBrand"
        className={styles.selectStyle}
        onChange={(event) => handleBrandChange(event)}
        value={currentValue}
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
