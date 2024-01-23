import React from "react";
import { Card, Space, Button, message, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const CreateColor = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  const [newColor, setNewColor] = useState({
    name: "",
  });

  const handleChange = (name, value) => {
    setNewColor({
      ...newColor,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {

      //Esto no creo que deba ser un objeto.
      const obj = {
        name: newColor.name,
      };

      dispatch(postCategory(obj));
      messageApi.open({
        type: "success",
        content: "Color creado con éxito!",
      });

      setNewColor({
        name: "",
      });

      form.resetFields();
    } catch (error) {
      console.error("Error al crear el color:", error);
    }
  };

  return (
    <Space direction="vertical" size={16}>
      {contextHolder} {/* //TODO: Verificar que esto funcione */}
      <Card title="Crea un nuevo color" style={{ width: 300 }}>
        <Form onFinish={handleSubmit}>
          <Form.Item
            label="Nombre"
            name="name"
            rules={[
              { required: true, message: "Campo obligatorio!." },
              {
                /** //TODO: Falta editar las reglas **/
                max: 20,
                message: "El nombre no debe tener más de 50 caracteres.",
              },
              {
                pattern: /^[^\d]+$/,
                message: "El nombre no debe contener números.",
              },
            ]}
          >
            <Input
              onChange={(e) => handleChange("name", e.target.value)}
              defaultValue={newColor.name}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Crear
          </Button>
        </Form>
      </Card>
    </Space>
  );
};

export default CreateColor;
