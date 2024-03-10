// import React, { useState } from 'react';
// import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

// interface MapProps {
//   long: number;
//   lat: number;
// }

// const containerStyle = {
//   width: '1000px',
//   height: '1000px',
// };

// const Map: React.FC<MapProps> = ({ long, lat }) => {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: 'YOUR_API_KEY',
//   });

//   const center = {
//     lat: lat,
//     lng: long,
//   };

//   console.log('I AM IN MAP AND THIS IS MY LOCATION, ', long, lat);
//   const [map, setMap] = React.useState(null);

// //   const [markerPosition, setMarkerPosition] = useState<{ lat: number; lng: number }>({ lat, lng: long });

//   const onLoad = React.useCallback(function callback(map: any) {
//     map.setZoom(15);
//   }, []);
//   //   const center = useMemo(() => ({ lat: firstLocation.lat, lng: firstLocation.long }), [markerPosition]);

//   const onUnmount = React.useCallback(function callback(map: any) {
//     setMap(null);
//   }, []);

//   const anotherMarker = (event:google.maps.MapMouseEvent) =>
//   {
//     const clickedLat = event.latLng!.lat();
//     const clickedLng = event.latLng!.lng();
//     center.lat = clickedLat;
//     center.lng = clickedLng;
//     setMarkerPosition({ lat: clickedLat, lng: clickedLng });

//   }

//   return isLoaded ? (
//     <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={19} onLoad={onLoad} onUnmount={onUnmount} onClick={anotherMarker}>
//       <Marker position={{ lat: markerPosition.lat, lng: markerPosition.lng }} />
//       <></>
//     </GoogleMap>
//   ) : (
//     <></>
//   );
// //     return (
// //         <>
// //         </>
// //     );
// // };

// // dummy export, delete this when working

// // export default React.memo(Map);
// // function setMarkers(arg0: (prevMarkers: any) => any[]) {
// //     throw new Error('Function not implemented.');
// }

// export default Map;

import React, { useEffect, useMemo, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, Circle } from '@react-google-maps/api';
import { Box, Button, ButtonGroup, Card, CardBody, Flex, Heading, Link, filter } from '@chakra-ui/react';
import { click } from '@testing-library/user-event/dist/click';
import { AdvancedMarker } from '@vis.gl/react-google-maps';

