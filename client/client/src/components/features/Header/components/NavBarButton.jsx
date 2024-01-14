import { Link } from "react-router-dom";
import { Button } from "antd";

const NavBarButton = ({ link, text }) => {
  return (
    <Link to={link}>
      {/* <Button
        style={{
          color: "#2D4056",
          fontSize:"x-large",
          marginTop: "-10px",
        }}
        type="text"
      >
        
      </Button> */}
      {text}
    </Link>
  );
};

export default NavBarButton;
