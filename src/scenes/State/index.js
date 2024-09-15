


import { Box } from "@mui/material";
import Header from "../../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";
import ChartsWithDropdown from "../../components/Statesbar";

const Lineabc = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box 
      m="20px" 
      position="relative" 
      sx={{
        left: isMobile ? '70px' : '280px', // Adjust left for mobile to leave space for the sidebar
        width: isMobile ? '90%' : '100%' // Adjust width for mobile view
      }}
    >
      <Header 
        title="Water Utilisation" 
        subtitle="Line Graph Representation of water usage in India" 
      />
      <Box 
        sx={{ 
          height: '75vh', 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', // Stack graphs vertically on mobile, horizontally on larger screens
          gap: '20px', // Add some space between the graphs
          
        }}
      >
        <ChartsWithDropdown />
      </Box>
    </Box>
  );
};

export default Lineabc;
