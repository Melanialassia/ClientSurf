import React from "react";

const Paginate = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div>
      {Array(totalPages)
        .fill(null)
        .map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
            className={currentPage == index + 1 ? "current" : ""}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
};

export default Paginate;
