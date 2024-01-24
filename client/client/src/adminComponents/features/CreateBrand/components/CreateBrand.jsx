import React from "react";
import { Card, Space, Button, message, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postBrand } from "../../../../redux/actions/action";

const CreateBrand = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  const [newBrand, setNewBrand] = useState({
    name: "",
  });

  const handleChange = (name, value) => {
    setNewBrand({
      ...newBrand,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {

      //Esto no creo que deba ser un objeto.
      const obj = {
        name: newBrand.name,
      };

      dispatch(postBrand(obj));
      messageApi.open({
        type: "success",
        content: "Marca creada con éxito!",
      });

      setNewBrand({
        name: "",
      });

      form.resetFields();
    } catch (error) {
      console.error("Error al crear la marca:", error);
    }
  };

  return (
    <Space direction="vertical" size={16}>
      {contextHolder} {/* //TODO: Verificar que esto funcione */}
      <Card title="Crea una nueva marca" style={{ width: 300 }}>
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
              defaultValue={newBrand.name}
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

export default CreateBrand;
