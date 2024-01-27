//HOOKS
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//ACTIONS
import {
  getAllProducts,
  getInactiveProducts,
  putProductStatus,
} from "../../../../redux/actions/action";
//COMPONENT
import InactiveProductSearchBar from "./InactiveProductSearchBar";
//LIBRARY
import { List, Skeleton, Avatar, Divider, message } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

const DeleteProducts = () => {
  const inactiveProducts = useSelector((s) => s.inactiveProducts);
  const dispatch = useDispatch();

  const [reload, setReload] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    dispatch(getInactiveProducts());
    setReload(true);
  }, [reload]);

  const handleBack = async (idProduct) => {
    try {
      const data = {
        idProduct: idProduct,
        status: true,
      };
      await dispatch(putProductStatus(data));
      await dispatch(getAllProducts());
      await dispatch(getInactiveProducts());
      messageApi.open({
        type: "success",
        content: "Producto restaurado con éxito!",
      });
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "No se pudo restaurar el producto",
      });
      throw Error("No se pudo restaurar el producto", error);
    }
  };

  return (
    <div
      style={{
        height: 400,
        overflow: "auto",
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      {contextHolder}
      <InfiniteScroll
        dataLength={inactiveProducts ? inactiveProducts.length : 0}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>No existen más productos 🏄‍♀️</Divider>}
        scrollableTarget="scrollableDivRight"
      >
        <List
          header={
            <div>
              <p>Productos inactivos</p> <InactiveProductSearchBar />
            </div>
          }
          dataSource={inactiveProducts}
          renderItem={(item) => (
            <List.Item key={item.idProduct}>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={<a>{item.name}</a>}
                description={
                  <p>
                    Precio: ${item.priceProduct} || Stock: {item.stock}
                  </p>
                }
              />
              <a onClick={() => handleBack(item.idProduct)}>Recuperar</a>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default DeleteProducts;
