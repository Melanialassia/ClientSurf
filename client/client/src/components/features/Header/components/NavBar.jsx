import React from "react";
import { useLocation } from "react-router-dom";
import { Flex } from "antd";
import NavBarButton from "./NavBarButton";
import style from "./NavBar.module.css";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.container}>
      <nav>
        <Flex gap="large" wrap="wrap">
          <NavBarButton link="/" text="HOME" />
          <NavBarButton link="/products" text="PRODUCTOS" />
          <NavBarButton link="/services" text="SERVICIOS" />
          {pathname === "/" ? (
            <li className={style.li}>
              <a href="#como-comprar">COMO COMPRAR</a>
            </li>
          ) : (
            <NavBarButton link="/" hash="#como-comprar" text="COMO COMPRAR" />
          )}
          <NavBarButton link="/aboutus" text="PROPÓSITO" />
        </Flex>
      </nav>
    </div>
  );
};

export default NavBar;
