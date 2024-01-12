import { Link } from "react-router-dom";
import { Button } from "antd";

const NavBarButton = ({link, text}) => {
    return(
        <Link to={link}>
            <Button type="text">{text}</Button>
        </Link>
    )
}

export default NavBarButton;