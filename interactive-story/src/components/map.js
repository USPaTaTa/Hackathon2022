import React from "react";

import "./map.css";

import { GoogleMap, LoadScript } from "@react-google-maps/api";


const Map = () => {

    const containerStyle = {
        width: '400px',
        height: '400px',
      }
      
      const center = {
        lat:43.232147904061954,
        lng:0.07800678873900235,
      }
        return (
        <LoadScript
                googleMapsApiKey='AIzaSyAsOBWIQFINVv2C8QpJ2fHxizD1bDxXP70'
            >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
            </GoogleMap>
        </LoadScript>
        );
      };  

export default Map;