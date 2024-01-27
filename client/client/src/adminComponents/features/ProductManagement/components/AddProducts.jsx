//HOOKS
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//ACTIONS
import {
  getAllProducts,
  putProductStatus,
  getInactiveProducts,
} from "../../../../redux/actions/action";
//COMPONENT
import ProductSearchBar from "./ProductSearchBar";
//LIBRARY
import { List, Skeleton, Avatar, Divider, message } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

const AddProduct = () => {
  const allProducts = useSelector((s) => s.allProducts);
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    dispatch(getAllProducts());
    setReload(true);
  }, [reload]);

  const trueStatus = allProducts.filter((product) => product.status === true);
  const handleDelete = async (idProduct) => {
    const data = {
      idProduct: idProduct,
      status: false
    };
    try {
      await dispatch(putProductStatus(data));
      await dispatch(getAllProducts());
      await dispatch(getInactiveProducts());
      messageApi.open({
        type: "success",
        content: "Producto deshabilitado con exito!",
      });
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "No se pudo deshabilitar el producto con exito.",
      });
      throw Error("No se pudo deshabilitar el producto", error);
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
          header={
            <div>
              <p>Productos activos</p> <ProductSearchBar />
            </div>
          }
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

export default AddProduct;
