
import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import useMediaQuery from "@mui/material/useMediaQuery";

const Line = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box 
      m="20px" 
      position="relative" 
      sx={{
        left: isMobile ? '70px' : '280px', // Adjust left position for mobile view
        width: isMobile ? '90%' : '1145px' // Adjust width for mobile view
      }}
    >
      <Header 
        title="Water Utilisation" 
        subtitle="Line Graph Representation of water usage in India's different States" 
      />
      <Box height="50vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
