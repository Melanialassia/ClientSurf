import React from "react";

const CategoryFilter = ({ allCategorys, handleChange }) => {
  return (
    <select
    name="idCategory"
    onChange={(event) => handleChange(event)}>
      <option value="">TODAS</option>
      {allCategorys.map((c, index) => (
        <option key={index} value={c.idCategory}>
          {c.nameCategory}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;


