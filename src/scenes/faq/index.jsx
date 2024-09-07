import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px" position="relative" left="280px" width="900px">
      <Header title="Data Refrences" subtitle="Trusted Source of displayed Data" />

      <Accordion defaultExpanded >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Source of Dataset
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The data is taken from reputed government website which is 100% trusted and personaly verified
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Weekly Updates
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           We update our data every week so data shown here is up to date.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Trusted source
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li> https://www.mdpi.com/2220-9964/6/8/249 → *Evaluating the Impact of Meteorological Factors on Water Demand in the Las Vegas Valley Using Time-Series Analysis: 1990–2014*</li>
          <li> https://ieeexplore.ieee.org/document/8259791 → *Predictive Classification of Water Consumption Time Series Using Non-homogeneous Markov Models*</li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
           Tech Refrence
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li> https://cgwa-noc.gov.in/landingpage/Guidlines/NBC2016WatRequirement.pdf </li>
          <li> Estimation of water requirement for drinking and domestic use</li>
<li> https://cwc.gov.in/reservoirs-storage-bulletin </li>
<li> Reservoirs Storage Bulletin*</li>
<li> https://www.mdpi.com/2073-4441/13/3/310 </li>
<li> Water demand prediction using machine learning methods</li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Model Detail
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>https://www.mdpi.com/2220-9964/6/8/249 → *Evaluating the Impact of Meteorological Factors on Water Demand in the Las Vegas Valley Using Time-Series Analysis: 1990–2014*</li>
           <li> https://ieeexplore.ieee.org/document/8259791 → *Predictive Classification of Water Consumption Time Series Using Non-homogeneous Markov Models*</li>
           <li>https://cgwa-noc.gov.in/landingpage/Guidlines/NBC2016WatRequirement.pdf → Estimation of water requirement for drinking and domestic use</li>
           <li>https://cwc.gov.in/reservoirs-storage-bulletin → *Reservoirs Storage Bulletin*</li>
           <li> https://www.mdpi.com/2073-4441/13/3/310 → Water demand prediction using machine learning methods</li>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
