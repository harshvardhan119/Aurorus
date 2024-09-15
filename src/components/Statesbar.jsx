import React, { useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";
import { useTheme, MenuItem, Select, FormControl, InputLabel, useMediaQuery } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData } from "../data/mockData";

const ChartsWithDropdown = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // State to hold selected state data
  const [selectedState, setSelectedState] = useState("India");

  // Extract the data for the selected state from mock data
  const getStateData = (stateId) => {
    const stateData = mockLineData.find((data) => data.id === stateId);
    return stateData ? stateData.data : [];
  };

  // Transform data for the bar chart format
  const getBarChartData = (stateId) => {
    const stateData = getStateData(stateId);
    return stateData.map((d) => ({
      year: d.x,
      consumption: d.y,
    }));
  };

  // Handle state change from dropdown
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  // Check if the screen size is mobile
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div style={{ padding: isMobile ? "10px" : "20px" }}>
      {/* Dropdown for state selection */}
      <FormControl fullWidth variant="outlined" style={{ marginBottom: "20px" }}>
        <InputLabel id="state-select-label">Select State</InputLabel>
        <Select
          labelId="state-select-label"
          value={selectedState}
          onChange={handleStateChange}
          label="Select State"
        >
          {mockLineData.map((state) => (
            <MenuItem key={state.id} value={state.id}>
              {state.id}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Container for charts */}
      <div style={{ 
        display: "flex", 
        flexDirection: isMobile ? "column" : "row", // Stack vertically on mobile
        gap: "20px",
        overflow: "hidden",
        justifyContent: "center",
        marginLeft: isMobile ? "0" : "auto", // Remove left margin on mobile
        marginRight: isMobile ? "0" : "auto" // Remove right margin on mobile
      }}>
        {/* Line Chart */}
        <div style={{ 
          height: "500px", 
          width: isMobile ? "110%" : "500px", // Full width on mobile
          minWidth: isMobile ? "0" : "auto" // Adjust minWidth for mobile
        }}>
          <ResponsiveLine
            data={[{ id: selectedState, data: getStateData(selectedState) }]}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: colors.grey[100],
                  },
                },
                legend: {
                  text: {
                    fill: colors.grey[100],
                  },
                },
                ticks: {
                  line: {
                    stroke: colors.grey[100],
                    strokeWidth: 1,
                  },
                  text: {
                    fill: colors.grey[100],
                  },
                },
              },
              legends: {
                text: {
                  fill: colors.grey[100],
                },
              },
              tooltip: {
                container: {
                  color: colors.primary[500],
                },
              },
            }}
            colors={{ scheme: "nivo" }}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "linear", min: "auto", max: "auto" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 0,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Years",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={{
              orient: "left",
              tickValues: 5,
              tickSize: 3,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Water per capita consumption",
              legendOffset: -40,
              legendPosition: "middle",
            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={8}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            // legends={[
            //   {
            //     anchor: "bottom-right",
            //     direction: "column",
            //     justify: false,
            //     translateX: 100,
            //     translateY: 0,
            //     itemsSpacing: 0,
            //     itemDirection: "left-to-right",
            //     itemWidth: 80,
            //     itemHeight: 20,
            //     itemOpacity: 0.75,
            //     symbolSize: 12,
            //     symbolShape: "circle",
            //     symbolBorderColor: "rgba(0, 0, 0, .5)",
            //     effects: [
            //       {
            //         on: "hover",
            //         style: {
            //           itemBackground: "rgba(0, 0, 0, .03)",
            //           itemOpacity: 1,
            //         },
            //       },
            //     ],
            //   },
            // ]}
          />
        </div>

        {/* Bar Chart */}
        <div style={{ 
          height: "400px", 
          width: isMobile ? "110%" : "700px", // Full width on mobile
          minWidth: isMobile ? "0" : "auto", // Adjust minWidth for mobile
          marginTop:"60px"
        }}>
          <ResponsiveBar 
            data={getBarChartData(selectedState)}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: colors.grey[100],
                  },
                },
                legend: {
                  text: {
                    fill: colors.grey[100],
                  },
                },
                ticks: {
                  line: {
                    stroke: colors.grey[100],
                    strokeWidth: 1,
                  },
                  text: {
                    fill: colors.grey[100],
                  },
                },
              },
              legends: {
                text: {
                  fill: colors.grey[100],
                },
              },
              tooltip: {
                container: {
                  color: colors.primary[500],
                },
              },
            }}
            keys={["consumption"]}
            indexBy="year"
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "nivo" }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Years",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Water per capita consumption",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            enableLabel={false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            // legends={[
            //   {
            //     dataFrom: "keys",
            //     anchor: "bottom-right",
            //     direction: "column",
            //     justify: false,
            //     translateX: 120,
            //     translateY: 0,
            //     itemsSpacing: 2,
            //     itemWidth: 100,
            //     itemHeight: 20,
            //     itemDirection: "left-to-right",
            //     itemOpacity: 0.85,
            //     symbolSize: 20,
            //     effects: [
            //       {
            //         on: "hover",
            //         style: {
            //           itemOpacity: 1,
            //         },
            //       },
            //     ],
            //   },
            // ]}
            role="application"
            barAriaLabel={function (e) {
              return e.id + ": " + e.formattedValue + " in year: " + e.indexValue;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartsWithDropdown;
