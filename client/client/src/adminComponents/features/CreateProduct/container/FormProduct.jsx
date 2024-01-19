import React from "react";
// HOOKS
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//ACTION
import {
  getAllCategorys,
  getAllBrands,
  getAllColors,
  postProduct,
  getAllSize
} from "../../../../redux/actions/action";
//LIBRARY
import { Form, Input, Select, InputNumber, Button, Upload, Image} from "antd";
import { PlusOutlined } from '@ant-design/icons';
import styles from "./FormProduct.module.css";
const { TextArea } = Input;
const { Option } = Select;

const FormProduct = () => {
  const allCategorys = useSelector((s) => s.allCategorys);
  const allBrands = useSelector((s) => s.allBrands);
  const allColors = useSelector((s) => s.allColors);
  const allSize = useSelector((s) => s.allSize);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllCategorys());
    dispatch(getAllBrands());
    dispatch(getAllColors());
    dispatch(getAllSize());
  }, [dispatch]);

  const [dataProduct, setDataProduct] = useState({
    idCategory: "",
    name: "",
    idSize:"",
    image: "",
    idColor: "",
    idBrand: "",
    priceProduct:"",
    stock: "",
    description: "",
  });

  const handleChange = (name, value) => {
    setDataProduct({
      ...dataProduct,
      [name]: value,
    });
  };
  console.log("entre", dataProduct);

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const customRequest = async ({ file, onSuccess }) => {
    try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "olaurbana");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dfvebd4zw/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const cloudinaryFile = await res.json();
      setDataProduct({
        ...dataProduct,
        image: cloudinaryFile.secure_url,
      });

      onSuccess();
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };

  const handleSubmit = () => {
    const obj = {
      idCategory: +dataProduct.idCategory,
      name: dataProduct.name,
      idSize: +dataProduct.idBrand,
      image: dataProduct.image,
      idColor: +dataProduct.idColor,
      idBrand: +dataProduct.idBrand,
      priceProduct: dataProduct.priceProduct,
      stock: dataProduct.stock,
      description: dataProduct.description,
    };
  
    dispatch(postProduct(obj));
  
    setDataProduct({
      idCategory: "",
      name: "",
      idSize: "",
      image: "", 
      idColor: "",
      idBrand: "",
      priceProduct: 0,
      stock: 0,
      description: "",
    });
  };

  return (
    <div>
      <h4 style={{ marginTop: "80px", fontSize: "30px" }} className={styles.text}> Crear Producto </h4>
      <Form onFinish={handleSubmit} {...layout} style={{maxWidth: 600}}>
        <Form.Item
          label="Nombre"
          name="name"
          rules={[
            { required: true, message: 'Campo obligatorio!' },
            { max: 20, message: 'El nombre no debe tener más de 50 caracteres' },
            { pattern: /^[^\d]+$/, message: 'El nombre no debe contener números' },
          ]} 
        >
          <Input
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Categoría"
          name="idCategory"
          rules={[{ required: true, message: "Seleccione la categoría!" }]}
        >
          <Select
            onChange={(value) => handleChange("idCategory", value)}
          >
            {allCategorys.map((c) => (
              <Option key={c.idCategory} value={c.idCategory}>
                {c.nameCategory}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Imagen"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: "Debe de subir una foto!" }]}
        >
          <Upload
            customRequest={customRequest}
            listType="picture-card"
            showUploadList={false}
          >
            {dataProduct.image ? (
              <Image src={dataProduct.image} alt="product"  />
            ) : (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Subir Imagen</div>
              </div>
            )}
          </Upload>
        </Form.Item>

        <Form.Item
          label="Talle"
          name="idSize"
          rules={[{ required: true, message: "Seleccione el talle!" }]}
        >
          <Select
            onChange={(value) => handleChange("idSize", value)}
          >
            {allSize.map((c) => (
              <Option key={c.idSize} value={c.idSize}>
                {c.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Color"
          name="idColor"
          rules={[{ required: true, message: "Seleccione el color!" }]}
        >
          <Select
            onChange={(value) => handleChange("idColor", value)}
          >
            {allColors.map((c) => (
              <Option key={c.idColor} value={c.idColor}>
                {c.nameColor}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Marca"
          name="idBrand"
          rules={[{ required: true, message: "Seleccione la marca!" }]}
        >
          <Select onChange={(value) => handleChange("idBrand", value)}>
            {allBrands.map((b) => (
              <Option key={b.idBrand} value={b.idBrand}>
                {b.brandName}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Precio"
          name="priceProduct"
          rules={[{ required: true, message: "Ingrese el precio!" },
          {
            validator: (_, value) => {
              if (value < 0) {
                return Promise.reject("No se puede ingresar un número negativo");
              }
              return Promise.resolve();
            },
          },
        ]}
        >
          <InputNumber
            style={{ width: "100%" }}
            onChange={(value) => handleChange("priceProduct", value)}
          />
        </Form.Item>

        <Form.Item
          label="Stock"
          name="stock"
          rules={[{ required: true, message: "Ingrese el stock!" },
          {
            validator: (_, value) => {
              if (value < 0) {
                return Promise.reject("No se puede ingresar un número negativo");
              }
              return Promise.resolve();
            },
          },]}
        >
          <InputNumber
            style={{ width: "100%" }}
            onChange={(value) => handleChange("stock", value)}
          />
        </Form.Item>

        <Form.Item
          label="Descripción"
          name="description"
        >
          <TextArea
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Crear
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormProduct;
