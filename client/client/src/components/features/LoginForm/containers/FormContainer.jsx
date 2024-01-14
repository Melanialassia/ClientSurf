import React from "react";
import { useState, useEffect } from "react";
import { name, lastName, email, password, infoLogin } from "../utils/constants";
import validation from "../utils/helpers/validation";
import style from "./FormContainer.module.css";

const FormContainer = () => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

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

  const handleSubmit = (event) => {
    event.preventDefault(), login(userData);
  };

  const handleDisabled = () => {
    return Object.values(errors).some((error) => error !== "");
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <h3>{infoLogin}</h3>
        <div>
          <label htmlFor="name" className={style["label-input-group"]}>
            {name}
          </label>
        </div>

        <div className={style["input-container"]}>
          <input
            type="text"
            value={userData.name}
            name="name"
            onChange={handleChange}
          />
          {errors.name !== "" && <p>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="lastName" className={style["label-input-group"]}>
            {lastName}
          </label>
        </div>
        <div className={style["input-container"]}>
          <input
            type="text"
            value={userData.lastName}
            name="lastName"
            onChange={handleChange}
          />
          {errors.lastName !== "" && <p>{errors.lastName}</p>}
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

        <button type="submit" disabled={handleDisabled()}>
          Crear mi cuenta
        </button>
      </form>
    </div>
  );
};

export default FormContainer;
