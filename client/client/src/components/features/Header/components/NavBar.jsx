import React from "react";
import { Flex } from "antd";
import NavBarButton from "./NavBarButton";

const NavBar = () => {

    // TODO: Actualizar rutas y agregar estilos
  return (
    <div>
      <nav>
        <Flex gap="small" wrap="wrap">
          <NavBarButton link="/" text="Home"/>
          <NavBarButton link="/products" text="Productos"/>
          <NavBarButton link="/" text="Como comprar"/>
        </Flex>
      </nav>
    </div>
  );
};

export default NavBar;
