// import { Box, Button, IconButton, Typography, useTheme,Grid } from "@mui/material";
// import { tokens } from "../../theme";
// import './dash.css';
// import Header from "../../components/Header";
// import LineChart from "../../components/LineChart";

// import BarChart from "../../components/BarChart";
// import StatBox from "../../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";

// import statesData from '../../data/us-states.json';
// import MapComponent from "../../components/MapComponent";
// import { FaHandHoldingWater } from "react-icons/fa";
// import { FcDam } from "react-icons/fc";
// import { MdWaterDrop } from "react-icons/md";
// import { GiWaterRecycling } from "react-icons/gi";

// const Dashboard = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   return (
//     <Box m="20px" position="relative" left="280px" width="1120px"  >
//       {/* HEADER */}
//       <Box display="flex" justifyContent="space-between" alignItems="center" >
//         <Header title="Detailed Analysis of India" />

        
//       </Box>
//       <div>
//       {/* GRID & CHARTS */}
//       <Box
//         display="grid"
//         gridTemplateColumns="repeat(12, 1fr)"
//         gridAutoRows="140px"
//         gap="20px"
//         className="dashboard-grid"
//       >
//         {/* ROW 1 */}
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
        
//         >
//           <StatBox
//             title="12,361 "
//             subtitle="Per Capita Water Consumption"
           
//             increase="+0.5"
//             icon={
//               <FaHandHoldingWater style={{fontSize:"33px"}}
//                 sx={{ color: colors.greenAccent[600], fontSize: "40px" }}
//               />
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="431,225"
//             subtitle="Dam Capacity"
            
//             increase="+0.01%"
//             icon={
//               <FcDam style={{fontSize:"33px"}}
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="15,336"
//             subtitle="Predicted per capita Consumption"
//             progress="0.30"
//             increase="+5%"
//             icon={
//               <MdWaterDrop style={{fontSize:"33px"}}
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="15,325"
//             subtitle="Water need to increase"
//             progress="0.80"
//             increase="+20%"
//             icon={
//               <GiWaterRecycling style={{fontSize:"33px"}}
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box></Box></div>
//         <div className="mapa" >
//         <h1 style={{position:"relative",left:"180px"}}>India Water Demand Heatmap </h1>
        
//       <MapComponent statesData={statesData} />






//       </div>
//         {/* ROW 2 */}
//         <div style={{display:"flex" }}>
//         <div className="aa"style={{padding:"0px",marginTop:"2px",marginLeft:"30px"}}>
//         <Box
//             style={{width:"400px"}}
//           gridColumn="span 8"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//           p="20px"
//           height="370px"
//         >
//           <Box
//           style={{width:"400px"}}
//             mt="25px"
//             p="0 30px"
//             display="flex "
//             justifyContent="space-between"
//             alignItems="center"
//           >
//            <Box>
//               <Typography
//                 variant="h5"
//                 fontWeight="600"
//                 color={colors.grey[100]}
//               >
//                Increase in water Consumption
//               </Typography>
//               <Typography
//                 variant="h3"
//                 fontWeight="bold"
//                 color={colors.greenAccent[400]}
//               >
//                 32% average
//               </Typography>
//             </Box>
              
//           </Box>
//           <Box height="250px" m="5px 0 0 0" width="400px" padding="10px" position="relative">
//             <LineChart isDashboard={true} />
//           </Box>
//         </Box>
//         <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//           overflow="auto"
//            width="400px"
//         >
        
        
//         </Box> </div>













//         {/* ROW 3 */}
//         <div className="bb" style={{padding:"10px",marginTop:"-6px"}}>
//         <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//           p="50px"
//             paddingLeft="80px"
//           width="300px"
//           height="370px"
//         >
         
          
//            <Typography variant="h5" fontWeight="600">
//             Region wise Water Consumption
//           </Typography> 
//           <Box
//             display="flex"
//             flexDirection="column"
           
//             mt="25px"
//             width="400px"
//           >
//             <ProgressCircle size="170" />
//             <Typography
//               variant="h5"
//               color={colors.greenAccent[400]}
//               sx={{ mt: "15px" }}
//                width="400px"
//             >
//               30% increase in North
//             </Typography>
//             <Typography color={colors.greenAccent[400]}>70%increase in South</Typography>
//           </Box> 
//         </Box> </div>




//         <div className="cc" style={{padding:"0px", height:"374px"}}>
//          <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//           width="360px"
//           height="374px"
         
          
//         >
//           <Typography
//             variant="h5"
//             fontWeight="600"
//             sx={{ padding: "30px 30px 0 30px" }}
//             width="400px"
//           >
//             Each State Water Consumption
//           </Typography>
//           <Box height="365px" mt="-20px" width="400px">
//             <BarChart isDashboard={true} />
//           </Box>
//         </Box> </div></div>
       
     
//     </Box>
//   );
// };

