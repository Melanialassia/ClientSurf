//HOOKS
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react"; 

//COMPONENTS
import EditUserData from "./EditUserData";
//LIBRARYS
import { Card } from 'antd';

//CONSTANTS
import { myAccount, personalInfo, editLink } from "../utils/constants";
//REDUX
import { getIdUser } from "../../../../redux/actions/action";
//STYLE-SHEETS
import styles from "./MyProfile.module.css";

const { Meta } = Card;

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
    <Card
    hoverable
    style={{
      width: 500,
      height: 400,
      margin: "10px",
      padding: "0",
      borderRadius: "2rem",
    }}
    className={styles.firstHeadline}

  >
      <div className={styles.profileInfo}>
        <h3 className={styles.textt}>{myAccount}</h3>
        <h4 className={styles.text}>{personalInfo}</h4>
        <p className={styles.texto}>{userData.nameUser}</p>
        <p className={styles.texto}>{userData.emailUser}</p>
        <button onClick={handleEditClick} className={styles.editButton}>{editLink}</button>
      </div>
  </Card>
      <div className={styles.editSection}>
        {isEditing && <EditUserData onCancel={() => setIsEditing(false)} />}
      </div>

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
