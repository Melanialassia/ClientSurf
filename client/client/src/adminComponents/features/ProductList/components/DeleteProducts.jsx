import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//ACTIONS
import {
  getAllProducts,
  putProductStatus,
} from "../../../../redux/actions/action";
//LIBRARY
import { List, Skeleton, Avatar, Divider } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

const DeleteProducts = () => {
  const allProducts = useSelector((s) => s.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

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
      <div
        style={{
          height: 400,
          overflow: "auto",
          padding: "0 16px",
          border: "1px solid rgba(140, 140, 140, 0.35)",
        //   width: "48%",
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
            header={<div>Productos inactivos</div>}
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
  );
};

export default DeleteProducts;
