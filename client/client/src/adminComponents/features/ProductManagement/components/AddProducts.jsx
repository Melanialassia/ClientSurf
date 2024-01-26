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

const AddProduct = () => {
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

  return (
    <div
        style={{
          height: 400,
          overflow: "auto",
          padding: "0 16px",
          border: "1px solid rgba(140, 140, 140, 0.35)",
          // width: "48%",
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
            header={<div>Productos activos</div>}
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
  );
};

export default  AddProduct;