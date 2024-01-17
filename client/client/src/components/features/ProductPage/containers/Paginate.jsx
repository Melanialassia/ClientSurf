import React from "react";


const Paginate = ({totalPage, currentPage, handlePageChange}) => {

  return (
    <div>
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