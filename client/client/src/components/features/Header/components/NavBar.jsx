import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Flex } from "antd";
import style from "./NavBar.module.css";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <nav>
        <Flex gap="large" wrap="wrap">
          <ul className={style.container}>
            <li className={pathname === "/" ? style.active : ""}>
              <Link to="/">HOME</Link>
            </li>
            <li className={pathname === "/products" ? style.active : ""}>
              <Link to="/products">PRODUCTOS</Link>
            </li>
            <li className={pathname === "/services" ? style.active : ""}>
              <Link to="/services">SERVICOS</Link>
            </li>
            <li>
              <a href="/#como-comprar">COMO COMPRAR</a>
            </li>
            <li className={pathname === "/aboutus" ? style.active : ""}>
              <Link to="/aboutus">PROPÓSITO</Link>
            </li>
          </ul>
        </Flex>
      </nav>
    </div>
  );
};

export default NavBar;
