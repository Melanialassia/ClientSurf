import React from 'react';
//LIBRARY
import { Slider } from 'antd';
//STYLES
import styles from "./PriceFilter.module.css";

const FilterPrice = ({ setFilter, filter }) => {
  const [sliderValues, setSliderValues] = React.useState([150, 400]);

  const handleSliderChange = (values) => {
    setSliderValues(values);
    setFilter({ ...filter, minPrice: values[0], maxPrice: values[1] });
  };

  return (
    <div className={styles.price}>
      <h4>Precio: </h4>
      <Slider
        style={{ width: "80%" }}
        range={{ draggableTrack: true }}
        max={700}
        value={sliderValues}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default FilterPrice;
