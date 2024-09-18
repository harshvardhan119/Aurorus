

import { Box, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  // Check if the screen size is smaller than 960px (for mobile and tablet)
  const isMobile = useMediaQuery("(max-width: 960px)");

  return (
    <Box
      m="20px"
      sx={{
        position: "relative",
        left: isMobile ? "60px" : "280px",  // Adjust left position for mobile
        width: isMobile ? "80%" : "1145px",  // Adjust width for mobile
        marginRight: isMobile ? "20px" : "0px" // Add margin on mobile to prevent it from extending too far
      }}
    >
      <Header
        title="Region wise Pie Chart"
        subtitle="Based on population and water consumption data"
      />
      <Box
        height="50vh"
        sx={{
          padding: isMobile ? "10px" : "0px", // Add padding for mobile view
        }}
      >
        <PieChart />
      </Box>
      <h1>Detail of Pie Chart</h1>
      <p style={{marginLeft:"20px",fontSize:"30px" }} className="piepara">


The pie chart above dynamically fetches real-time data to display water requirements across the four major regions of India: North, South, East, and West. The northern region, encompassing states like Uttar Pradesh, Punjab, and Haryana, currently exhibits the highest water demand, contributing around 40% of the total requirement due to its large population and intensive agricultural activities.</p>
    </Box>
  );
};

export default Pie;
