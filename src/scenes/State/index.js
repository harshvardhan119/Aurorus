import { Box } from "@mui/material";
import Header from "../../components/Header";

import LineChartWithDropdown from "../../components/States";

import ChartsWithDropdown from "../../components/Statesbar";


const Lineabc = () => {
  return (
    <Box m="20px" position="relative" left="280px" width="1145px">
      <Header title=" Water Utilisation" subtitle="Line Graph Representation of water usage in India" />
      <Box height="75vh">
       
        <ChartsWithDropdown/>
      </Box>
    </Box>
  );
};

export default Lineabc;
