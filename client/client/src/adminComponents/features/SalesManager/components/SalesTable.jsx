  import React, { useEffect, useState } from "react";
  import { Table, Tag, Space, Modal } from "antd";
  import axios from "axios";
  import styles from "./SalesTable.module.css";

  const SalesTable = () => {
    const [dataSales, setDataSales] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [saleDetails, setSaleDetails] = useState(null);
    console.log(saleDetails);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://surf-4i7c.onrender.com/surf/sale"
          );
          setDataSales(response.data.data);
        } catch (error) {
          console.error("Error fetching sales data:", error);
        }
      };

      fetchData();
    }, []);

    const deleteSale = async (id) => {
      try {
        await axios.delete(`https://surf-4i7c.onrender.com/surf/sale/${id}`);
        setDataSales(dataSales.filter((sale) => sale.idSale !== id));
      } catch (error) {
        console.error(`Error deleting sale ${id}:`, error);
      }
    };

    const showSaleDetails = async (idSale) => {
      try {
        const response = await axios.get(`https://surf-4i7c.onrender.com/surf/detail/${idSale}`);
        const details = response.data;
        setSaleDetails(details);
        setIsModalVisible(true);
      } catch (error) {
        console.error(`Error getting sale details ${idSale}:`, error);
      }
    };

    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    

    const columns = [
      {
        title: "ID",
        dataIndex: "idSale",
        key: "idSale",
      },
      {
        title: "Nombre de Usuario",
        dataIndex: "nameUser",
        key: "nameUser",
      },
      {
        title: "Correo Electronico",
        dataIndex: "emailUser",
        key: "emailUser",
      },
      {
        title: "Fecha de compra",
        dataIndex: "date",
        key: "date",
      },
      {
        title: "Costo Total",
        dataIndex: "costSale",
        key: "costSale",
      },
      {
        
        render: (_, record) => (
          <Space size="middle">
            
            <a onClick={() => deleteSale(record.idSale)}>Eliminar</a>
            <a onClick={() => showSaleDetails(record.idSale)}>Ver Detalles</a>
          </Space>
        ),
      },
    ];

    return (
      <>
        <Table columns={columns} dataSource={dataSales} />
        <Modal title="Detalles de Venta" visible={isModalVisible} onOk={handleOk} onCancel={handleOk}>
  {saleDetails && saleDetails.data.map((product, index) => (
    <div key={index} className={styles.productContainer}>
      <img className={styles.detailImg} src={product.image} alt="Product Image" />
      <div className={styles.productInfoTotal}>
      <div>
        <p><strong>Nombre: </strong>{product.name}</p>
        <p><strong>Cantidad: </strong>{product.amount}</p>
        <p><strong>Precio: </strong>${product.priceTotal}</p>
        
      </div>
      <div>
        <p><strong>Color: </strong>{product.nameColor}</p>
        <p><strong>Talle: </strong>{product.nameSize}</p>
        <p><strong>Marca: </strong>{product.brandName}</p>
        </div>
        </div>
    </div>
  ))}
</Modal> 
      </>
    );
  };

    
  

  export default SalesTable;

