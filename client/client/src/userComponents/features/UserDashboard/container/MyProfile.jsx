//HOOKS
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
//COMPONENTS
import EditUserData from "./EditUserData";
//CONSTANTS
import { myAccount, personalInfo, editLink } from "../utils/constants";
//REDUX
import { getIdUser } from "../../../../redux/actions/action";
//STYLE-SHEETS
import styles from "./MyProfile.module.css";

const MyProfile = () => {

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userData);

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    if (userData.idUser) {
      dispatch(getIdUser(userData.idUser));
    }
  }, [dispatch, userData.idUser]);

  return (

    <div className={styles.container}>
    <div className={styles.profileInfo}>
      <h3>{myAccount}</h3>
      <h4>{personalInfo}</h4>
      <p>Nome: {userData.nameUser}</p>
      <p>Email: {userData.emailUser}</p>
      <button onClick={handleEditClick}>{editLink}</button>
    </div>
    <div className={styles.editSection}>
      {isEditing && <EditUserData onCancel={() => setIsEditing(false)} />}
    </div>
  </div>
  );
};

export default MyProfile;
