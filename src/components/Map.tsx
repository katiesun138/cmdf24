import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

interface MapProps {
  long: number;
  lat: number;
}

const containerStyle = {
  width: '1000px',
  height: '1000px',
};

const Map: React.FC<MapProps> = ({ long, lat }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_API_KEY',
  });

  const center = {
    lat: lat,
    lng: long,
  };

  console.log('I AM IN MAP AND THIS IS MY LOCATION, ', long, lat);
  const [map, setMap] = React.useState(null);

  const [markerPosition, setMarkerPosition] = useState<{ lat: number; lng: number }>({ lat, lng: long });

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const anotherMarker = (event:google.maps.MapMouseEvent) =>
  {
    const clickedLat = event.latLng!.lat();
    const clickedLng = event.latLng!.lng();
    center.lat = clickedLat;
    center.lng = clickedLng;
    setMarkerPosition({ lat: clickedLat, lng: clickedLng });
    
  }


  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={19} onLoad={onLoad} onUnmount={onUnmount} onClick={anotherMarker}>
      <Marker position={{ lat: markerPosition.lat, lng: markerPosition.lng }} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
function setMarkers(arg0: (prevMarkers: any) => any[]) {
    throw new Error('Function not implemented.');
}

