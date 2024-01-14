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
    idLevel: 2,
    nameUser: "",
    user: "",
    email: "",
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
      userData.name !== "" ||
      userData.lastName !== "" ||
      userData.email !== "" ||
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
      alert("Usuario creado con éxito"); //este alert está mal.
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
          <label htmlFor="name" className={style["label-input-group"]}>
            idLevel
          </label>
        </div>

        <div className={style["input-container"]}>
          <input
            type="text"
            value={userData.idLevel}
            name="idLevel"
            onChange={handleChange}
          />
          {/* {errors.name !== "" && <p>{errors.name}</p>} */}
        </div>

        <div>
          <label htmlFor="name" className={style["label-input-group"]}>
            {name}
          </label>
        </div>

        <div className={style["input-container"]}>
          <input
            type="text"
            value={userData.nameUser}
            name="nameUser"
            onChange={handleChange}
          />
          {/* {errors.name !== "" && <p>{errors.name}</p>} */}
        </div>

        <div>
          <label htmlFor="lastName" className={style["label-input-group"]}>
            {lastName}
          </label>
        </div>
        <div className={style["input-container"]}>
          <input
            type="text"
            value={userData.user}
            name="user"
            onChange={handleChange}
          />
          {/* {errors.lastName !== "" && <p>{errors.lastName}</p>} */}
        </div>

        <div>
          <label htmlFor="email" className={style["label-input-group"]}>
            {email}
          </label>
        </div>
        <div className={style["input-container"]}>
          <input
            type="email"
            value={userData.email}
            name="email"
            onChange={handleChange}
          />
          {errors.email !== "" && <p>{errors.email}</p>}
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

        <button type="submit">Crear mi cuenta</button>
      </form>
    </div>
  );
};

export default FormContainer;
