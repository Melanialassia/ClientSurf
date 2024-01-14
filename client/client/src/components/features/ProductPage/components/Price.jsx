import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProductsByPrice } from "../../../../redux/actions/action";
import "./Price.module.css";

const PriceFilter = () => {
    const dispatch = useDispatch();
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(600);

    const handlePriceChange = () => {
        // Cuando el usuario suelta el control deslizante, dispara la acción de filtrado
        dispatch(filterProductsByPrice(minPrice, maxPrice));
      };
  
   return (
    <div>
      <div>
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={minPrice}
          onChange={(event) => setMinPrice(event.target.value)}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <input
          type="range"
          min={0}
          max={600}
          step={1}
          value={maxPrice}
          onChange={(event) => setMaxPrice(event.target.value)}
        />
        <span>${maxPrice}</span>
      </div>
      <button onClick={handlePriceChange}>Filtrar por precio</button>
    </div>
  );
};
  
  export default PriceFilter;