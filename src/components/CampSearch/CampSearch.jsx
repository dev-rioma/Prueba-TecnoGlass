import "./CampSearch.css";

const CampSearch = ({ handleSearch }) => {
  return (
    <div className="input-text">
      {/* <label>Search:</label> */}
      <input type="text" onChange={handleSearch} placeholder="Search " />
    </div>
  );
};

export default CampSearch;
