import React from "react";
//STYLE
import style from "./Paginate.module.css";


const Paginate = ({totalPage, currentPage, handlePageChange}) => {

  return (
    <div className={style.paginate}>
       {
        Array(totalPage).fill(null).map((_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)} disabled={currentPage === index + 1}>
            {index + 1}
          </button>
        ))
      }
    </div>

  );
};

export default Paginate;