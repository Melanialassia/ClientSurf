import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { name, lastName, email, password, infoLogin } from "../utils/constants";
import { postUser } from "../../../../redux/actions/action";
import validation from "../utils/helpers/validation";
import style from "./FormContainer.module.css";

const FormContainer = () => {
  const [userData, setUserData] = useState({
    nameUser: "",
    lastName: "",
    emailUser: "",
    password: "",
  });

  const dispatch = useDispatch();

  const [isUserCreated, setIsUserCreated] = useState(false);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (
      userData.nameUser !== "" ||
      userData.lastName !== "" ||
      userData.emailUser !== "" ||
      userData.password !== ""
    ) {
      setErrors(validation(userData));
    }
  }, [userData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(postUser(userData));
      setIsUserCreated(true);


      navigate("/login");
    } catch (error) {
      console.error("No se pudo crear la cuenta de usuario con éxito:", error);
    }
  };

  // const handleDisabled = () => {
  //   return Object.values(errors).some((error) => error !== "");
  // };

  return (
    <div className={style.container}>
      <h3>{infoLogin}</h3>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="nameUser" className={style["label-input-group"]}>
            {name}
          </label>
        </div>

        <div className={style["input-container"]}>
          <input
            type="nameUser"
            value={userData.nameUser}
            name="nameUser"
            onChange={handleChange}
          />
          {errors.nameUser !== "" && <p>{errors.nameUser}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className={style["label-input-group"]}>
            {lastName}
          </label>
        </div>
        <div className={style["input-container"]}>
          <input
            type="lastName"
            value={userData.lastName}
            name="lastName"
            onChange={handleChange}
          />
          {errors.lastName !== "" && <p>{errors.lastName}</p>}
        </div>

        <div>
          <label htmlFor="emailUser" className={style["label-input-group"]}>
            {email}
          </label>
        </div>
        <div className={style["input-container"]}>
          <input
            type="emailUser"
            value={userData.emailUser}
            name="emailUser"
            onChange={handleChange}
          />
          {errors.emailUser !== "" && <p>{errors.emailUser}</p>}
        </div>

        <div>
          <label htmlFor="password" className={style["label-input-group"]}>
            {password}
          </label>
        </div>
        <div className={style["input-container"]}>
          <input
            type="password"
            value={userData.password}
            name="password"
            onChange={handleChange}
          />
          {errors.password !== "" && <p>{errors.password}</p>}
        </div>
        <button type="submit" >Crear mi cuenta</button>
      </form>
    </div>
  );
};

export default FormContainer;
