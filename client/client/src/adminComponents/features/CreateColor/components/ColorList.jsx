import React, { useEffect, useState } from "react";
import { List, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { deleteColor, getAllColors } from "../../../../redux/actions/action";

const ColorList = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);

  const allColors = useSelector((s) => s.allColors);

  useEffect(() => {
    dispatch(getAllColors());
    setReload(true);
  }, [reload]);
  
  //const data = allColors.map(color => color.nameColor);
  
  const handleDelete = (idColor) => {
    dispatch(deleteColor(idColor));
  };

  return (
    <div>
      <List
        header={<div>Lista de colores</div>}
        bordered
        dataSource={allColors}
        renderItem={(item) => (
          <List.Item actions={[<a key={item.idColor} onClick={() => handleDelete(item.idColor)}>Eliminar</a>]}>
            <Typography.Text mark></Typography.Text> {item.nameColor}
          </List.Item>
        )}
      />
    </div>
  );
};
export default ColorList;