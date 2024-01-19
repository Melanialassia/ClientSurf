//HOOKS
import React from "react";
import { Link } from "react-router-dom";
//CONSTANTS
import { myAccount, personalInfo, editLink } from "../utils/constants";
//STYLE-SHEETS
import styles from "./MyProfile.module.css";

const MyProfile = () => {
  return (
    <div className={styles.container}>
      <h1>{myAccount}</h1>
      <h2>{personalInfo}</h2>
      <Link to={"/edit-personalData"}>
        <h4>{editLink}</h4>
      </Link>
    </div>
  );
};

export default MyProfile;
