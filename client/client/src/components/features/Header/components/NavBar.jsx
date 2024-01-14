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
          <NavBarButton link="/" text="Home" />
          <NavBarButton link="/products" text="Productos"/>
          <NavBarButton link="/" text="Como comprar"/>
          <NavBarButton link="/" text="Quienes somos" />
        </Flex>
      </nav>
    </div>
  );
};

export default NavBar;
