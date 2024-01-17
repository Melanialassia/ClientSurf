import React from "react";
import { Flex } from "antd";
import NavBarButton from "./NavBarButton";
import style from './NavBar.module.css';



const NavBar = () => {


  return (
    <div className={style.container} >
      <nav >

        <Flex gap="large" wrap="wrap" >


          <NavBarButton link="/" text="HOME" />
          <NavBarButton link="/products" text="PRODUCTOS"/>
          <NavBarButton link="/servicios" text="SERVICIOS"/>    
          <li className={style.li}>
            <a href="#como-comprar">COMO COMPRAR</a>
          </li>
          <NavBarButton link="/aboutus" text="PROPOSITO" />


        </Flex>
      </nav>
    </div>
  );
};

export default NavBar;
