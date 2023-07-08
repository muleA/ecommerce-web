import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  height: '400px',
  width: '100%',
};

const center = {
  lat: 9.005401,
  lng: 38.763612,
};

const DeliveryLocation = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDTF0CBwkgcLVTFJScwyvtiik2XxN_Bqwk">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default DeliveryLocation;
