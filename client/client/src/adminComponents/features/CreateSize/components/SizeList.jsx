import React, { useEffect, useState } from "react";
import { List, Typography, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { deleteSize, getAllSize } from "../../../../redux/actions/action";

const SizeList = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  //Traemos estado global de allCategory
  const allSize = useSelector((s) => s.allSize);

  console.log("allSize", allSize);
  useEffect(() => {
    dispatch(getAllSize());
    setReload(true);
  }, [reload]);

  //const data = allSize.map(size => size.nameSize);

  const handleDelete = (idSize) => {
    dispatch(deleteSize(idSize));
    messageApi.open({
      type: "success",
      content: "Talla eliminada con éxito!",
    });
  };

  return (
    <div>
      {contextHolder} 
      <List
        header={<div>Lista de Tallas</div>}
        bordered
        dataSource={allSize}
        renderItem={(item) => (
          <List.Item actions={[<a key="list-delete" onClick={() => handleDelete(item.idSize)}>Eliminar</a>]}>
            <Typography.Text mark></Typography.Text> {item.nameSize}
          </List.Item>
        )}
      />
    </div>
  );
};
export default SizeList;
