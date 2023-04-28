import { useContext } from "react";
import FormSearch from "../components/FormSearch/FormSearch";
import ListSeries from "../components/ListSeries/ListSeries";
import { Pagination, PaginationItem } from "@mui/material";
import { ApiContext } from "../context/Apicontext";

const Home = () => {
  const {
    series,
    genres,
    currentPage,
    setCurrentPage,
    seriesPerPage,
    handleGenre,
    handleClearFilter,
  } = useContext(ApiContext);

  //paginatio data
  const indexOfLastSeries = currentPage * seriesPerPage;
  const indexOfFirstSeries = indexOfLastSeries - seriesPerPage;
  const currentSerie = series.slice(indexOfFirstSeries, indexOfLastSeries);

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <FormSearch
        genres={genres}
        handleGenre={handleGenre}
        handleClearFilter={handleClearFilter}
      />
      <ListSeries series={series} currentSerie={currentSerie} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          style={{ justifyContent: "center" }}
          count={Math.ceil(series.length / seriesPerPage)}
          page={currentPage}
          onChange={handlePaginationChange}
          color="primary"
          sx={{
            "& .MuiPaginationItem-page": {
              color: "white",
              "&:hover": { backgroundColor: "transparent" },
            },
            "& .Mui-selected": { color: "white" },
            "& .MuiSvgIcon-root": { fill: "white" },
          }}
          boundaryCount={2}
          siblingCount={1}
          showFirstButton
          showLastButton
          renderItem={(item) => (
            <PaginationItem
              {...item}
              sx={{
                color: item.type === "page" && "white",
                "&.Mui-selected": { backgroundColor: "primary.main" },
                "&.Mui-selected:hover": { backgroundColor: "primary.dark" },
              }}
            />
          )}
        />
      </div>
    </>
  );
};

export default Home;
