import React, { useEffect, useState } from "react";
import { List, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { deleteSize, getAllSize } from "../../../../redux/actions/action";

const SizeList = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);

  //Traemos estado global de allCategory
  const allSize = useSelector((s) => s.allSize);

  useEffect(() => {
    dispatch(getAllSize());
    setReload(true);
  }, []);

  const data = allSize.map(size => size.nameSize);

  const handleDelete = () => {
    dispatch(deleteSize(allSize.idSize));
  };

  return (
    <div>
      <List
        header={<div>Lista de Tallas</div>}
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
export default SizeList;
