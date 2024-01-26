import React, { useEffect, useState } from "react";
import { List, Typography, Skeleton, Avatar, Divider, message } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProduct,
  getAllProducts,
} from "../../../../redux/actions/action";
import ProductSearchBar from "./ProductSearchBar";

const ProductList = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const allProducts = useSelector((s) => s.allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
    setReload(true);
  }, [reload]);

  const handleDelete = (idProduct) => {
    try {
      dispatch(deleteProduct(idProduct));
      messageApi.open({
        type: "success",
        content: "Producto eliminado con éxito!",
      });
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "No se pudo borrar el usuario",
      });
      throw Error("No se pudo borrar el usuario", error);
    }
  };

  const handleOnClickProduct = () => {

  }

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 780,
        overflow: "auto",
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
        minWidth: "600px",
      }}
    >
      {contextHolder}
      <InfiniteScroll
        dataLength={allProducts.length}
        /* next={loadMoreData} */
        /* hasMore={allProducts.length < 5} */
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>No existen mas productos 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          header={
            <div>
              <p>Lista de productos</p> <ProductSearchBar />
            </div>
          }
          dataSource={allProducts}
          renderItem={(item) => (
            <List.Item key={item.idProduct}>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={<a onClick={() => handleOnClickProduct()}>{item.name}</a>}
                description={
                  <p>
                    Precio: ${item.priceProduct} || Stock: {item.stock}
                  </p>
                }
              />
              <a onClick={() => handleDelete(item.idProduct)}>Eliminar</a>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default ProductList;
