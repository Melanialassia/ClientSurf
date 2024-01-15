import React from "react";
import { useState } from "react";
import { Button, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};


const FormForRegisterUsers = () => {

  const [access, setAccess] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleDisabled = () => {
    return Object.values(errors).some((error) => error !== "");
  };

  return (
    <Form
      onSubmit={handleSubmit}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 400,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Por favor, ingrese su dirección de correo electrónico",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      ></Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="submit" disabled={handleDisabled()}>
          Iniciar sesión
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormForRegisterUsers;
