import React from "react";
import { Link } from "react-router-dom";
import { newCustomers, textnewCustomers } from "../utils/constants";
import style from "./NewUserContainer.module.css";
import CreateUserButton from "../components/CreateUserButton";

const NewUserContainer = () => {
  return (
    <div className={style.container}>
      <h2>{newCustomers}</h2>
      <h4>{textnewCustomers}</h4>
      <Link to={"/account/create"}>
        <CreateUserButton />
      </Link>
    </div>
  );
};

export default NewUserContainer;
