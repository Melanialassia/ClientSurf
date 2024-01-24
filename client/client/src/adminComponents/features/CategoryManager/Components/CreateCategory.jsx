import React from "react";
import { Card, Space, Button, message, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postCategory } from "../../../../redux/actions/action";

const CreateCategory = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  const [newCategory, setNewCategory] = useState({
    name: "",
  });

  const handleChange = (name, value) => {
    setNewCategory({
      ...newCategory,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {

      //Esto no creo que deba ser un objeto.
      const obj = {
        name: newCategory.name,
      };

      dispatch(postCategory(obj));
      messageApi.open({
        type: "success",
        content: "Categoria creada con éxito!",
      });

      setNewCategory({
        name: "",
      });

      form.resetFields();
    } catch (error) {
      console.error("Error al crear la categoria:", error);
    }
  };

  return (
    <Space direction="vertical" size={16}>
      {contextHolder} {/* //TODO: Verificar que esto funcione */}
      <Card title="Crea una nueva categoria" style={{ width: 300 }}>
        <Form onFinish={handleSubmit} form={form}>
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
              defaultValue={newCategory.name}
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

export default CreateCategory;
