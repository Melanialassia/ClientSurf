import React from "react";
import { Link } from "react-router-dom";
import { InstagramFilled, FacebookFilled } from "@ant-design/icons";

const Footer = () => {
  return (
    <div>
      <div>
        <img src="/assets/images/LaOlaUrbanaLogo.png" alt="Logo" />
      </div>

      <div>
        <p>Politica de cambio</p>
        <p>Contacto</p>
      </div>

      <div>
        <Link>
          <FacebookFilled />
        </Link>

        <Link>
          <InstagramFilled />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
