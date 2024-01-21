import React from "react";

const ColorFilter = ({ allColors, handleChange }) => {
  return (
    <select
    name="idColor"
    onChange={(event) => handleChange(event)}
    >
      <option value="">TODAS</option>
      {allColors.map((c, index) => (
        <option key={index} value={c.idColor}>
          {c.nameColor}
        </option>
      ))}
    </select>
  );
};

export default ColorFilter;