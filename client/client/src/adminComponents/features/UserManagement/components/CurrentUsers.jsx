//HOOKS
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//ACTIONS
import {
  getInactiveUsers,
  getAllUsers,
  updateUser,
} from "../../../../redux/actions/action";
//COMPONENT
import UserSearchBar from "./UserSearchBar";
//LIBRARY
import { Avatar, Divider, List, Skeleton, message } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

const CurrentUsers = () => {
  const allUsers = useSelector((s) => s.allUsers);
  const dispatch = useDispatch();

  const [reload, setReload] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    dispatch(getAllUsers());
    setReload(true);
  }, [reload]);

  const activeUser = allUsers.filter((u) => u.activeUser === true);
  console.log("nombre?", activeUser);
  const handleDelete = async (idUser, idLevel) => {
    const data = {
      idUser: idUser,
      idLevel: idLevel,
      nameUser: "",
      emailUser: "",
      password: "",
      uniqueId: "",
      activeUser: false,
    };
    try {
      console.log("entre");
      await dispatch(updateUser(data));
      await dispatch(getAllUsers());
      await dispatch(getInactiveUsers());
      messageApi.open({
        type: "success",
        content: "Usuario eliminado con éxito!",
      });
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "No se pudo borrar el usuario",
      });
      throw Error("No se pudo borrar el usuario", error);
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
        dataLength={activeUser ? activeUser.length : 0}
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
              <p>Usuarios actuales</p> <UserSearchBar />
            </div>
          }
          dataSource={activeUser}
          renderItem={(item) => (
            <List.Item key={item.idUser}>
              <List.Item.Meta
                avatar={<Avatar src="/assets/images/Foto2.png" />}
                title={<p>{item.nameUser}</p>}
                description={item.emailUser}
              />
              <a onClick={() => handleDelete(item.idUser, item.idLevel)}>Eliminar</a>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
export default CurrentUsers;
