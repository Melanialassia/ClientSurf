//HOOKS
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//ACCTIONS
import {
  getInactiveUsers,
  getAllUsers,
  updateUser,
} from "../../../../redux/actions/action";
//COMPONENT
import UserDeleteSearchBar from "./UserDeleteSearchBar";
//LIBRARY
import { Avatar, Divider, List, Skeleton, message } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

const DeletedUsers = () => {
  const inactiveUsers = useSelector((s) => s.inactiveUsers);
  const dispatch = useDispatch();

  const [reload, setReload] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    dispatch(getInactiveUsers());
    setReload(true);
  }, [reload]);

  const handleBack = async (idUser, idLevel) => {
    try {
      const data = {
        idUser: idUser,
        idLevel: idLevel,
        nameUser: "",
        emailUser: "",
        password: "",
        uniqueId: "",
        activeUser: true,
      };
      await dispatch(updateUser(data));
      await dispatch(getAllUsers());
      await dispatch(getInactiveUsers());
      messageApi.open({
        type: "success",
        content: "Usuario habilitado con éxito!",
      });
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "No se pudo habilitar el usuario",
      });
      throw Error("No se pudo habilitar el usuario", error);
    }
  };

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: "auto",
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      {contextHolder}
      <InfiniteScroll
        dataLength={inactiveUsers ? inactiveUsers.length : 0}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>No existen mas usuarios 🏄‍♀️</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          header={
          <div>
             <p>Usuarios eliminados</p> <UserDeleteSearchBar />
             </div>}
          dataSource={inactiveUsers}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src="/assets/images/Foto2.png" />}
                title={<p>{item.nameUser}</p>}
                description={item.emailUser}
              />
              <a onClick={() => handleBack(item.idUser, item.idLevel)}>Restaurar</a>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
export default DeletedUsers;
