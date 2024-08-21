import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const visiblePages = 5; // Number of pages to show around the current page

  // Calculate the start and end page numbers to display
  let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  let endPage = Math.min(totalPages, startPage + visiblePages - 1);

  if (endPage - startPage < visiblePages - 1) {
    startPage = Math.max(1, endPage - visiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex justify-center items-center space-x-2">
        <li
          className={`page-item ${currentPage === 1 ? "opacity-50" : ""}`}
          aria-disabled={currentPage === 1}
        >
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="page-link px-3 py-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
          >
            &lt;
          </button>
        </li>
        {startPage > 1 && (
          <>
            <li className="page-item">
              <button
                onClick={() => onPageChange(1)}
                className="page-link px-3 py-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
              >
                1
              </button>
            </li>
            {startPage > 2 && (
              <li className="page-item">
                <span className="px-3 py-1 text-gray-700">...</span>
              </li>
            )}
          </>
        )}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
            aria-current={currentPage === number ? "page" : undefined}
          >
            <button
              onClick={() => onPageChange(number)}
              className={`page-link px-3 py-1 border border-gray-300 ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <li className="page-item">
                <span className="px-3 py-1 text-gray-700">...</span>
              </li>
            )}
            <li className="page-item">
              <button
                onClick={() => onPageChange(totalPages)}
                className="page-link px-3 py-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
              >
                {totalPages}
              </button>
            </li>
          </>
        )}
        <li
          className={`page-item ${currentPage === totalPages ? "opacity-50" : ""}`}
          aria-disabled={currentPage === totalPages}
        >
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="page-link px-3 py-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
          >
            &gt;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;