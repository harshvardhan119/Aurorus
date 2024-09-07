import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px" position="relative" left="280px" width="1145px">
      <Header title="Region wise Pie Chart" subtitle="based on population and water consumption data" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
