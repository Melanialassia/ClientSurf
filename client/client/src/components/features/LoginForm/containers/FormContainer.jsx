import React from "react";
import { useState, useEffect } from "react";
import { name, lastName, email, password } from "../utils/constants";
import SaveButton from "../components/SaveButton";
import validation from "../utils/helpers/validation";

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

  const handleDisable = () => {
    let hasErrors = false;

    for (let err in errors) {
      if (errors[err] !== "") {
        hasErrors = true;
        break;
      }
    }
    return hasErrors;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">{name}</label>
        <input
          type="name"
          value={userData.name}
          name="name"
          onChange={handleChange}
        />
        {errors.name !== "" && <p>{errors.name}</p>}

        <label htmlFor="lastName">{lastName}</label>
        <input
          type="lastName"
          value={userData.lastName}
          name="lastName"
          onChange={handleChange}
        />
        {errors.lastName !== "" && <p>{errors.lastName}</p>}

        <label htmlFor="email">{email}</label>
        <input
          type="email"
          value={userData.email}
          name="email"
          onChange={handleChange}
        />
        {errors.email !== "" && <p>{errors.email}</p>}

        <label htmlFor="password">{password}</label>
        <input
          type="password"
          value={userData.password}
          name="password"
          onChange={handleChange}
        />
        {errors.password !== "" && <p>{errors.password}</p>}

        <SaveButton type='submit' disable={handleDisable()} />
      </form>
    </div>
  );
};

export default FormContainer;
