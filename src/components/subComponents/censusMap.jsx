import React, { useState } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import CensusBlocks from './censusBlocks';

const mapContainerStyle = {
  width: '100%',
  height: '550px',
};
const center = {
  lat: 43.655431, // default latitude
  lng: -70.271342, // default longitude
};

const mapStyle = [{
  'featureType': 'all',
  'elementType': 'all',
  'stylers': [{'visibility': 'off'}]
}, {
  'featureType': 'landscape',
  'elementType': 'geometry',
  'stylers': [{'visibility': 'on'}, {'color': '#fcfcfc'}]
}, {
  'featureType': 'water',
  'elementType': 'labels',
  'stylers': [{'visibility': 'off'}]
}, {
  'featureType': 'water',
  'elementType': 'geometry',
  'stylers': [{'visibility': 'on'}, {'hue': '#5f94ff'}, {'lightness': 60}]
}, ];

const CensusMap = ({changeForm, count}) => {
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAx1g4cpfK_pOqevudQCoHrdPhxrOIAIiU',
  });

  const [blockSelected, setBlockSelected] = useState();

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  } 
  
  const updateCensusBlock = (censusBlock) => {
    setBlockSelected(censusBlock)
    console.log("updated census block")
    changeForm(count, 1, false, censusBlock)
  }

  return <div className="mapContainer">
    <h6>Where do you live? Please select your neighborhood. *</h6>
    <p>Census block: {blockSelected ? blockSelected : <span className='italic'>No census block selected</span>}</p>
      <GoogleMap
        id="googleMap"
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        styles={mapStyle}
      >
        <CensusBlocks isLoaded={isLoaded} updateCensusBlock={updateCensusBlock} />
      </GoogleMap>
    </div>;
}

export default CensusMap;