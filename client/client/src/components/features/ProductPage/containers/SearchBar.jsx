import { useDispatch } from "react-redux";
import { useState } from "react";
//ACTION
import {getProductsByName} from "../../../../redux/actions/action";

const SearchBar = () => {
    const [nameProduct, setNameProduct] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setNameProduct(event.target.value);
    };

    const handleSubmit = ()=> {
        dispatch(getProductsByName(nameProduct));
    };

    return ( 
        <>
        <input
        type="search"
        placeholder="Buscar..."
        onChange={(event) => handleChange(event)}
        />
        <button type="submit" onClick={handleSubmit}>Buscar</button>
        </>
    )
};

export default SearchBar;