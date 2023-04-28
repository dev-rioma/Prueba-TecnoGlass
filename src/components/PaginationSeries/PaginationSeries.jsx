import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";

import "./PaginationSeries.css";

const PaginationSeries = ({
  series,
  seriesPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const [activate, setActivate] = useState(1);
  const pageNumbers = [];

  const handleClick = (i) => {
    setActivate(i);
  };

  for (let i = 1; i <= Math.ceil(series.length / seriesPerPage); i++) {
    pageNumbers.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => {
          setCurrentPage(i);
          handleClick(i);
        }}
        className="page-item"
        style={{ backgroundColor: activate === i ? "yellow" : "white" }}
      >
        {i}
      </Pagination.Item>
    );
  }

  return <Pagination className="pagination">{pageNumbers}</Pagination>;
};

export default PaginationSeries;
