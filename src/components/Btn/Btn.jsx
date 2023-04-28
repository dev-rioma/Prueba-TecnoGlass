import { Button } from "@mui/material";

const Btn = ({ handleClearFilter, title }) => {
  return (
    <Button variant="contained" onClick={handleClearFilter}>
      {title}
    </Button>
  );
};

export default Btn;
