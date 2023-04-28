import { createContext, useState, useRef, useEffect } from "react";

export const ApiContext = createContext();

export const ApicontextProvider = (props) => {
  const [series, setSeries] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [seriesPerPage] = useState(10);
  const allSeries = useRef([]);

  var api = `https://api.tvmaze.com/shows?`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setSeries(data);
      const dataGenres = data.map((obj) => obj.genres);
      setGenres(filterGenres(dataGenres));
      allSeries.current = data;
    })();
  }, [api]);

  //funcion de busqueda
  const handleSearch = (e) => {
    const search = allSeries.current.filter((serie) =>
      serie.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSeries(search);
  };

  const handleGenre = (e) => {
    const filt = allSeries.current.filter((serie) =>
      serie.genres.includes(e.target.value)
    );
    setSeries(filt);

    console.log(e.target.value);
  };

  //funcion obtener generos
  const filterGenres = (data) => {
    const genresUnique = new Set();
    data.forEach((arr) => {
      arr.forEach((genres) => {
        genresUnique.add(genres);
      });
    });
    const listGenres = Array.from(genresUnique);
    return listGenres;
  };

  // clear data
  const handleClearFilter = () => {
    setSeries(allSeries.current);
  };

  return (
    <ApiContext.Provider
      value={{
        series,
        setSeries,
        genres,
        setGenres,
        currentPage,
        setCurrentPage,
        seriesPerPage,
        allSeries,
        handleSearch,
        handleGenre,
        filterGenres,
        handleClearFilter,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};
