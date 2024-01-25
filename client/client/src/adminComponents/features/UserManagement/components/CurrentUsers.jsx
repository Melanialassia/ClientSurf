import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { Avatar, Divider, List, Skeleton, message } from "antd";
import { deleteUser, getAllUsers } from "../../../../redux/actions/action";
import UserSearchBar from "./UserSearchBar";

const CurrentUsers = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((s) => s.allUsers);

  const [reload, setReload] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    dispatch(getAllUsers());
    setReload(true);
  }, [reload]);

  const handleDelete = (idUser) => {
    try {
      dispatch(deleteUser(idUser));
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
        dataLength={1}
        /* next={loadMoreData} */
        /* hasMore={allUsers.length < 1} */
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>No existen mas usuarios 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          header={
            <div>
              <p>Usuarios actuales</p> <UserSearchBar />
            </div>
          }
          dataSource={allUsers}
          renderItem={(item) => (
            <List.Item key={item.idUser}>
              <List.Item.Meta
                avatar={<Avatar src="/assets/images/Foto2.png" />}
                title={<p>{item.nameUser}</p>}
                description={item.emailUser}
              />
              <a onClick={() => handleDelete(item.idUser)}>Eliminar</a>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
export default CurrentUsers;
