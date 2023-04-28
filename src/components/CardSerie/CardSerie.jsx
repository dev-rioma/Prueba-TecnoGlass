import "./CardSerie.css";
import { BsStarFill } from "react-icons/bs";

const CardSerie = ({ serie }) => {
  return (
    <div className="card-serie">
      <img src={serie.image?.medium} alt={serie.name} />
      <div className="box-data">
        <p>
          {serie.name.length > 15
            ? serie.name.slice(0, 14) + "..."
            : serie.name}
        </p>
        <div>
          <BsStarFill style={{ color: "yellow" }} />
          <span>{serie.rating.average}</span>
        </div>
      </div>
    </div>
  );
};

export default CardSerie;
