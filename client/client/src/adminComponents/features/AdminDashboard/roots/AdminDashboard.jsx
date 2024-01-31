import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  AppstoreOutlined,
  LineChartOutlined,
  PlusOutlined,
  BarsOutlined,
  TagOutlined,
  HighlightOutlined,
  GoldOutlined,
} from "@ant-design/icons";
import ProductsManager from "../../ProductManagement/roots/ProductsManager";
import CategoryManager from "../../CategoryManager/root/CategoryManager";
import ProductManager from "../../CreateProduct/roots/ProductManager";
import SalesManager from "../../SalesManager/roots/SalesManager";
import UserManager from "../../UserManagement/roots/UserManager";
import BrandManager from "../../CreateBrand/roots/BrandManager";
import ColorManager from "../../CreateColor/root/ColorManager";
import SizeManager from "../../CreateSize/roots/SizeManager";
import styles from "./AdminDashboard.module.css";

const { Sider, Content } = Layout;

const AdminDashboard = () => {
  const [selectedKey, setSelectedKey] = useState("1");

  const handleMenuClick = (key) => {
    setSelectedKey(key);
  };

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <UserManager />;
      case "2":
        return <ProductsManager />;
      case "3":
        return <SalesManager />;
      case "4":
        return <ProductManager />;
      case "5":
        return <CategoryManager />;
      case "6":
        return <BrandManager />;
      case "7":
        return <ColorManager />;
      case "8":
        return <SizeManager />;
      default:
        return null;
    }
  };

  return (
    <Layout className={styles.container}>
    <Sider
      width={300}
      theme="light"
      style={{
        left: 0, // Ajusta según sea necesario
        height: "100vh", // Ajusta según sea necesario
      }}
    >
      <Menu
        theme="light"
        mode="vertical"
        selectedKeys={[selectedKey]}
        onClick={({ key }) => handleMenuClick(key)}
        style={{ marginTop: "10px" }}
      >
          <Menu.Item key="1" icon={<UserOutlined />} title="Gestionar Usuarios" style={{ marginBottom: '30px' }}>
            Gestionar Usuarios
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />} title="Gestionar Productos" style={{ marginBottom: '30px' }}>
            Gestionar Productos
          </Menu.Item>
          <Menu.Item key="3" icon={<LineChartOutlined />} title="Registro de Ventas" style={{ marginBottom: '30px' }}>
            Registro de Ventas
          </Menu.Item>
          <Menu.Item key="4" icon={<PlusOutlined />} title="Agregar Nuevo Producto" style={{ marginBottom: '30px'}}>
            Agregar Nuevo Producto
          </Menu.Item>
          <Menu.Item key="5" icon={<BarsOutlined />} title="Gestionar Categorías" style={{ marginBottom: '30px' }}>
            Gestionar Categorías
          </Menu.Item>
          <Menu.Item key="6" icon={<TagOutlined />} title="Gestionar Marcas" style={{ marginBottom: '30px' }}>
            Gestionar Marcas
          </Menu.Item>
          <Menu.Item key="7" icon={<HighlightOutlined />} title="Gestionar Colores" style={{ marginBottom: '30px' }}>
            Gestionar Colores
          </Menu.Item>
          <Menu.Item key="8" icon={<TagOutlined  />} title="Gestionar Tallas" style={{ marginBottom: '30px' }}>
            Gestionar Tallas
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ background: "#fff", padding: "auto", minHeight: 400 }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;