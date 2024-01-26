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
        <p className={style.firsttext}>{firstP}</p>
      </div>
      <br />
      <br />
      <img src="/assets/images/comunidad.jpg" alt="" className={style.imageone}/>
      <div >
        <p className={style.secondtext}>{secondP}</p>
      </div>
      <img src="/assets/images/tablaicon.jpg" alt="" className={style.imagetwo}/>
      <br />
      <br />
      <div className={style.columncontainer}>
        <p className={style.thirdtext}>{thirdP}</p>
      </div>
      <img src="/assets/images/personwithboardicon.jpg" alt="" className={style.imagethree}/>
    </div>
  );
};

export default AboutUs;
