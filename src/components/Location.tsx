import React, { useEffect, useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import Map from './Map';



const Location: React.FC = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCQCRo-wYWlvKLNYH8xd_FbmnqGlHwl9Lg',
    libraries: ['places'],
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map/>;
};

export default Location;
