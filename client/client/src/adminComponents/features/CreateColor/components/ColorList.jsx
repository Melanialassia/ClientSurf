import React, { useEffect, useState } from "react";
import { List, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getAllColors } from "../../../../redux/actions/action";
/* import { deleteCategory, getAllCategorys } from "../../../../redux/actions/action";
 */
const ColorList = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);

  //Traemos estado global de allCategory
  const allColors = useSelector((s) => s.allColors);

  useEffect(() => {
    dispatch(getAllColors());
    setReload(true);
  }, []);

  const data = allColors.map(color => color.nameColor);

  const handleDelete = () => {
    dispatch(deleteCategory(allColors.idColor));
  };

  return (
    <div>
      <List
        header={<div>Lista de colores</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item actions={[<a key="list-delete" onClick={handleDelete}>Eliminar</a>]}>
            <Typography.Text mark></Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  );
};
export default ColorList;