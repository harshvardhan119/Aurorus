import React, { useRef, useEffect, useCallback, useMemo, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/MapComponent.css'; 


const Chloroplethreservoir = ({ statesData }) => {
  const mapRef = useRef(null);
  const geojsonRef = useRef(null);
  const [dens, setDens] = useState("-hover on State");
  const [selectedState, setSelectedState] = useState('');
  const [cap, setcap] = useState("");
  const [capb, setcapb] = useState("");
  const [capa, setcapa] = useState("");
  
  const [error, setError] = useState('');

  
  

  const getColor = useCallback((d) => {
    return d > 1000
      ? '#03045e'
      : d > 500
      ? '#023e8a'
      : d > 200
      ? '#0077b6'
      : d > 100
      ? '#0096c7'
      : d > 50
      ? '#FD8D3C'
      : d > 20
      ? '#FEB24C'
      : d > 10
      ? '#FED976'
      : '#FFEDA0';
  }, []);
  // function abc(){
  //       if(capa>cap){
  //       setcapb("Alert")
  //         }
  //         else{
  //       setcapb("No risk")
  //         }
  // };
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
    setSelectedState(`selectedState`)
    setDens(` ${layer.feature.properties.reservoirs}`);
    setcap(` ${layer.feature.properties.total_capacity_million_cubic_meters}`)
    setcapa(` ${layer.feature.properties.filled_capacity_million_cubic_meters}`)
  
    setcapb(` ${layer.feature.properties.result}`)
  }, []);

  const resetHighlight = useCallback((e) => {
    geojsonRef.current.resetStyle(e.target);
    // Reset density display
    setDens("-hover on state");
    setcap("")
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
          '<i style="background:#FFEDA0"></i> 0-10<br>' +
          '<i style="background:#FED976"></i> 10-20<br>' +
          '<i style="background:#FEB24C"></i> 20-50<br>' +
          '<i style="background:#FD8D3C"></i> 50-100<br>' +
          '<i style="background:#FC4E2A"></i> 100-200<br>' +
          '<i style="background:#E31A1C"></i> 200-500<br>' +
          '<i style="background:#BD0026"></i> 500-1000<br>' +
          '<i style="background:#800026"></i> 1000+<br>';
        return div;
      };

      // Add legend to the map
      legend.addTo(map);
    }
  }, [statesData, style, onEachFeature, getColor]);

  return (
    <div style={{ position: 'relative',}} className='chre1'>
      <div className='per'   style={{paddingTop: '10px',position:"relative",bottom:"20px", }}><b>Number of Reservoir:</b>{dens}</div>
      <div className='per'   style={{paddingTop: '10px',position:"relative",bottom:"20px", }}><b>Total Current Capacity (MCM):</b>{cap}</div>
      <div className='per'   style={{paddingTop: '10px',position:"relative",bottom:"20px", }}> <b>Predicted filled capacity 1-2 weeks(MCM):</b>{capa}</div>
      <div className='per'   style={{paddingTop: '10px',position:"relative",bottom:"20px", }}><b>Result:</b>{capb}</div>
      <MapContainer className='maep'
        id="map"
        
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
      {/* <div className='legend' style={{position: 'absolute', bottom: 550, right: -150, backgroundColor: 'white', padding: '10px', borderRadius: '5px'}}>
        <div style={{backgroundColor:"#FFEDA0",height:"20px",width:"100px",marginBottom: '5px'}}><a>10</a></div>
        <div style={{backgroundColor:"#FED976",height:"20px",width:"100px",marginBottom: '5px'}}><a>20</a></div>
        <div style={{backgroundColor:"#FEB24C",height:"20px",width:"100px",marginBottom: '5px'}}><a>40</a></div>
        <div style={{backgroundColor:"#FD8D3C",height:"20px",width:"100px",marginBottom: '5px'}}><a>50</a></div>
        <div style={{backgroundColor:"#FC4E2A",height:"20px",width:"100px",marginBottom: '5px'}}><a>60</a></div>
        <div style={{backgroundColor:"#E31A1C",height:"20px",width:"100px",marginBottom: '5px'}}><a>70</a></div>
        <div style={{backgroundColor:"#BD0026",height:"20px",width:"100px",marginBottom: '5px'}}><a>90</a></div>
        <div style={{backgroundColor:"#800026",height:"20px",width:"100px"}}><a>100</a></div>
        
      </div>
      */}
    </div>
  );
};

export default Chloroplethreservoir;
