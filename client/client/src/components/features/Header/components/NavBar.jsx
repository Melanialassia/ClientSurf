import React from "react";
import { Flex } from "antd";
import NavBarButton from "./NavBarButton";
import style from './NavBar.module.css';


const NavBar = () => {

    // TODO: Actualizar rutas y agregar estilos
  return (
    <div className={style.container} >
      <nav >
        <Flex gap="small" wrap="wrap" >


          <NavBarButton link="/" text="HOME" />
          <NavBarButton link="/products" text="PRODUCTOS"/>   
          <NavBarButton link='/#como-comprar' text="COMO COMPRAR"/>
          <NavBarButton link="/aboutus" text="QUIENES SOMOS" />


        </Flex>
      </nav>
    </div>
  );
};

export default NavBar;
