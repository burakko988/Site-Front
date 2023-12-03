import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

type Coords = {
  lng: number;
  lat: number;
};

interface GoogleMapComponentProps {
  coords: Coords;
}

const containerStyle = {
  height: '350px',
  borderRadius: '20px',
  border: '8px ridge #01A3A4',
};

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ coords }) => {
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={coords} zoom={10}>
        <Marker position={coords} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
