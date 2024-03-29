//HOOKS
import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
//ACTIONS
import { logOut, getIdUser } from "../../../../redux/actions/action";
//LIBRARY
import { Menu } from "antd";
import { UserOutlined } from '@ant-design/icons';
//STYLE-SHEETS
import styles from './ProfileMenu.module.css';

function getItem(label, key, children, type) {
    return {
      key,
      children,
      label,
      type,
    };
  };
  
  
  const ProfileMenuAdmin = () => {
    
    const dispatch = useDispatch();
    const dataUser = JSON.parse(localStorage.getItem("dataUser"));
    const items = [
        getItem(`Hola, ${dataUser.nameUser}`, "sub1", [
        getItem("Mi cuenta", "1"),
        getItem("Dashboard", "2"),
        getItem("Cerrar sesión", "3")
      ]),
    ];

  const navigate = useNavigate();

  useEffect(() => {
    if (dataUser.idUser) {
      dispatch(getIdUser(dataUser.idUser));
    }
  }, [dispatch, dataUser.idUser]);

  const handleLogOut = () => {
    localStorage.removeItem('access');
    localStorage.setItem('logedUser', JSON.stringify(false));
    dispatch(logOut());
    navigate('/login');
  }

  const handleMenuClick = (event) => {
    switch (event.key) {
      case "1":
        navigate("/my-account");
        break;
      case "2":
        navigate("/admin-dashboard");
        break;
      case "3":
        handleLogOut();
        break;
      default:
        break;
    }
  };
  return (
    <div >
            <UserOutlined 
      style={{ fontSize: '24px', marginLeft: "-180px", color: "#2d4056" }}
      />
    <Menu
      className={styles['ant-menu']}
      style={{
        width: 230,
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
      mode= "inline"
      onSelect={handleMenuClick}
    />
  </div>
  );
};

export default ProfileMenuAdmin;