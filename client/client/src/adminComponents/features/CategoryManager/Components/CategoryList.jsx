import React, { useEffect, useState } from "react";
import { List, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { deleteCategory, getAllCategorys } from "../../../../redux/actions/action";

const CategoryList = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);

  //Traemos estado global de allCategory
  const allCategories = useSelector((s) => s.allCategorys);

  useEffect(() => {
    dispatch(getAllCategorys());
    setReload(true);
  }, []);

  //const data = allCategories.map(category => category.nameCategory);

  const handleDelete = (idCategory) => {
    dispatch(deleteCategory(idCategory));
  };

  return (
    <div>
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
