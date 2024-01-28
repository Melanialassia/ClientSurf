import React, { useEffect, useState } from "react";
import { Table, Tag, Space } from "antd";
import axios from "axios";

const SalesTable = () => {
  const [dataSales, setDataSales] = useState([]);
  
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

  const columns = [
    {
      title: "ID",
      dataIndex: "idSale",
      key: "idSale",
    },
    {
      title: "User Name",
      dataIndex: "nameUser",
      key: "nameUser",
    },
    {
      title: "Email",
      dataIndex: "emailUser",
      key: "emailUser",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Cost",
      dataIndex: "costSale",
      key: "costSale",
    },
    {
      
      render: (_, record) => (
        <Space size="middle">
          
          <a onClick={() => deleteSale(record.idSale)}>Delete</a>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={dataSales} />;
};

export default SalesTable;

