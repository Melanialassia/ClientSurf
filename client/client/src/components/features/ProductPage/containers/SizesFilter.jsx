import React from "react";
//HOOKS
import { useState, useEffect } from "react";
//STYLES
import styles from "./FilterCategory.module.css";

const SizeFilter = ({ allSize, handleChange, selectedValue }) => {
  const [currentValue, setCurrentValue] = useState(selectedValue);

  useEffect(() => {
    setCurrentValue(selectedValue);
  }, [selectedValue]);

  const handleSizeChange = (event) => {
    const selectedValue = event.target.value;
    setCurrentValue(selectedValue);
    handleChange(event);
  };

  return (
    <div className={styles.filter}>
      <h4>Talle:</h4>
      <select
        name="idSize"
        className={styles.selectStyle}
        onChange={(event) => handleSizeChange(event)}
        value={currentValue}
      >
        <option value="">TODAS</option>
        {allSize.map((c, index) => (
          <option key={index} value={c.idSize} className={styles.optionStyle}>
            {c.nameSize}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizeFilter;
