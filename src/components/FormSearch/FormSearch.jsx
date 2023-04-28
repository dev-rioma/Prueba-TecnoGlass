import "./FormSearch.css";
import ListOptions from "../ListOptions/ListOptions";
import Btn from "../Btn/Btn";

const FormSearch = ({ genres, handleGenre, handleClearFilter }) => {
  return (
    <form className="form-search">
      <ListOptions genres={genres} handleGenre={handleGenre} title={"Genre"} />
      <Btn handleClearFilter={handleClearFilter} title={"Clear Filter"} />
    </form>
  );
};

export default FormSearch;
