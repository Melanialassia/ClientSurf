//HOOKS
import React, { useState } from "react";
import { useDispatch } from "react-redux";
//ACCION
import { getUserByName } from "../../../../redux/actions/action";
//LIBRARY
import { Input, Space, Tooltip, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const UserSearchBar = () => {
  const [nameUser, setNameUser] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setNameUser(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(getUserByName(nameUser));
  };

  return (
    <Space>
      <Input
        placeholder="Buscar..."
        onChange={handleChange}
        value={nameUser}
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

export default UserSearchBar;
