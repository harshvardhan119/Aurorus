import React, { useState } from 'react';
import './Model.css'; // External CSS for responsiveness

const Model = () => {
  const [formData, setFormData] = useState({
    populationSize: '',
    gpcd: '',
    plantFactor: 'very low',
    precipitation: '',
    state: '',
    areaUnderAgriculture: '',
    bmc: '',
    demographicShift: '',
    scenario: 'high rainfall',
  });

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
    'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
    'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
    'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Prediction Model</h2>

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
        <label>Population Size (in crores):</label>
        <input
          type="number"
          name="populationSize"
          value={formData.populationSize}
          onChange={handleChange}
          placeholder="Enter population size"
          required
        />
      </div>

      {/* GPCD */}
      <div className="form-group">
        <label>GPCD (in numbers):</label>
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
        <label>Plant Factor:</label>
        <select name="plantFactor" value={formData.plantFactor} onChange={handleChange} required>
          <option value="very low">Very Low</option>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
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

      {/* Area Under Agriculture */}
      <div className="form-group">
        <label>Area Under Agriculture (in hectares):</label>
        <input
          type="number"
          name="areaUnderAgriculture"
          value={formData.areaUnderAgriculture}
          onChange={handleChange}
          placeholder="Enter area under agriculture"
          required
        />
      </div>

      {/* BMC */}
      <div className="form-group">
        <label>Projected Surge in water usage for development:</label>
        <input
          type="number"
          name="bmc"
          value={formData.bmc}
          onChange={handleChange}
          placeholder="Enter BMC"
          required
        />
      </div>

      {/* Demographic Shift */}
      <div className="form-group">
        <label>Demographic Shift:</label>
        <select name="scenario" value={formData.scenario} onChange={handleChange} required>
          <option value="Level1">Level1</option>
          <option value="Level2">Level2</option>
          <option value="Level3">Level3</option>
          <option value="Level4">Level4</option>
          <option value="Level5">Level5</option>
        </select>
      </div>

      {/* Scenario */}
      <div className="form-group">
        <label>Scenario:</label>
        <select name="scenario" value={formData.scenario} onChange={handleChange} required>
          <option value="high rainfall">High Rainfall</option>
          <option value="drought">Drought</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="form-group button-container">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Model;
