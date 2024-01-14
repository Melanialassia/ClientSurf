import React from "react";
import { auth, provider } from "../utils/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  registerCustomers,
  textRegisterCustomers,
  loginWithGoogle,
  email,
  password,
} from "../utils/constants";
import style from "./RegisterUsersContainer.module.css";
import LoginButton from "../components/LoginButton";
import Home from "../../Home/roots/Home";

const RegisterUsersContainer = () => {
  
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setUserEmail(storedEmail);
      navigate("/");
    }
  }, [navigate]);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      const email = data.user.email;
      setUserEmail(email);
      localStorage.setItem("email", email);
      navigate("/");
    });
  };
  return (
    <div className={style.container}>
      <h2>{registerCustomers}</h2>
      <h4>{textRegisterCustomers}</h4>
      <div className={style["label-input-group"]}>
        <label htmlFor="email">{email}</label>
        <div className={style["input-container"]}>
          <input
            type="email"
            value={userData.email}
            name="email"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={style["label-input-group"]}>
        <label htmlFor="password">{password}</label>
        <div className={style["input-container"]}>
          <input
            type="password"
            value={userData.password}
            name="password"
            onChange={handleChange}
          />
        </div>
      </div>

      <LoginButton />
      {userEmail ? (
        <Link to="/">
          <Home />
        </Link>
      ) : (
        <button onClick={handleClick}>{loginWithGoogle}</button>
      )}
    </div>
  );
};

export default RegisterUsersContainer;
