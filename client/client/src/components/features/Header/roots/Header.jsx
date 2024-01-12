import React from "react";
import {
  HeartFilled,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <img src="/assets/images/LaOlaUrbanaLogo.png" alt="Logo" />
      </div>

      <div>
        <NavBar />
      </div>

      <div>
        <div>
          <Link>
            <HeartFilled />
          </Link>

          <Link to="/login">
            <UserOutlined />
          </Link>
        </div>

        <input type="text" placeholder="Search..." />
      </div>

      <div>
        <Link to="/Home">
          <ShoppingCartOutlined />
        </Link>
      </div>
    </div>
  );
};

export default Header;
