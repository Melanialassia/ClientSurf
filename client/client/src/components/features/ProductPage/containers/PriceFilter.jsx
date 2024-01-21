import React from 'react';
//LIBRARY
import { Slider } from 'antd';
//STYLES
import styles from "./PriceFilter.module.css";

const FilterPrice = ({ setFilter, filter }) => {
  return (
    <div className={styles.price}>
        <h4>Precio: </h4>
      <Slider
       style={{ width: "80%" }}
        range={{ draggableTrack: true }}
        max={700}
        defaultValue={[150, 400]}
        onChange={(values) => setFilter({ ...filter, minPrice: values[0], maxPrice: values[1] })}
      />
    </div>
  );
};

export default FilterPrice;
