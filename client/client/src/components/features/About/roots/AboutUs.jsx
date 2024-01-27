//HOOKS
import React from "react";
//CONSTANTS
import { firstP, secondP, thirdP } from "../utils/constants";
//STYLE-SHEETS
import style from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={style.container}>
    <div className={style.columncontainer}>
      <div>
        <p className={style.firsttext}>{firstP}</p>
        <img src="/assets/images/tablaicon.jpg" alt="" className={style.imagetwo} />
        <p className={style.thirdtext}>{thirdP}</p>
      </div>
      <div>
        <img src="/assets/images/comunidad.jpg" alt="" className={style.imageone} />
        <p className={style.secondtext}>{secondP}</p>
        <img src="/assets/images/personwithboardicon.jpg" alt="" className={style.imagethree} />
      </div>
    </div>
  </div>
  );
};

export default AboutUs;
