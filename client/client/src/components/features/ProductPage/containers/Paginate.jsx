import React from "react";
import style from "./Paginate.module.css";

const Paginate = ({ totalPage, currentPage, handlePageChange }) => {
  const renderPageButtons = () => {
    const pagesToShow = 2; // Número de páginas a mostrar alrededor de la actual
    const pages = Array(totalPage)
      .fill(null)
      .map((_, index) => index + 1);

    if (totalPage <= 5) {
      // Si hay menos de 5 páginas, mostrar todas
      return pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          disabled={currentPage === page}
          className={currentPage === page ? style.active : ""}
        >
          {page}
        </button>
      ));
    }

    // Mostrar las dos anteriores y las dos siguientes a la página actual
    const startPage = Math.max(1, currentPage - pagesToShow);
    const endPage = Math.min(totalPage, currentPage + pagesToShow);

    return pages.slice(startPage - 1, endPage).map((page) => (
      <button
        key={page}
        onClick={() => handlePageChange(page)}
        disabled={currentPage === page}
        className={currentPage === page ? style.active : ""}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className={style.paginate}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={style.arrowButton}
      >
        {"<"}
      </button>
      {renderPageButtons()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPage}
        className={style.arrowButton}
      >
        {">"}
      </button>
    </div>
  );
};

export default Paginate;