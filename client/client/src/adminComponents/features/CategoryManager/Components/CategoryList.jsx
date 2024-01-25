import React, { useEffect, useState } from "react";
import { List, Typography, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { deleteCategory, getAllCategorys } from "../../../../redux/actions/action";

const CategoryList = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  //Traemos estado global de allCategory
  const allCategories = useSelector((s) => s.allCategorys);

  useEffect(() => {
    dispatch(getAllCategorys());
    setReload(true);
  }, []);

  //const data = allCategories.map(category => category.nameCategory);

  const handleDelete = (idCategory) => {
    try {
      dispatch(deleteCategory(idCategory));
      messageApi.open({
        type: "success",
        content: "Categoria eliminada con éxito!",
      });
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "No se pudo borrar la categoria",
      });
      throw Error("No se pudo borrar la categoria", error);
    }
  };

  return (
    <div>
      {contextHolder}
      <List
        header={<div>Lista de Categorias</div>}
        bordered
        dataSource={allCategories}
        renderItem={(item) => (
          <List.Item actions={[<a key="list-delete" onClick={() => handleDelete(item.idCategory)}>Eliminar</a>]}>
            <Typography.Text mark></Typography.Text> {item.nameCategory}
          </List.Item>
        )}
      />
    </div>
  );
};
export default CategoryList;
