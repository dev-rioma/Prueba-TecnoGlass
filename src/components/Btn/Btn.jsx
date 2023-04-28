import "./Btn.css";

const Btn = ({ handleClearFilter, title }) => {
  return (
    <button className="hover" onClick={handleClearFilter}>
      {title}
    </button>
  );
};

export default Btn;
