import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

type Coords = {
  lng: number;
  lat: number;
};

interface GoogleMapComponentProps {
  coords: Coords;
}

const containerStyle = {
  width: '400px',
  height: '400px',
};

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ coords }) => {
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={containerStyle} center={coords} zoom={10}>
        <Marker position={coords} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
