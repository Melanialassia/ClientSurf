import React, { useEffect, useState } from "react";
import { List, Typography, Skeleton, Avatar, Divider } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteCategory,
  getAllProducts,
} from "../../../../redux/actions/action";

const ProductList = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);

  //Traemos estado global de allCategory
  const allProducts = useSelector((s) => s.allProducts);

  console.log("allProducts Admin", allProducts);

  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  const data = allProducts.map((product) => product.name);
  console.log("AllProducts", data);

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
    dispatch(getAllProducts());
    setReload(true);
  }, []);

  const handleDelete = () => {
    dispatch(deleteCategory(allCategories.idCategory));
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
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 5}
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
              <a onClick={handleDelete}>Eliminar</a>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default ProductList;
