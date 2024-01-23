//HOOKS
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//LIBRARYS
import { Button, Form, Input, message } from "antd";
//REDUX
import { postUser } from "../../../../redux/actions/action";
//CONstANTS
import { infoLogin, createAccount, text } from "../utils/constants";
//STYLE-SHEETS
import styles from "./FormContainer.module.css";

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

const FormContainer = () => {
  const [userData, setUserData] = useState({
    nameUser: "",
    //lastName: "",
    emailUser: "",
    password: "",
  });

  const dispatch = useDispatch();

  const [isUserCreated, setIsUserCreated] = useState(false);

  const navigate = useNavigate();
   //MESSAGE
   const [messageApi, contextHolder] = message.useMessage();

  const handleChange = (name, value) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      dispatch(postUser(userData));
      setIsUserCreated(true);
      messageApi.open({
        type: "success",
        content: "Usuario creado con éxito!",
      });
      navigate("/login");
    } catch (error) {
      console.error("No se pudo crear la cuenta de usuario con éxito:", error);
    }
  };


  // const handleDisabled = () => {
  //   return Object.values(errors).some((error) => error !== "");
  // };

  return (
    <div className={styles.container}>
      <h2 className={styles.textt}>{infoLogin}</h2>
      <h4 className={styles.text}>{text}</h4>
      <hr className={styles.hr} />

      <Form
        {...layout}
        className={styles.container}
        name="nest-messages"
        onFinish={handleSubmit}
        style={{
          marginTop: "20px",
          marginLeft: "-50px",
          maxWidth: 600,
          fontSize: "200px",
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Nombre"
          rules={[
            {
              required: true,
              pattern: 20
            },
            {
              max: 20,
              message: "Máximo 20 caracteres",
            },
            {
              pattern: /^[A-Za-zÁ-ý\s]+$/,
              message: "Ingrese solo letras",
            },
          ]}
        >
          <Input onChange={(e) => handleChange("nameUser", e.target.value)} />
        </Form.Item>

        {/* <Form.Item
          name={["user", "lastName"]}
          label="Apellido"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input onChange={(e) => handleChange("lastName", e.target.value)} />
        </Form.Item> */}

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
          <Input onChange={(e) => handleChange("emailUser", e.target.value)} />
        </Form.Item>

        <Form.Item
          name="password"
          label="Contraseña"
          rules={[
            {
              required: true,
              message: "Campo obligatorio!",
            },
            {
              min: 6,
              max: 15,
              message: "Debe tener entre 6 y 10 caracteres",
            },
            {
              pattern: /^(?=.*[A-Z])(?=.*\d)/,
              message: "Debe contener al menos una letra mayúscula y un número",
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
            {createAccount}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormContainer;
