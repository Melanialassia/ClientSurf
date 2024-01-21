import React from "react";
//STYLES
import styles from "./FilterCategory.module.css";

const ColorFilter = ({ allColors, handleChange }) => {
  return (
    <div className={styles.filter}>
      <h4>Color:</h4>
      <select
        name="idColor"
        className={styles.selectStyle}
        onChange={(event) => handleChange(event)}
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
