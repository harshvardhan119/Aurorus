
import { Box, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  // Use media query to check for screen size
  const isMobile = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(max-width:1024px)");

  return (
    <Box
      m="20px"
      
      position="relative"
      left={isMobile ? "60px" : isTablet ? "300px" : "300px"} // Adjust left position for mobile/tablet
      width={isMobile ? "100%" : isTablet ? "80%" : "1145px"} // Adjust width for mobile/tablet
    >
      <Header   title="Water Consumption Statewise" subtitle="Each District consumption" />
      <Box   height="40vh" position="relative" left="00px">
        <BarChart />
      </Box>
      <h1>Details About Graph</h1>
      <p style={{marginLeft:"20px",fontSize:"25px"
        
        
      }} className="barba">The bar chart above provides a comprehensive overview of water consumption across various states in India. Notably, Uttar Pradesh emerges as the highest consumer of water, utilizing 2,200 million cubic meters (MCM) due to its large population and extensive agricultural activities. Rajasthan and Punjab follow closely with 1,900 MCM and 1,800 MCM, respectively, reflecting their water-intensive agricultural practices. States like Gujarat and Maharashtra also exhibit significant water usage, highlighting the demand in industrial sectors. On the other hand, smaller states such as Sikkim, Mizoram, and Nagaland show comparatively lower water consumption, underlining the varying demand based on population size and land use. This chart underscores the critical need for efficient water management policies to address the disparities in water usage and ensure sustainable practices across the country.</p>
    </Box>
  );
};

export default Bar;
