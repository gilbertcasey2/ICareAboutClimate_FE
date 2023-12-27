import React, { useEffect, useState } from 'react';
import { useGoogleMap } from '@react-google-maps/api'
import CensusJSON from '../../data/block-group.json'


const CensusBlocks = ({isLoaded, updateCensusBlock}) => {

    const map = useGoogleMap();
    const [selectedGeo, setSelectedGeo] = useState("");

    useEffect(() => {
        if (isLoaded) {
            loadMapShapes();
        }
      }, [isLoaded]);

    const loadMapShapes = () => {
        map.data.addGeoJson(CensusJSON);
        map.data.setStyle({
            fillColor: "rgba(1, 56, 90, 0.4)",
            fillOpacity: 0,
            strokeWeight: 1.5,
            clickable: true,
            strokeColor: '#1262A5'
          });

        // Set mouseover event for each feature.
        map.data.addListener('mouseover', function(event) {
            updateHoveredGeo(event)
        });

        // Set mouseover event for each feature.
        map.data.addListener('click', function(event) {
            updateSelectedGeo(event)
        });
    }
    var selected = "";
    const updateHoveredGeo = (event) => {
        var _hoveredGeoID = event.feature.getProperty('GEOID');
        map.data.setStyle(function(feature) {
            var geoID = feature.getProperty('GEOID');
            var opacity;
            if (geoID == selected) {
                opacity = 1;
            } else if (geoID == _hoveredGeoID) {
                opacity = .6;
            } else {
                opacity = 0;
            }
            return {
                fillColor: "rgba(1, 56, 90, 0.4)",
                fillOpacity: opacity,
                strokeWeight: 1.5,
                clickable: true,
                strokeColor: '#1262A5'
            };
        });
    }

    const updateSelectedGeo = (event) => {
        var _selectedGeoID = event.feature.getProperty('GEOID');
        document.getElementById('info-box').textContent = _selectedGeoID;
        selected = _selectedGeoID;
        updateCensusBlock(_selectedGeoID)
        map.data.setStyle(function(feature) {
            var geoID = feature.getProperty('GEOID');
            var opacity;
            if (geoID == selected) {
                opacity = 1;
            } else {
                opacity = 0;
            }
            return {
                fillColor: "rgba(1, 56, 90, 0.4)",
                fillOpacity: opacity,
                strokeWeight: 1.5,
                clickable: true,
                strokeColor: '#1262A5'
            };
        });
    }
    return <div>
    </div>
}

export default CensusBlocks;