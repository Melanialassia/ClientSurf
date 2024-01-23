//Hooks
import React from "react";
//constants
import {
  fifthP,
  secondP,
  thirdP,
  userName,
  buyNumber,
  product,
  newProduct,
  reason,
  fourthP,
  important,
  firstP,
  sixthP,
  seventhP,
  thankYou,
  theWave,
  dni,
} from "../utils/constants";
//style-sheets
import styles from "./Changepolicy.module.css";

const ChangePolicy = () => {
  return (
    <div className={styles.container}>
      <p>{firstP}</p>
      <p>{secondP}</p>
      <p>
        {thirdP}
        <p>{userName}</p>
        <p>{dni}</p>
        <p>{buyNumber}</p>
        <p>{product}</p>
        <p>{newProduct}</p>
        <p>{reason}</p>
      </p>

      <p>{fourthP}</p>
      <p>{important}</p>

      <p>{fifthP}</p>
      <p>{sixthP}</p>
      <p>{seventhP}</p>
      <p>{thankYou}</p>
      <p>{theWave}</p>
    </div>
  );
};

export default ChangePolicy;
