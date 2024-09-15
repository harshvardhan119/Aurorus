import React, { useState } from 'react';

// Sample JSON Data
const data = {
  states: [
    {
      name: "Andhra Pradesh",
      data: {
        year: 2025,
        population_density: 300,
        districts: 26,
        per_capita_water_consumption: 145,
        analysed_data: "High water consumption in urban areas"
      }
    },
    {
      name: "Maharashtra",
      data: {
        year: 2025,
        population_density: 365,
        districts: 36,
        per_capita_water_consumption: 130,
        analysed_data: "Balanced water distribution across districts"
      }
    },
    {
      name: "Karnataka",
      data: {
        year: 2025,
        population_density: 320,
        districts: 31,
        per_capita_water_consumption: 150,
        analysed_data: "Water scarcity in rural regions"
      }
    },
    {
      name: "Gujarat",
      data: {
        year: 2025,
        population_density: 308,
        districts: 33,
        per_capita_water_consumption: 140,
        analysed_data: "Moderate water usage with regional variation"
      }
    },
    {
      name: "Tamil Nadu",
      data: {
        year: 2025,
        population_density: 555,
        districts: 38,
        per_capita_water_consumption: 120,
        analysed_data: "High population density leading to stress on water resources"
      }
    },
    {
      name: "West Bengal",
      data: {
        year: 2025,
        population_density: 1029,
        districts: 23,
        per_capita_water_consumption: 115,
        analysed_data: "Extremely high population density affecting water supply"
      }
    },
    {
      name: "Uttar Pradesh",
      data: {
        year: 2025,
        population_density: 829,
        districts: 75,
        per_capita_water_consumption: 110,
        analysed_data: "Growing population, low water consumption"
      }
    },
    {
      name: "Rajasthan",
      data: {
        year: 2025,
        population_density: 200,
        districts: 33,
        per_capita_water_consumption: 135,
        analysed_data: "Low population density, high desert region water usage"
      }
    },
    {
      name: "Kerala",
      data: {
        year: 2025,
        population_density: 860,
        districts: 14,
        per_capita_water_consumption: 125,
        analysed_data: "Good rainfall but unequal distribution"
      }
    },
    {
      name: "Madhya Pradesh",
      data: {
        year: 2025,
        population_density: 236,
        districts: 52,
        per_capita_water_consumption: 150,
        analysed_data: "Large area, low population density, varied water consumption"
      }
    },
    {
      name: "Punjab",
      data: {
        year: 2025,
        population_density: 550,
        districts: 22,
        per_capita_water_consumption: 145,
        analysed_data: "Agriculture-driven water consumption"
      }
    },
    {
      name: "Haryana",
      data: {
        year: 2025,
        population_density: 573,
        districts: 22,
        per_capita_water_consumption: 155,
        analysed_data: "Agriculture and industrial use"
      }
    },
    {
      name: "Odisha",
      data: {
        year: 2025,
        population_density: 270,
        districts: 30,
        per_capita_water_consumption: 130,
        analysed_data: "Stable water resources with low stress"
      }
    }
  ]
};

function SearchStateForm() {
  const [selectedState, setSelectedState] = useState('');
  const [stateData, setStateData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const foundState = data.states.find(state => state.name === selectedState);

    if (foundState) {
      setStateData(foundState.data);
      setError('');  // Clear error if state is found
    } else {
      setStateData(null);
      setError('State not found');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Search State Data</h1>
      <form onSubmit={handleSearch}>
        <select 
          value={selectedState} 
          onChange={(e) => setSelectedState(e.target.value)} 
          style={{ padding: '10px', width: '80%', marginBottom: '10px' }}
        >
          <option value="" disabled>Select a state</option>
          {data.states.map((state, index) => (
            <option key={index} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
        <br />
        <button 
          type="submit" 
          style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Search
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {stateData && (
        <div style={{ textAlign: 'left', marginTop: '20px',fontSize:"20px",padding:'20px', color:'black'}} className='hi'>
          <h2>{selectedState} Data</h2>
          <p><strong>Year:</strong> {stateData.year}</p>
          <p><strong>Population Density:</strong> {stateData.population_density}</p>
          {/* <p><strong>Districts:</strong> {stateData.districts}</p> */}
          <p><strong>Per Capita Water Consumption:</strong> {stateData.per_capita_water_consumption}</p>
          <p><strong>Analysed Data:</strong> {stateData.analysed_data}</p>
        </div>
      )}
    </div>
  );
}

export default SearchStateForm;
