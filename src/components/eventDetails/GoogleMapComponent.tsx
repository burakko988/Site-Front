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
  maxWidth: '600px',
  height: '600px',
  borderRadius: '20px',
  border: '8px ridge #01A3A4'
};

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ coords }) => {
  return (
    <LoadScript googleMapsApiKey="BURAYA API KEY GİR">
      <GoogleMap mapContainerStyle={containerStyle} center={coords} zoom={10}>
        <Marker position={coords} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
