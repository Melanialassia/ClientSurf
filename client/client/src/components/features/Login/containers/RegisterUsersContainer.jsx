import React from "react";
import { auth, provider } from "../utils/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { registerCustomers, textRegisterCustomers, loginWithGoogle } from "../utils/constants";
import LoginButton from "../components/LoginButton";
import Home from "../../Home/roots/Home";



const RegisterUsersContainer = () => {

  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setUserEmail(storedEmail);
      navigate('/'); // Redirige si el usuario ya está autenticado
    }
  }, [navigate]);

  const handleClick = () =>{
    signInWithPopup(auth, provider).then((data) => {
      const email = data.user.email;
      setUserEmail(email);
      localStorage.setItem('email', email);
      navigate('/'); // Redirige después de iniciar sesión con Google
    });
  };
  return (
    <div>
      <h2>{registerCustomers}</h2>
      <h4>{textRegisterCustomers}</h4>
      <LoginButton />
      {userEmail ? (
        <Link to="/"> {/* Puedes usar un Link en lugar de Redirect */}
          <Home />
        </Link>
      ) : (
        <button onClick={handleClick}>{loginWithGoogle}</button>
      )}
    </div>
  );
};

export default RegisterUsersContainer;
