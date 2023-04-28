import CardSerie from "../CardSerie/CardSerie";
import "./ListSeries.css";

const ListSeries = ({ series, currentSerie }) => {
  return (
    <div className="box-series">
      {series.length > 0 ? (
        <>
          {currentSerie.map((serie) => {
            return <CardSerie key={serie.id} serie={serie} />;
          })}
        </>
      ) : (
        <>No se encontro la busqueda {":("}</>
      )}
    </div>
  );
};

export default ListSeries;
