import React, { useEffect, useState } from "react";
import { List, Typography, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { deleteColor, getAllColors } from "../../../../redux/actions/action";

const ColorList = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const allColors = useSelector((s) => s.allColors);

  useEffect(() => {
    dispatch(getAllColors());
    setReload(true);
  }, [reload]);

  //const data = allColors.map(color => color.nameColor);

  const handleDelete = (idColor) => {
    try {
      dispatch(deleteColor(idColor));
      messageApi.open({
        type: "success",
        content: "Color eliminado con éxito!",
      });
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "No se pudo borrar el color",
      });
      throw Error("No se pudo borrar el color", error);
    }
  };

  return (
    <div>
      {contextHolder} 
      <List
        header={<div>Lista de colores</div>}
        bordered
        dataSource={allColors}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a key={item.idColor} onClick={() => handleDelete(item.idColor)}>
                Eliminar
              </a>,
            ]}
          >
            <Typography.Text mark></Typography.Text> {item.nameColor}
          </List.Item>
        )}
      />
    </div>
  );
};
export default ColorList;
