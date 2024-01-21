//HOOKS
import React from "react";
//CONSTANTS
import {
  frequentlyQuestions,
  howCanIBuy,
  isSimple,
  nameAndLastName,
  dni,
  payment,
  chooseProduct,
  choosingCharac,
  paymentMethod,
  done,
  paymentMethodTwo,
  firstMethod,
  timeOfProduct,
  finaly,
  days
} from "../utils/constants";
//STYLE-SHEETS
import styles from './Faq.module.css';

const Faq = () => {
  return (
    <div className={styles.container}>
      <p>{frequentlyQuestions}</p>
      <p>{howCanIBuy}</p>
      <p>{isSimple}</p>
      <p>{nameAndLastName}</p>
      <p>{dni}</p>
      <p>{payment}</p>
      <p>{chooseProduct}</p>
      <p>{choosingCharac}</p>
      <p>{paymentMethod}</p>
      <p>{done}</p>
      <p>{paymentMethodTwo}</p>
      <p>{firstMethod}</p>
      <p>{timeOfProduct}</p>
      <p>{days}</p>
      <p>{finaly}</p>
    </div>
  );
};

export default Faq;
