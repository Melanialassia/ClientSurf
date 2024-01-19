//hooks
import React from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
//actions
import { logOut } from "../../../../redux/actions/action";
//librarys
import { Menu } from "antd";
//style-sheets
import styles from './ProfileMenu.module.css'

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
};

const items = [
    getItem("MI PERFIL", "sub1", [
    getItem("Mi cuenta", "1"),
    getItem("Mis Favoritos", "2"),
    getItem("Mis compras", "3"),
    getItem("Cerrar sesión", "4"),
  ]),
];

const ProfileMenu = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/login')
  }

  const handleMenuClick = (event) => {
    console.log("click ", event);
    switch (event.key) {
      case "1":
        navigate("/my-account");
        break;
      case "2":
        navigate("/favorites");
        break;
      case "3":
        navigate("/my-buys");
        break;
      case "4":
        handleLogOut();
        break;
      default:
        break;
    }
  };
  return (
    <div >
      <Menu
        className={styles['ant-menu']}
        style={{
          width: 180,
          height: 50,
          marginTop: "0px",
          marginRight: "80px",
          borderRadius: "20px"
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        items={items}
        onSelect={handleMenuClick}
      />
    </div>
  );
};

export default ProfileMenu;
