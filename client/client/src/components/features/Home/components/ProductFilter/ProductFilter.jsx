import React from 'react'
import { Link } from "react-router-dom";


const ProductFilter = ({link, text}) => {
  return (
    <div>
        <Link to={link}>
        <p>{text}</p>
        </Link>
    </div>
  )
}

export default ProductFilter