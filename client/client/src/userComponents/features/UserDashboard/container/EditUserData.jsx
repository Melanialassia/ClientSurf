//HOOKS
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
//LIBRARYS
import { Button, Form, Input } from "antd";
//CONSTANTS
import { saveChanges, editPersonalData } from "../utils/constants";
//STYLE-SHEETS
import styles from "./EditUserData.module.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values) => {
  console.log(values);
};

const EditUserData = () => {

  const userData = useSelector((state)=> state.userData);
  console.log("LLegue",userData);

  const dispatch = useDispatch();

  const [dataUser, setDataUser] = useState({
      idUser: userData.idUser,
      nameUser: userData.nameUser,
      lastName: userData.lastName,
      emailUser: userData.emailUser
  });

  useEffect(() => {

    setDataUser({
      idUser: userData.idUser,
      nameUser: userData.nameUser,
      lastName: userData.lastName,
      emailUser: userData.emailUser,
    });
  }, [userData]);

  const handleSubmit = () => {
    dispatch();
  ;
  };
console.log("hola", userData.nameUser);
  return (
    <div>
      <h4 className={styles.text}>{editPersonalData}</h4>
      <Form
        initialValues={{
          user: {
            nameUser: userData.nameUser,
            lastName: userData.lastName,
            emailUser: userData.emailUser
          },
        }}
        {...layout}
        className={styles.container}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          marginTop: "-80px",
          maxWidth: 600,
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "nameUser"]}
          label="Nombre"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input  />
        </Form.Item>

        <Form.Item
          name={["user", "lastName"]}
          label="Apellido"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["user", "emailUser"]}
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Contraseña"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            {saveChanges}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditUserData;
