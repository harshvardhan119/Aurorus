import React, { useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData } from "../data/mockData";

const LineChartWithDropdown = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // State to hold selected state data
  const [selectedState, setSelectedState] = useState("India");

  // Extract the data for the selected state from mock data
  const getStateData = (stateId) => {
    const stateData = mockLineData.find((data) => data.id === stateId);
    console.log("State data:", stateData); // Debugging the data here
    return stateData ? stateData.data : [];
  };

  // Handle state change from dropdown
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div >
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

      {/* Line Chart */}
      <div style={{height:"500px",width:"700px"}}>
      {getStateData(selectedState).length > 0 ? (
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
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      ) : (
        <p>No data available for {selectedState}</p>
      )}</div>
    </div>
  );
};

export default LineChartWithDropdown;
