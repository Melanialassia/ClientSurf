import React, { useEffect, useState } from "react";
import { List, Typography, Skeleton, Avatar, Divider } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProduct,
  getAllProducts,
} from "../../../../redux/actions/action";

const ProductList = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);

  //Traemos estado global de allCategory
  const allProducts = useSelector((s) => s.allProducts);

  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  //const data = allProducts.map((product) => product.name);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    //loadMoreData();
    console.log("allProducts ANTES", allProducts);

    dispatch(getAllProducts());
    console.log("allProducts DESPUES", allProducts);

    setReload(true);
  }, [reload]);

  const handleDelete = (idProduct) => {
    dispatch(deleteProduct(idProduct));
  };

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
      <InfiniteScroll
        dataLength={allProducts.length}
        /* next={loadMoreData} */
        hasMore={allProducts.length < 5}
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
          header={<div>Lista de productos</div>}
          dataSource={allProducts}
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
  );
};

export default ProductList;
