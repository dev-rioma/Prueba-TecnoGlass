import { Button } from "@mui/material";
import "./Btn.css";

const Btn = ({ handleClearFilter, title }) => {
  return (
    <Button className="hover" variant="contained" onClick={handleClearFilter}>
      {title}
    </Button>
  );
};

export default Btn;
