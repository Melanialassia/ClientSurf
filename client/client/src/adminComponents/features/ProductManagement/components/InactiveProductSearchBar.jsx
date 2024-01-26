//HOOKS
import React, { useState } from "react";
import { useDispatch } from "react-redux";
//ACCION
import { getInactiveProductsByName } from "../../../../redux/actions/action";
//LIBRARY
import { Input, Space, Tooltip, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const InactiveProductSearchBar = () => {
  const [nameProduct, setNameProduct] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setNameProduct(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(getInactiveProductsByName(nameProduct));
  };

  return (
    <Space>
      <Input
        placeholder="Buscar..."
        onChange={handleChange}
        value={nameProduct}
        style={{
          width: 200
        }}
      />
      <Tooltip title="Buscar">
        <Button
          shape="circle"
          icon={<SearchOutlined />}
          type="submit"
          onClick={handleSubmit}
          style={{ marginTop: "0px" }}
        />
      </Tooltip>
    </Space>
  );
};

export default InactiveProductSearchBar;
