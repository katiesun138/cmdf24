import React, { useEffect, useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import Map from './Map';

interface MyLocation {
  long: number;
  lat: number;
}

const Location: React.FC = () => {
  const [myLoc, setMyLoc] = useState<MyLocation>({ long: 0, lat: 0 });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCQCRo-wYWlvKLNYH8xd_FbmnqGlHwl9Lg',
    libraries: ["places"],
  });

  useEffect(() => {
    // Get location when the component mounts
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }

    function success(position: any) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setMyLoc({ long: longitude, lat: latitude });
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
  }, []); // Empty dependency array to run the effect only once on mount

  if (!isLoaded) return <div>Loading...</div>;

  return <Map long={myLoc.long} lat = {myLoc.lat}/>;
};

export default Location;
