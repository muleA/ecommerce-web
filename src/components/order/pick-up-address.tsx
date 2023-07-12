import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  height: '400px',
  width: '100%',
};



const PickUpAddress = ({lat,long}:any) => {
    console.log("lat",lat)
    console.log("long",long)

    const center = {
        lat: lat??9.005401,
        lng: long??38.763612,
      };
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default PickUpAddress;
