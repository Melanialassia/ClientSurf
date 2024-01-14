import { Link } from "react-router-dom";
import { Button } from "antd";

const NavBarButton = ({ link, text }) => {
  return (
    <Link to={link} style={{
      color: "#30445c"
    }}>

      {text}
    </Link>
  );
};

export default NavBarButton;
