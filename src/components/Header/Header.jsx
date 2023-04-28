import "./Header.css";
import CampSearch from "../CampSearch/CampSearch";

const Header = ({ handleSearch }) => {
  return (
    <header>
      <span className="logo">MovieApp</span>
      <CampSearch handleSearch={handleSearch} />
    </header>
  );
};

export default Header;
