//HOOKS
import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//LIBRARYS
import { auth, provider } from "../utils/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { Button, Form, Input } from "antd";
//COMPONENTS
import Home from "../../Home/roots/Home";
//REDUX
import { userLogin, postUser } from "../../../../redux/actions/action";
//CONSTANTS
import {
  registerCustomers,
  textRegisterCustomers,
  loginWithGoogle,
  login,
} from "../utils/constants";
//STYLE-SHEETS
import styles from "./RegisterUsersContainer.module.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "Campo obligatorio!",
  types: {
    email: "No es un email válido!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const RegisterUsersContainer = () => {

  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");

    if (storedEmail) {
      setUserEmail(storedEmail);
      navigate("/");
    }
    console.log(storedEmail);
  }, [navigate]);

  localStorage.clear()

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    dispatch(userLogin(userData));
    navigate("/");
  };

  const handleChange = (name, value) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };


  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {

        const dataUser = {
          library : data.user.providerId,
          nameUser : data.user.providerData[0].displayName,
          emailUser : data.user.providerData[0].email,
          uniqueId : data.user.providerData[0].uid
  
        }

        // Verificar si hay información en providerData
        // const hasProviderData = data.user.providerData && data.user.providerData.length > 0;

  
        // Realizar el dispatch para almacenar el usuario en tu base de datos
        dispatch(postUser(dataUser));
  
        // Resto del código...
      })
      .catch((error) => {
        console.error("Error durante la autenticación con Google:", error);
      });
  };
  // const handleClick = () => {
  //   signInWithPopup(auth, provider).then((data) => {
  //     const email = data.user.email;
  //     setUserEmail(email);
  //     localStorage.setItem("email", email);
  //     navigate("/");
  //   });
  // };
  return (
    <div className={styles.container}>
      <h2>{registerCustomers}</h2>
      <h4>{textRegisterCustomers}</h4>
      <hr className={styles.hr} />
      <Form
        {...layout}
        className={styles.container}
        name="nest-messages"
        onFinish={handleSubmit}
        style={{
          marginTop: "20px",
          marginLeft: "-100px",
          maxWidth: 600,
          fontSize: "200px",
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input onChange={(e) => handleChange("email", e.target.value)} />
        </Form.Item>

        <Form.Item
          name="password"
          label="Contraseña"
          rules={[
            {
              required: true,
              message: "Campo obligatorio!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            {login}
          </Button>
        </Form.Item>
      </Form>

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
