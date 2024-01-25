import React from "react";
import { Collapse } from "antd";
import CategoryManager from "../../CategoryManager/root/CategoryManager";
import ProductManager from "../../CreateProduct/roots/ProductManager";
import ColorManager from "../../CreateColor/root/ColorManager";
import BrandManager from "../../CreateBrand/roots/BrandManager";
import SizeManager from "../../CreateSize/roots/SizeManager";
import UserManager from "../../UserManagement/roots/UserManager"
import styles from "./AdminDashboard.module.css";
import SalesManager from "../../SalesManager/roots/SalesManager";


const text = `
  Esta pestaña se encuentra en proceso.
`;
const items = [
  {
    key: "1",
    label: "Gestionar los usuarios",
    children: <UserManager></UserManager>,
  },
  {
    key: "2",
    label: "Registro de ventas",
    children: <SalesManager/>,
  },
  {
    key: "3",
    label: "Agregar un nuevo producto a la tienda",
    children: <ProductManager></ProductManager>,
  },
  {
    key: "4",
    label: "Gestionar las categorias",
    children: <CategoryManager />,
  },
  {
    key: "5",
    label: "Gestionar las marcas",
    children: <BrandManager></BrandManager>,
  },
  {
    key: "6",
    label: "Gestionar los colores",
    children: <ColorManager></ColorManager>,
  },
  {
    key: "7",
    label: "Gestionar las tallas",
    children: <SizeManager></SizeManager>,
  },
];
const AdminDashboard = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse className={styles.container} defaultActiveKey={["1"]} onChange={onChange} items={items} />
  );
};
export default AdminDashboard;