const Map = () => {
  interface MyLocation {
    long: number;
    lat: number;
  }

  const containerStyle = {
    width: '500px',
    height: '500px',
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_API_KEY',
  });

  const [map, setMap] = React.useState(null);
  const [firstLocation, setFirstLocation] = useState({ long: Number, lat: Number });
  const [showFilteredClinics, setShowFilteredClinics] = useState(false);

  const [locationClicked, setLocationClicked] = useState(false);

  useEffect(() => {
    // Get location when the component mounts
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log('Geolocation not supported');
    }

    function success(position: any) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setFirstLocation({ long: longitude, lat: latitude });
      setMarkerPosition({ lng: longitude, lat: latitude });
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }

    function error() {
      console.log('Unable to retrieve your location');
    }
  }, []); // Empty dependency array to run the effect only once on mount

  const [markerPosition, setMarkerPosition] = useState<{ lat: number; lng: number }>({ lat: 0, lng: 0 });

  const onLoad = React.useCallback(function callback(map: any) {
    map.setZoom(15);
  }, []);
  //   const center = useMemo(() => ({ lat: firstLocation.lat, lng: firstLocation.long }), [markerPosition]);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const anotherMarker = (event: google.maps.MapMouseEvent) => {
    const clickedLat = event.latLng!.lat();
    const clickedLng = event.latLng!.lng();
    setMarkerPosition({ lat: clickedLat, lng: clickedLng });
    setLocationClicked(true);
    setShowFilteredClinics(false);
  };

  const clickMe = () => {
    if (!locationClicked) {
      alert('Please select a location');
    } else {
      setShowFilteredClinics(true);
      console.log('I HAVE SELECTED A LOCATION!!!!!');
    }
  };

  const filteredClinics = clinicdata.filter(clinic => {
    const distance = getDistance(markerPosition.lat, markerPosition.lng, clinic.latitude, clinic.longitude);
    return distance <= 2.1; // Adjust the radius as needed
  });

  return isLoaded ? (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="95vh"
      width="80vh"
      marginBottom={filteredClinics.length > 1 ? 14 : 4}
      overflow="auto"
    >
      <Heading as="h2" size="xl">
        Search for Nearby Clinics
      </Heading>

      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '70vh', zIndex: 1 }}
        center={{ lat: 49.2599, lng: -123.13 }}
        zoom={11.5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={anotherMarker}
      >
        {/* Your map markers and circles */}
        {showFilteredClinics && (
          <>
            {filteredClinics.map((clinic, index) => (
              <Marker key={index} position={{ lat: clinic.latitude, lng: clinic.longitude }} />
            ))}
          </>
        )}
        <Marker position={{ lat: markerPosition.lat, lng: markerPosition.lng }} />
        <Circle center={{ lat: markerPosition.lat, lng: markerPosition.lng }} radius={700} options={closeOptions}></Circle>
        <Circle center={{ lat: markerPosition.lat, lng: markerPosition.lng }} radius={1400} options={middleOptions}></Circle>
        <Circle center={{ lat: markerPosition.lat, lng: markerPosition.lng }} radius={2100} options={farOptions}></Circle>
      </GoogleMap>

      <Box width="100%" p="4">
        <Button colorScheme="blue" onClick={clickMe} width="100%" mt="4">
          Search Surroundings
        </Button>
      </Box>

      {showFilteredClinics && (
        <Box width="100%" maxHeight="50vh" overflowY="auto">
          <Flex direction="column" align="left" width="100%" paddingBottom={50}>
            {filteredClinics.length > 0 ? (
              filteredClinics.map((clinic, index) => (
                <Box key={index} width="100%" boxShadow="md" borderWidth="1px" borderRadius="md" marginBottom="4">
                  <Heading size="md" p="4">
                    <Link href={clinic.url} textDecoration="none" color="blue.500" _hover={{ color: 'blue.700' }}>
                      {clinic.name}
                    </Link>
                    <Box color="gray.600" fontSize="sm">
                      {clinic.phone}
                    </Box>
                    <Box color="gray.600">{clinic.addr}</Box>
                  </Heading>
                </Box>
              ))
            ) : (
              <Box width="100%" boxShadow="md" borderWidth="1px" borderRadius="md" p="4">
                <Heading size="md">No clinics within your selected radius</Heading>
              </Box>
            )}
          </Flex>
        </Box>
      )}
    </Flex>
  ) : (
    <></>
  );
};

//   return isLoaded ? (
//     <>

//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={{ lat: 49.2599, lng: -123.13 }}
//         zoom={11.5}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//         onClick={anotherMarker}
//       >
//         {showFilteredClinics && (
//           <>
//             {filteredClinics.map((clinic, index) => (
//               <Marker key={index} position={{ lat: clinic.latitude, lng: clinic.longitude }} />
//             ))}
//           </>
//         )}
//         <Marker position={{ lat: markerPosition.lat, lng: markerPosition.lng }} />
//         <Circle center={{ lat: markerPosition.lat, lng: markerPosition.lng }} radius={700} options={closeOptions}></Circle>
//         <Circle center={{ lat: markerPosition.lat, lng: markerPosition.lng }} radius={1400} options={middleOptions}></Circle>
//         <Circle center={{ lat: markerPosition.lat, lng: markerPosition.lng }} radius={2100} options={farOptions}></Circle>

//         <></>
//       </GoogleMap>

