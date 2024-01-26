//HOOKS
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//REDUX
import { logOut, getIdUser } from "../../../../redux/actions/action";
//LIBRARY
import { Menu } from "antd";
import { UserOutlined } from '@ant-design/icons';
//STYLE-SHEETS
import styles from './ProfileMenu.module.css'

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
};


const ProfileMenu = () => {
  
  const dispatch = useDispatch();
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));

  
  const navigate = useNavigate();
  
  const items = [
      getItem(`Hola ${dataUser.nameUser}!`, "sub1", [
      getItem("Mi cuenta", "1"),
      getItem("Mis Favoritos", "2"),
      getItem("Mis compras", "3"),
      getItem("Cerrar sesión", "4"),
    ]),
  ];
    useEffect(() => {
    if (dataUser.idUser) {
      dispatch(getIdUser(dataUser.idUser));
    }
  }, [dispatch, dataUser.idUser]);

  const handleLogOut = () => {
    localStorage.removeItem('access');
    localStorage.setItem('logedUser', JSON.stringify(false));
    localStorage.removeItem('idLevel');
    dispatch(logOut());
    navigate('/login');
  }

  const handleMenuClick = (event) => {
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
      <UserOutlined 
      style={{ fontSize: '24px', marginLeft: "-20px", color: "#2d4056" }}
      />
      <Menu
        className={styles['ant-menu']}
        style={{
          width: 200,
          height: 50,
          marginTop: "-34px",
          marginBottom: "-10px",
          borderRadius: "20px",
          backgroundColor: "#e2dcd1",
          color: "#2d4056"
        }}
        selectedKeys={[]} 
        defaultOpenKeys={["sub1"]}
        items={items}
        onSelect={handleMenuClick}
        
      />
    </div>
  );
};

export default ProfileMenu;
