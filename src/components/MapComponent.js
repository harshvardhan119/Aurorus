import React, { useRef, useEffect, useCallback, useMemo, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/MapComponent.css'; 
const data = {
  states: [
    {
      name: "weekly",
      data: {
        predicted_year: 2025,
        current_requirement: 250,
        predicted_requirement: 300,
        report: "Increase reservoir capacity by 20% to meet future demands. Introduce advanced water conservation practices."
      }
    },
 
    {
      name: "Quaterly",
      data: {
        predicted_year: 2025,
        current_requirement: 320,
        predicted_requirement: 370,
        report: "Optimize irrigation practices and invest in desalination technologies to reduce water stress."
      }
    },
   
    {
      "name": "Yearly",
      "data": {
        "predicted_year": 2025,
        "current_requirement": 500,
        "predicted_requirement": 580,
        "report": "Reservoir expansion should focus on coastal areas. Promote water-saving technologies in agriculture."
      }
    }
  ]
};

const MapComponent = ({ statesData }) => {
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
      setError('no data availaible');
    }
  };
  const mapRef = useRef(null);
  const geojsonRef = useRef(null);
  const [dens, setDens] = useState("need to hover");
  

  const getColor = useCallback((d) => {
    return d > 1000
      ? '#ade8f4'
      : d > 500
      ? '#90e0ef'
      : d > 200
      ? '#48cae4'
      : d > 100
      ? '#00b4d8'
      : d > 50
      ? '#0096c7'
      : d > 20
      ? '#0077b6'
      : d > 10
      ? '#023e8a'
      : '#03045e';
  }, []);

  const style = useMemo(
    () => (feature) => ({
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
    }),
    [getColor]
  );

  const highlightFeature = useCallback((e) => {
    const layer = e.target;
    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7,
    });
    layer.bringToFront();
  
    setDens( `${layer.feature.properties.density}`);
  }, []);

  const resetHighlight = useCallback((e) => {
    geojsonRef.current.resetStyle(e.target);
    // Reset density display
    setDens("need to hover");
  }, []);

  const zoomToFeature = useCallback((e) => {
    mapRef.current.fitBounds(e.target.getBounds());
  }, []);

  const onEachFeature = useCallback(
    (feature, layer) => {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature,
      });
    },
    [highlightFeature, resetHighlight, zoomToFeature]
  );

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current, {
        center: [20, 77], // Center the map on India
        zoom: 5,
      });

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const geojsonLayer = L.geoJSON(statesData, {
        style: style,
        onEachFeature: onEachFeature,
      }).addTo(map);

      geojsonRef.current = geojsonLayer;

      // Static legend control
      const legend = L.control({ position: 'bottomright' });

      legend.onAdd = function () {
        const div = L.DomUtil.create('div', 'info legend');
        div.innerHTML =
          '<h4>Population Density</h4>' +
          '<i style="background:#ade8f4"></i> 0-10<br>' +
          '<i style="background:#90e0ef"></i> 10-20<br>' +
          '<i style="background:#48cae4"></i> 20-50<br>' +
          '<i style="background:#00b4d8"></i> 50-100<br>' +
          '<i style="background:#0096c7"></i> 100-200<br>' +
          '<i style="background:#0077b6"></i> 200-500<br>' +
          '<i style="background:#023e8a"></i> 500-1000<br>' +
          '<i style="background:#03045e"></i> 1000+<br>';
        return div;
      };

      // Add legend to the map
      legend.addTo(map);
    }
  }, [statesData, style, onEachFeature, getColor]);

  return (
    <div style={{ position: 'relative',height:"200px",width:"700px"}} className='mo'  >
      <div className='per'   ><a>Percapita water requirement(Litre):</a><a>{dens}</a></div>
     
          <select 
          value={selectedState} 
          onChange={(e) => setSelectedState(e.target.value)} 
          style={{ padding: '10px', width: '30%', marginBottom: '10px' }}
        >
          <option value="" disabled>Updated Duration</option>
          {data.states.map((state, index) => (
            <option key={index} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
      <MapContainer
        id="map"
      
       className="mi"
        center={[20, 77]} // Center the map on India
        zoom={5}
        ref={mapRef}
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <GeoJSON
          data={statesData}
          style={style}
          onEachFeature={onEachFeature}
          ref={geojsonRef}
        />
      </MapContainer>
      {/* <h1 style={{fontSize:'15px',position:'relative',left:'300px',bottom:800,width:'250px'}}>Percapita water consumption <a style={{marginLeft:'50px'}}>in Litre</a></h1> */}
      {/* <div className='legend' >
        
        <div style={{backgroundColor:"#ade8f4",height:"20px",width:"100px",marginBottom: '5px'}}><a >10 </a></div>
        <div style={{backgroundColor:"#90e0ef",height:"20px",width:"100px",marginBottom: '5px'}}><a>20 </a></div>
        <div style={{backgroundColor:"#48cae4",height:"20px",width:"100px",marginBottom: '5px'}}><a>40 </a></div>
        <div style={{backgroundColor:"#00b4d8",height:"20px",width:"100px",marginBottom: '5px'}}><a>50 </a></div>
        <div style={{backgroundColor:"#0096c7",height:"20px",width:"100px",marginBottom: '5px'}}><a>60</a></div>
        <div style={{backgroundColor:"#0077b6",height:"20px",width:"100px",marginBottom: '5px'}}><a>70 </a></div>
        <div style={{backgroundColor:"#023e8a",height:"20px",width:"100px",marginBottom: '5px'}}><a>90 </a></div>
        <div style={{backgroundColor:"#03045e",height:"20px",width:"100px"}}><a>100 </a></div>
       
     
      </div> */}
    </div>
  );
};

export default MapComponent;
