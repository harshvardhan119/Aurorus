

import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line';
import './Model.css'; // Ensure CSS is correctly applied
import { useTheme } from '@mui/material';
import { tokens } from '../theme'; // Adjust the path according to your project structure

const Model = () => {
  const [formData, setFormData] = useState({
    state: '',
    population_size: '',
    gpcd: '',
    plant_factor: '',
    precipitation: '',
    cultivated_land: '',
    demographic_shift: '',
    curr_year: 2024, // Static year
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState(null);

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
    'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
    'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
    'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: isNaN(value) ? value : Number(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backendaurorus.vercel.app/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      const result = await response.json();
      setSubmittedData(result.parameters); // Set the parameters array directly
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  // Prepare data for the chart
  const prepareChartData = (data) => [
    {
      id: 'Baseline',
      color: 'hsl(207, 70%, 50%)',
      data: data.map(({ year, baseline }) => ({ x: year.toString(), y: baseline })),
    },
    {
      id: 'Predicted Requirement',
      color: 'hsl(142, 70%, 50%)',
      data: data.map(({ year, predicted_requirement }) => ({ x: year.toString(), y: predicted_requirement })),
    },
    // {
    //   id: 'Actual Requirement',
    //   color: 'hsl(330, 70%, 50%)',
    //   data: data.map(({ year, actual_requirement }) => ({ x: year.toString(), y: actual_requirement })),
    // },
  ];

  // Chart component
  const LineChart = ({ data }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    if (!data || data.length === 0) return <p>No data available</p>;
  
    return (
      <div style={{ height: '600px' }}> {/* Ensure the chart has height */}
        <ResponsiveLine
          data={prepareChartData(data)}
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
          colors={{ scheme: 'nivo' }}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto', // Automatically adjusts the minimum value based on the data
            max: 'auto', // Automatically adjusts the maximum value based on the data
            stacked: false, // Ensure stacking is disabled
            reverse: false,
          }}
          yFormat=" >-.2f"
          curve="catmullRom"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Year',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 3,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Requirement',
            legendOffset: -40,
            legendPosition: 'middle',
            // Automatically determine appropriate tick values
            tickValues: 'auto', // This dynamically sets the number of ticks based on the data
          }}
          enableGridX={false}
          enableGridY={true} // Enable grid on Y-axis for better visibility
          pointSize={8}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    );
  };
  

  // Table component
  const DataTable = ({ data }) => {
    if (!data || data.length === 0) return null;

    return (
      <table className="data-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Baseline</th>
            <th>Predicted Requirement</th>
            {/* <th>Actual Requirement</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map(({ year, baseline, predicted_requirement, actual_requirement }) => (
            <tr key={year}>
              <td>{year}</td>
              <td>{baseline.toFixed(4)}</td>
              <td>{predicted_requirement.toFixed(4)}</td>
              {/* <td>{actual_requirement.toFixed(4)}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="form-container">
      <h2>Prediction Model</h2>
      <form onSubmit={handleSubmit}>
        {/* State */}
        <div className="form-group">
          <label>State:</label>
          <select name="state" value={formData.state} onChange={handleChange} required>
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        {/* Population Size */}
        <div className="form-group">
          <label>Population Size (in numbers):</label>
          <input
            type="number"
            name="population_size"
            value={formData.population_size}
            onChange={handleChange}
            placeholder="Enter population size"
            required
          />
        </div>

        {/* GPCD */}
        <div className="form-group">
          <label>GPCD (Gallons Per Capita Per Day):</label>
          <input
            type="number"
            name="gpcd"
            value={formData.gpcd}
            onChange={handleChange}
            placeholder="Enter GPCD"
            required
          />
        </div>

        {/* Plant Factor */}
        <div className="form-group">
          <label>Plant Factor (e.g., 1.5):</label>
          <input
            type="number"
            name="plant_factor"
            value={formData.plant_factor}
            onChange={handleChange}
            step="0.1"
            placeholder="Enter plant factor"
            required
          />
        </div>

        {/* Precipitation */}
        <div className="form-group">
          <label>Precipitation (in mm):</label>
          <input
            type="number"
            name="precipitation"
            value={formData.precipitation}
            onChange={handleChange}
            placeholder="Enter precipitation"
            required
          />
        </div>

        {/* Cultivated Land */}
        <div className="form-group">
          <label>Cultivated Land (in hectares):</label>
          <input
            type="number"
            name="cultivated_land"
            value={formData.cultivated_land}
            onChange={handleChange}
            placeholder="Enter cultivated land"
            required
          />
        </div>

        {/* Demographic Shift */}
        <div className="form-group">
          <label>Demographic Shift (%):</label>
          <input
            type="number"
            name="demographic_shift"
            value={formData.demographic_shift}
            onChange={handleChange}
            step="0.1"
            placeholder="Enter demographic shift"
            required
          />
        </div>

        {/* Current Year */}
        <div className="form-group">
          <label>Current Year:</label>
          <input
            type="number"
            name="curr_year"
            value={formData.curr_year}
            onChange={handleChange}
            placeholder="Enter current year"
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {error && <p className="error-message">Error: {error}</p>}
      {submittedData && (
        <>
          <LineChart data={submittedData} />
          <DataTable data={submittedData} />
        </>
      )}
    </div>
  );
};

export default Model;
