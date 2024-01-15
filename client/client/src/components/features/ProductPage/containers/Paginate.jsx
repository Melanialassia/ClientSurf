import React from "react";

const Paginate = ({
  productPerPage,
  currentPage,
  setCurrentPage,
  totalProducts
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    console.log("entre");
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  };

  const maxDisplayedPages = 5; // cantidad de páginas a mostrar
  const halfMaxDisplayedPages = Math.floor(maxDisplayedPages / 2);

  let startPage = Math.max(1, currentPage - halfMaxDisplayedPages);
  let endPage = Math.min(
    Math.ceil(totalProducts / productPerPage),
    startPage + maxDisplayedPages - 1
  );

  if (endPage - startPage < maxDisplayedPages - 1) {
    startPage = Math.max(1, endPage - maxDisplayedPages + 1);
  }

  const visiblePageNumbers = pageNumbers.slice(startPage - 1, endPage);

  return (
    <div>
      <button
        onClick={onPreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {visiblePageNumbers.map((noPage) => (
        <button
          key={noPage}
          onClick={() => onSpecificPage(noPage)}
        >
          {noPage}
        </button>
      ))}

      <button
        onClick={onNextPage}
        disabled={currentPage === Math.ceil(totalProducts/ productPerPage)}
      >
        Next
      </button>
    </div>

  );
};

export default Paginate;