// export default Dashboard;

import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import './dash.css';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import statesData from '../../data/us-states.json';
import MapComponent from "../../components/MapComponent";
import { FaHandHoldingWater } from "react-icons/fa";
import { FcDam } from "react-icons/fc";
import { MdWaterDrop } from "react-icons/md";
import { GiWaterRecycling } from "react-icons/gi";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box 
      m="20px" 
      position="relative" 
      sx={{ 
        left: {
          xs: '80px',  // Less left offset on extra small screens
          sm: '70px', // Adjust left offset on small screens
          md: '280px' // Default left offset on medium screens and larger
        },
        width: {
          xs: '70%', // Almost full width on extra small screens
          sm: '80%',  // Adjust width on small screens
          md: '1120px' // Default width on medium screens and larger
        }
      }}
    >
      {/* HEADER */}
      <Box 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center"
        sx={{ 
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'flex-start'
          }
        }}
      >
        <Header 
          title="Detailed Analysis of India" 
        />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        className="dashboard-grid"
        sx={{
          '@media (max-width: 768px)': {
            gridTemplateColumns: 'repeat(1, 1fr)',
          }
        }}
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            '@media (max-width: 768px)': {
              gridColumn: 'span 1',
              marginBottom: '20px', // Add spacing between stacked items
            }
          }}
        >
          <StatBox
            title="12,361 "
            subtitle="Per Capita Water Consumption"
            increase="+0.5"
            icon={<FaHandHoldingWater style={{ fontSize: "33px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            '@media (max-width: 768px)': {
              gridColumn: 'span 1',
              marginBottom: '20px', // Add spacing between stacked items
            }
          }}
        >
          <StatBox
            title="431,225"
            subtitle="Dam Capacity"
            increase="+0.01%"
            icon={<FcDam style={{ fontSize: "33px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            '@media (max-width: 768px)': {
              gridColumn: 'span 1',
              marginBottom: '20px', // Add spacing between stacked items
            }
          }}
        >
          <StatBox
            title="15,336"
            subtitle="Predicted per capita Consumption"
            progress="0.30"
            increase="+5%"
            icon={<MdWaterDrop style={{ fontSize: "33px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            '@media (max-width: 768px)': {
              gridColumn: 'span 1',
              marginBottom: '20px', // Add spacing between stacked items
            }
          }}
        >
          <StatBox
            title="15,325"
            subtitle="Water need to increase"
            progress="0.80"
            increase="+20%"
            icon={<GiWaterRecycling style={{ fontSize: "33px" }} />}
          />
        </Box>
      </Box>
      <div className="mapa" style={{position:"relative"}}>
      <h1 className="mipi" >India Water Demand Heatmap</h1>
        
        <Box
        
        >
          <MapComponent statesData={statesData} />
        </Box>
      </div>

      {/* ROW 2 */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <Box
          style={{ padding: "0px", marginTop: "2px", marginLeft: "0px", width: "100%", maxWidth: "400px" }}
          backgroundColor={colors.primary[400]}
          p="20px"
          height="370px"
        >
          <Typography className="hai5" variant="h5" fontWeight="600" color={colors.grey[100]} >Increase in Water Consumption</Typography>
          <Typography className="hai1" variant="h3" fontWeight="bold" color={colors.greenAccent[400]} >32% average</Typography>
          <Box height="250px" m="5px 0 0 0" padding="10px" position="relative"  top ="30px" width="400px" left="-30px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          backgroundColor={colors.primary[400]}
          padding="50px"
          width="100%"
          maxWidth="330px"
          height="370px"
        >
          <Typography variant="h5" fontWeight="600" marginBottom="30px" className="region">Region Wise Water Consumption</Typography>
          <ProgressCircle size="170" left="20px"/>
          <Typography variant="h5"marginLeft="40px" color={colors.greenAccent[400]} sx={{ mt: "15px" }}>30% increase in North</Typography>
          <Typography marginLeft="40px" color={colors.greenAccent[400]}>70% increase in South</Typography>
        </Box>

        <Box
          backgroundColor={colors.primary[400]}
          width="100%"
          maxWidth="360px"
          height="374px"
        >
          <Typography variant="h5" fontWeight="600" sx={{ padding: "30px 30px 0 30px" }}>Each State Water Consumption</Typography>
          <Box height="365px" mt="-20px" width="420px" position="relative" left="-10px" top="-10px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Dashboard;
