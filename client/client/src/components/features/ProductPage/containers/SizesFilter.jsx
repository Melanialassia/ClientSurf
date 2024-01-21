import React from "react";
//STYLES
import styles from "./FilterCategory.module.css";

const SizeFilter = ({ allSize, handleChange }) => {
  return (
    <div className={styles.filter}>
      <h4>Talle:</h4>
      <select
        name="idSize"
        className={styles.selectStyle}
        onChange={(event) => handleChange(event)}
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
