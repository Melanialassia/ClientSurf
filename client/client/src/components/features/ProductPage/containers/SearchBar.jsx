// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Input, Space, Tooltip, Button } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
// import { getProductsByName } from "../../../../redux/actions/action";

// const SearchBar = () => {
//   const [nameProduct, setNameProduct] = useState("");
//   const dispatch = useDispatch();

//   const handleChange = (event) => {
//     setNameProduct(event.target.value);
//   };

//   const handleSubmit = () => {
//     dispatch(getProductsByName(nameProduct));
//   };

//   return (
//     <Space>
//       <Input
//         placeholder="Buscar..."
//         onChange={handleChange}
//         value={nameProduct}
//         style={{ width: 200 }}
//       />
//       <Tooltip title="Buscar">
//         <Button
//           shape="circle"
//           icon={<SearchOutlined />}
//           type="submit"
//           onClick={handleSubmit}
//           style={{ marginTop: "0px" }}
//         />
//       </Tooltip>
//     </Space>
//   );
// };

// export default SearchBar;




