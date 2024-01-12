import React from "react";
import { Flex } from "antd";
import NavBarButton from "./NavBarButton";

const NavBar = () => {

    // TODO: Actualizar rutas y agregar estilos
  return (
    <div>
      <nav>
        <Flex gap="small" wrap="wrap">
          <NavBarButton link="/home" text="Home"/>
          <NavBarButton link="/home" text="Surfboards"/>
          <NavBarButton link="/home" text="Clothing"/>
          <NavBarButton link="/home" text="Accessories"/>
          <NavBarButton link="/home" text="Services"/>
          <NavBarButton link="/home" text="How to buy"/>
          <NavBarButton link="/home" text="About us"/>
        </Flex>
      </nav>
    </div>
  );
};

export default NavBar;
