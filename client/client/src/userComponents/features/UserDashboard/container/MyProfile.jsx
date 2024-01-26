import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Button} from 'antd';

// COMPONENTS
import EditUserData from "./EditUserData";

// LIBRARIES
import { myAccount, personalInfo, editLink } from "../utils/constants";

// REDUX
import { getIdUser } from "../../../../redux/actions/action";

// STYLE-SHEETS
import styles from "./MyProfile.module.css";


const MyProfile = () => {
  const dispatch = useDispatch();
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    if (dataUser.idUser) {
      dispatch(getIdUser(dataUser.idUser));
    }
  }, [dispatch, dataUser.idUser]);

  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.profileInfo}>
          <h3 className={styles.textt}>{myAccount}</h3>
          <h4 className={styles.text}>{personalInfo}</h4>
          <p className={styles.texto}>{dataUser.nameUser}</p>
          <p className={styles.texto}>{dataUser.emailUser}</p>
          <Button
            style={{
              width: "100px",
              backgroundColor: "#2d4056",
              color: "white",
              marginLeft: "180px"
            }}
            onClick={handleEditClick}
          >
            {editLink}
          </Button>
        </div>
        {isEditing && <EditUserData onCancel={() => setIsEditing(false)} />}
      </div>
    </div>

  );
};

export default MyProfile;

