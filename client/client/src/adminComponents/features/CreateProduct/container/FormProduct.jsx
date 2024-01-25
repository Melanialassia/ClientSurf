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
  getAllSize,
} from "../../../../redux/actions/action";
//LIBRARY
import {
  Form,
  Input,
  Select,
  InputNumber,
  Button,
  Upload,
  Image,
  message,
  Card,
  Space,
} from "antd";
import { PlusOutlined, DownloadOutlined } from "@ant-design/icons";
import styles from "./FormProduct.module.css";
const { TextArea } = Input;
const { Option } = Select;

const FormProduct = () => {
  const allCategorys = useSelector((s) => s.allCategorys);
  const allBrands = useSelector((s) => s.allBrands);
  const allColors = useSelector((s) => s.allColors);
  const allSize = useSelector((s) => s.allSize);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  //MESSAGE
  const [messageApi, contextHolder] = message.useMessage();

  const [dataProduct, setDataProduct] = useState({
    idCategory: "",
    name: "",
    idSize: "",
    image: "",
    idColor: "",
    idBrand: "",
    priceProduct: "",
    stock: "",
    description: "",
  });
  const loadedData = () => ({
    idCategory: JSON.parse(localStorage.getItem("formData_idCategory")) || "",
    name: localStorage.getItem("formData_name"),
    idSize: JSON.parse(localStorage.getItem("formData_idSize")) || "",
    image: localStorage.getItem("formData_image") || "",
    idColor: JSON.parse(localStorage.getItem("formData_idColor")) || "",
    idBrand: JSON.parse(localStorage.getItem("formData_idBrand")) || "",
    priceProduct: localStorage.getItem("formData_priceProduct") || "",
    stock: localStorage.getItem("formData_stock") || "",
    description: localStorage.getItem("formData_description"),
  });
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    dispatch(getAllCategorys());
    dispatch(getAllBrands());
    dispatch(getAllColors());
    dispatch(getAllSize());
    const obj = loadedData();
    if (Object.keys(obj).length) {
      setDataProduct(obj);
    } else {
      setDataProduct({
        idCategory: "",
        name: "",
        idSize: "",
        image: "",
        idColor: "",
        idBrand: "",
        priceProduct: "",
        stock: "",
        description: "",
      });
    }
    form.resetFields();
  }, [isSubmit]);

  const handleChange = (name, value) => {
    // Manejo especial para el campo de imagen
    if (name === "image") {
      setDataProduct({
        ...dataProduct,
        image: value[0], // Solo toma el primer archivo, ya que es una sola imagen
      });
    } else {
      setDataProduct({
        ...dataProduct,
        [name]: value,
      });
    }

    localStorage.setItem(`formData_${name}`, value);
  };

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

  const [file, setFile] = useState("");

  const customRequest = ({ file }) => {
    setFile(file);
  };

  const postCloudinary = async () => {
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
      return cloudinaryFile.secure_url; // Retorna la URL de la imagen
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };

  const cleanLocalStorage = () => {
    localStorage.clear();
  };

  const handleSubmit = async () => {
    try {
      const imageUrl = await postCloudinary(); // Esperar a que se complete la subida de la imagen
      console.log(imageUrl);
      const obj = {
        idCategory: +dataProduct.idCategory,
        name: dataProduct.name,
        idSize: +dataProduct.idSize,
        image: imageUrl || dataProduct.image,
        idColor: +dataProduct.idColor,
        idBrand: +dataProduct.idBrand,
        priceProduct: +dataProduct.priceProduct,
        stock: +dataProduct.stock,
        description: dataProduct.description,
      };
      console.log("entre", obj);
      dispatch(postProduct(obj));
      messageApi.open({
        type: "success",
        content: "Producto creado con éxito!",
      });

      cleanLocalStorage();
      setFile("");

      setDataProduct({
        idCategory: "",
        name: "",
        idSize: "",
        image: "",
        idColor: "",
        idBrand: "",
        priceProduct: "",
        stock: "",
        description: "",
      });

      form.resetFields();
      setIsSubmit(true);
    } catch (error) {
      console.error("Error al procesar el formulario:", error);
    }
  };

  return (
    <div>
      {/* {<h4
        style={{ marginTop: "80px", fontSize: "30px", marginLeft: "850px" }}
        className={styles.text}
      > 
        Agrega un nuevo producto
      </h4>} */}

      <Space irection="vertical" size={16}>
        {contextHolder}
        <Card title="Crear una nuevo producto" style={{ width: "auto" }}>
          <Form
            form={form}
            onFinish={handleSubmit}
            initialValues={loadedData()}
            /* {...layout} */
            /* style={{ maxWidth: 600, marginLeft: "700px" }} */
          >
            <Form.Item
              label="Nombre"
              name="name"
              value={dataProduct.name}
              rules={[
                { required: true, message: "Campo obligatorio!." },
                {
                  max: 20,
                  message: "El nombre no debe tener más de 50 caracteres.",
                },
                {
                  pattern: /^[^\d]+$/,
                  message: "El nombre no debe contener números.",
                },
              ]}
            >
              <Input onChange={(e) => handleChange("name", e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Categoría"
              name="idCategory"
              rules={[{ required: true, message: "Seleccione la categoría!." }]}
            >
              <Select onChange={(value) => handleChange("idCategory", value)}>
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
              rules={[{ required: true, message: "Debe de subir una foto!." }]}
            >
              <Upload customRequest={customRequest} showUploadList={false}>
                <div
                  style={{
                    border: "1px dashed #d9d9d9",
                    borderRadius: "20px",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  Selecciona una imagen
                </div>
              </Upload>
            </Form.Item>

            <Form.Item
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              {file && (
                <Image
                  src={URL.createObjectURL(file)}
                  alt="product"
                  style={{ width: "150px", height: "150px" }}
                />
              )}
            </Form.Item>

            <Form.Item
              label="Talle"
              name="idSize"
              rules={[{ required: true, message: "Seleccione el talle!." }]}
            >
              <Select onChange={(value) => handleChange("idSize", value)}>
                {allSize.map((c) => (
                  <Option key={c.idSize} value={c.idSize}>
                    {c.nameSize}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Color"
              name="idColor"
              rules={[{ required: true, message: "Seleccione el color!." }]}
            >
              <Select onChange={(value) => handleChange("idColor", value)}>
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
              rules={[{ required: true, message: "Seleccione la marca!." }]}
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
              rules={[{ required: true, message: "Ingrese el precio!." }]}>
              <InputNumber
                style={{ width: "100%" }}
                onChange={(value) => handleChange("priceProduct", value)}
              />
            </Form.Item>

            <Form.Item
              label="Stock"
              name="stock"
              rules={[{ required: true, message: "Ingrese el stock!." }]}>
              <InputNumber
                style={{ width: "100%" }}
                onChange={(value) => handleChange("stock", value)}
              />
            </Form.Item>

            <Form.Item
              label="Descripción"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Por favor, añade una breve descripción.",
                },
              ]}
            >
              <TextArea
                onChange={(e) => handleChange("description", e.target.value)}
              />
            </Form.Item>

            <Form.Item style={{ marginLeft: "500px" }}>
              <Button type="primary" htmlType="submit">
                Guardar
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </div>
  );
};

export default FormProduct;
