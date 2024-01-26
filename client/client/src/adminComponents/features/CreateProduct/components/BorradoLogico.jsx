import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../../../redux/actions/action";
import { List, Typography, Skeleton, Avatar, Divider, Result } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
//ACCION
import { putProductStatus } from "../../../../redux/actions/action";

const BorradoLogico = () => {
  const allProducts = useSelector((s) => s.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
   
      dispatch(getAllProducts());

    
  }, []);

  const trueStatus = allProducts.filter((product) => product.status === true);
  const handleDelete = async (idProduct) => {
    const data = {
      idProduct: idProduct,
      status: false,
    };
    await dispatch(putProductStatus(data));
    await dispatch(getAllProducts());
  };

  const falseStatus = allProducts.filter((product) => product.status === false);
  const handleBack = async (idProduct) => {
    const data = {
      idProduct: idProduct,
      status: true,
    };
    await dispatch(putProductStatus(data));
    await dispatch(getAllProducts());
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        style={{
          height: 400,
          overflow: "auto",
          padding: "0 16px",
          border: "1px solid rgba(140, 140, 140, 0.35)",
          width: "48%",
        }}
      >
        <InfiniteScroll
          dataLength={trueStatus ? trueStatus.length : 0}
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
          scrollableTarget="scrollableDivLeft"
        >
          <List
            header={<div>Lista de productos (Status TRUE)</div>}
            dataSource={trueStatus}
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
                <a onClick={() => handleDelete(item.idProduct)}>Eliminar</a>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>

      <div
        style={{
          height: 400,
          overflow: "auto",
          padding: "0 16px",
          border: "1px solid rgba(140, 140, 140, 0.35)",
          width: "48%",
        }}
      >
        <InfiniteScroll
          dataLength={falseStatus ? falseStatus.length : 0}
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
            header={<div>Lista de productos (Status FALSE)</div>}
            dataSource={falseStatus}
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
    </div>
  );
};

export default BorradoLogico;