//       {showFilteredClinics && filteredClinics.length > 0 ? (
//         <>
//           {filteredClinics.map((clinic, index) => (
//             <Box key={index} boxShadow="md" borderWidth="1px" borderRadius="md" marginBottom="4">
//               <Heading size="md" p="4">
//                 <Link href={clinic.url} textDecoration="none" color="blue.500" _hover={{ color: 'blue.700' }}>
//                   {clinic.name}
//                 </Link>
//                 <Box color="gray.600" fontSize="sm">
//                   {clinic.phone}
//                 </Box>
//                 <Box color="gray.600">{clinic.addr}</Box>
//               </Heading>
//             </Box>
//           ))}
//         </>
//       ) : (
//         showFilteredClinics && (
//           <Box boxShadow="md" borderWidth="1px" borderRadius="md" p="4">
//             <Heading size="md">No clinics within your selected radius</Heading>
//           </Box>
//         )
//       )}

//       <div>
//         <Button colorScheme="blue" onClick={clickMe}>
//           Search Surroundings
//         </Button>
//       </div>
//     </>
//   ) : (
//     <></>
//   );
// };

export default React.memo(Map);
function setMarkers(arg0: (prevMarkers: any) => any[]) {
  throw new Error('Function not implemented.');
}

let clinicdata = [
  {
    id: '1',
    name: `Everywoman’s Health Centre`,
    addr: '2525 Commercial Dr #210, Vancouver, BC',
    url: 'https://everywomanshealthcentre.ca/',
    phone: '(604) 322-6692',
    longitude: -123.069437437478,
    latitude: 49.26248474851346,
  },
  {
    id: '2',
    name: 'Elizabeth Bagshaw Clinic',
    addr: '1177 W Broadway 200 Floor 2, Vancouver, BC',
    url: 'https://bagshawclinic.ca/',
    phone: '+1 877-736-7171',
    longitude: -123.13061127590788,
    latitude: 49.26390139919271,
  },
  {
    id: '3',
    name: 'Willow Clinic',
    addr: '750 W Broadway Suite 1013, Vancouver, BC',
    url: 'https://willowclinic.ca/',
    phone: '(604) 709-5611',
    longitude: -123.1211974317311,
    latitude: 49.263179107259774,
  },
  {
    id: '4',
    name: "Vancouver Island Women's Clinic",
    addr: '284 Helmcken Rd Suite 104, Victoria, BC',
    phone: '(250) 480-7338',
    url: 'https://www.viwc.ca/',
    longitude: -123.4409543280751,
    latitude: 48.45548717133774,
  },
  {
    id: '5',
    name: `Women's Vita Medical Clinic`,
    addr: '1621 Dufferin Crescent Suite 203, Nanaimo, BC',
    phone: '(250) 591-9812',
    url: 'https://www.womensvita.ca/',
    longitude: -123.96352637204177,
    latitude: 49.20437991467278,
  },
  {
    id: '6',
    name: `Options for Sexual Health (Options)`,
    addr: '3550 E Hastings St, Vancouver, BC',
    url: 'https://www.optionsforsexualhealth.org/',
    phone: '(604) 731-4252',
    longitude: -123.02726255003252,
    latitude: 49.28144003993676,
  },

  {
    id: '7',
    name: `Vancouver Options for Sexual Health Clinic`,
    addr: '4500 Oak St, Vancouver, BC',
    url: 'https://www.optionsforsexualhealth.org/clinic/vancouver-opt-clinic/',
    phone: '(604) 731-4252',
    longitude: -123.12263259920157,
    latitude: 49.24460964152105,
  },

  {
    id: '8',
    name: `BC Women’s Hospital`,
    addr: '4500 Oak St, Vancouver, BC',
    phone: '(604) 875-2424',
    url: 'http://www.bcwomens.ca/',
    longitude: -123.12438177726797,
    latitude: 49.244148769697695,
  },
];

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: '#8BC34A',
  fillColor: '#8BC34A',
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: '#FBC02D',
  fillColor: '#FBC02D',
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: '#FF5252',
  fillColor: '#FF5252',
};
