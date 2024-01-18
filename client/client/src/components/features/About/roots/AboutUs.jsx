import React from "react";
import style from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={style.container}>
      <div className={style.columncontainer}>
      <p>
        La Ola Urbana nace a partir del deseo de fomentar y enriquecer la
        experiencia del Surfing a la comunidad de Rosario y alrededores.. 🤙🤙
        </p>
      </div>

      <br />
      <br />

      <div className={style.columncontainer}>
        <p>
        Por eso, nuestro compromiso está enfocado en equiparte y asesorarte,
        pero también en facilitar y resolver todo lo que necesitas al momento de
        emprender ruta hacia el mar. 
        </p> 
      </div>

      <br />
      <br />
      
      <div className={style.columncontainer}>
        <p>
        El mar está lejos, pero nosotros te
        acercamos. Somos la Ola Urbana
      </p>
      </div>
    </div>
  );
};

export default AboutUs;
