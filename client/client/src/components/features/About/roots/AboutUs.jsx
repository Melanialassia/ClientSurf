//HOOKS
import React from "react";
import { useEffect } from "react";
//CONSTANTS
import { firstP, secondP, thirdP } from "../utils/constants";
//STYLE-SHEETS
import style from "./AboutUs.module.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);
  return (
    <div className={style.container}>
    <div className={style.columncontainer}>
      <div >
        <p className={style.firsttext} data-aos="fade-down">{firstP}</p>
        <img src="/assets/images/tablaicon.jpg" alt="" className={style.imagetwo} data-aos="fade-down" />
        <p className={style.thirdtext} data-aos="fade-down">{thirdP}</p>
      </div>
      <div >
        <img src="/assets/images/comunidad.jpg" alt="" className={style.imageone} data-aos="fade-down"/>
        <p className={style.secondtext} data-aos="fade-down">{secondP}</p>
        <img src="/assets/images/personwithboardicon.jpg" alt="" className={style.imagethree} data-aos="fade-down"/>
      </div>
    </div>
  </div>
  );
};

export default AboutUs;
