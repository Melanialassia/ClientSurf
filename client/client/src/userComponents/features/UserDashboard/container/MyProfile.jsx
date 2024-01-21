//HOOKS
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react"; 
import { Form, Link } from "react-router-dom";
//CONSTANTS
import { myAccount, personalInfo, editLink } from "../utils/constants";
//REDUX
import { getIdUser } from "../../../../redux/actions/action";
//STYLE-SHEETS
import styles from "./MyProfile.module.css";

const MyProfile = () => {

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userData);
 
  const [userById, setUserById] = useState({
    idUser: userData.idUser,
    nameUser: userData.nameUser,
    lastName: userData.lastName,
    emailUser: userData.emailUser
  })
  
  useEffect(() => {
    // Actualiza userById cuando cambia userData
    setUserById({
      idUser: userData.idUser,
      nameUser: userData.nameUser,
      lastName: userData.lastName,
      emailUser: userData.emailUser
    });
  }, [userData]);

  // useEffect(() => {
  //   // Realiza la primera carga de datos al montar el componente
  //   dispatch(getIdUser(userById.idUser));
  // }, [dispatch]);

  return (
    <div className={styles.container}>
      <h3>{myAccount}</h3>
      <h4>{personalInfo}</h4>
      <Link to={"/edit-personalData"}>
        <h4>{editLink}</h4>
      </Link>
    </div>
  );
};

export default MyProfile;
