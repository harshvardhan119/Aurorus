import React, { useState } from 'react';
import './ForecastForm.css'

// Sample JSON Data
const data = {
  states: [
    {
      name: "Andhra Pradesh",
      data: {
        predicted_year: 2025,
        current_requirement: 250,
        predicted_requirement: 300,
        report: "Increase reservoir capacity by 20% to meet future demands. Introduce advanced water conservation practices."
      }
    },
    {
      name: "Maharashtra",
      data: {
        predicted_year: 2025,
        current_requirement: 400,
        predicted_requirement: 460,
        report: "Water recycling systems should be implemented in urban areas. Encourage rainwater harvesting in rural zones."
      }
    },
    {
      name: "Karnataka",
      data: {
        predicted_year: 2025,
        current_requirement: 320,
        predicted_requirement: 370,
        report: "Optimize irrigation practices and invest in desalination technologies to reduce water stress."
      }
    },
    {
      "name": "Gujarat",
      "data": {
        "predicted_year": 2025,
        "current_requirement": 280,
        "predicted_requirement": 330,
        "report": "Explore inter-state water transfer to balance shortages. Regularly maintain and modernize existing reservoirs."
      }
    },
    {
      "name": "Tamil Nadu",
      "data": {
        "predicted_year": 2025,
        "current_requirement": 500,
        "predicted_requirement": 580,
        "report": "Reservoir expansion should focus on coastal areas. Promote water-saving technologies in agriculture."
      }
    },
    {
      "name": "West Bengal",
      "data": {
        "predicted_year": 2025,
        "current_requirement": 600,
        "predicted_requirement": 700,
        "report": "Prioritize flood control measures while increasing capacity. Encourage community-level water conservation efforts."
      }
    },
    {
      "name": "Uttar Pradesh",
      "data": {
        "predicted_year": 2025,
        "current_requirement": 700,
        "predicted_requirement": 800,
        "report": "Revise urban water policies for industrial areas. Upgrade water storage infrastructure."
      }
    },
    {
      "name": "Rajasthan",
      "data": {
        "predicted_year": 2025,
        "current_requirement": 220,
        "predicted_requirement": 260,
        "report": "Maximize groundwater recharge efforts and expand dam storage. Implement widespread rainwater harvesting."
      }
    },
    {
      "name": "Kerala",
      "data": {
        "predicted_year": 2025,
        "current_requirement": 430,
        "predicted_requirement": 500,
        "report": "Ensure reservoirs in flood-prone areas are reinforced. Improve water management for agricultural practices."
      }
    },
    {
      "name": "Madhya Pradesh",
      "data": {
        "predicted_year": 2025,
        "current_requirement": 290,
        "predicted_requirement": 340,
        "report": "Increase reservoir capacity by 15% and focus on watershed management. Build community awareness on water conservation."
      }
    }
  ]
};
   
  
function ForecastForm() {
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
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center', position:"relative",left:"20px"}}>
      <h1>Forecast Reservoir Capacity</h1>
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
        <div  className='hi'>
          <h3>{selectedState} Forecast Data</h3>
          <p><strong>Predicted Year:</strong> {stateData.predicted_year}</p>
          <p><strong>Current Requirement:</strong> {stateData.current_requirement} million cubic meters</p>
          <p><strong>Predicted Requirement:</strong> {stateData.predicted_requirement} million cubic meters</p>
          <p><strong>Report:</strong> {stateData.report}</p>
        </div>
      )}
    </div>
  );
}

export default ForecastForm;
