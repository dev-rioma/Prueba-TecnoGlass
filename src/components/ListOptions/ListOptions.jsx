import "./ListOptions.css";

const ListOptions = ({ genres, handleGenre, title }) => {
  return (
    <div className="list-options">
      <label>{title}:</label>
      <select onChange={handleGenre}>
        <option value="default" defaultValue="default"></option>
        {genres.map((genre, index) => {
          return (
            <option key={index} value={genre}>
              {genre}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ListOptions;
