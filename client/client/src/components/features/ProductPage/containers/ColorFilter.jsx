import React from "react";
//HOOKS
import { useState, useEffect } from "react";
//STYLES
import styles from "./FilterCategory.module.css";

const ColorFilter = ({ allColors, handleChange, selectedValue }) => {
  const [currentValue, setCurrentValue] = useState(selectedValue);

  useEffect(() => {
    setCurrentValue(selectedValue);
  }, [selectedValue]);

  const handleColorChange = (event) => {
    const selectedValue = event.target.value;
    setCurrentValue(selectedValue);
    handleChange(event);
  };

  return (
    <div className={styles.filter}>
      <h4>Color:</h4>
      <select
        name="idColor"
        className={styles.selectStyle}
        onChange={(event) => handleColorChange(event)}
        value={currentValue}
      >
        <option value="">TODAS</option>
        {allColors.map((c, index) => (
          <option key={index} value={c.idColor} className={styles.optionStyle}>
            {c.nameColor}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ColorFilter;
