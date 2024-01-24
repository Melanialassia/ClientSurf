import React, { useEffect, useState } from "react";
import { List, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { deleteBrand, getAllBrands } from "../../../../redux/actions/action";

const BrandList = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);

  //Traemos estado global de allCategory
  const allBrands = useSelector((s) => s.allBrands);

  useEffect(() => {
    dispatch(getAllBrands());
    setReload(true);
  }, [reload]);

  //const data = allBrands.map(brand => brand.brandName);

  const handleDelete = (idBrand) => {
    dispatch(deleteBrand(idBrand));
  };

  return (
    <div>
      <List
        header={<div>Lista de Marcas</div>}
        bordered
        dataSource={allBrands}
        renderItem={(item) => (
          <List.Item actions={[<a key="list-delete" onClick={() => handleDelete(item.idBrand)}>Eliminar</a>]}>
            <Typography.Text mark></Typography.Text> {item.brandName}
          </List.Item>
        )}
      />
    </div>
  );
};
export default BrandList;
