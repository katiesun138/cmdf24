import React, { useEffect, useMemo, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, Circle } from '@react-google-maps/api';
import { Box, Text, ButtonGroup, Card, CardBody, Flex, Heading, Icon, Link, filter, Stack, Select, Button } from '@chakra-ui/react';
import Header from './Header';
import HeaderMap from './HeaderMap';
import { click } from '@testing-library/user-event/dist/click';
import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { LuArrowUpRight, LuMapPin, LuPhone } from 'react-icons/lu';

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
    googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY || 'YOUR_API_KEY',
  });

  const [map, setMap] = React.useState(null);
  const [firstLocation, setFirstLocation] = useState({ long: Number, lat: Number });
  const [showFilteredClinics, setShowFilteredClinics] = useState(false);
  const [selectedRadius, setSelectedRadius] = useState(5);

  // Function to handle radius change
  const handleRadiusChange = (event: any) => {
    setSelectedRadius(event.target.value);
    console.log(`${event.target.value}`);
  };

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
    clickMe();
  };

  const clickMe = () => {
    setShowFilteredClinics(true);
    console.log('I HAVE SELECTED A LOCATION!!!!!');
  };

  const filteredClinics = clinicdata.filter(clinic => {
    const distance = getDistance(markerPosition.lat, markerPosition.lng, clinic.latitude, clinic.longitude);
    return distance <= selectedRadius; // Adjust the radius as needed
  });

  return isLoaded ? (
    <Flex
      direction="column"
      align="center"
      justify="center"
      width="100%"
      gap="0rem"
      paddingInline={['1rem', '2rem', '8rem']}
      maxWidth="1200px"
      marginBottom={filteredClinics.length > 1 ? 14 : 4}
      overflow="auto"
    >
      <HeaderMap />
      <Flex width="100%" height={['300px', '300px', '400px']}>
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            filter: locationClicked ? 'brightness(100%)' : 'brightness(70%)',
            marginBlock: '0.5rem',
            borderRadius: '24px',
            border: '1px solid rgba(0, 0, 0, 0.20)',
            height: '100%',
            zIndex: 1,
          }}
          center={{ lat: 49.2599, lng: -123.13 }}
          zoom={11.5}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={anotherMarker}
        >
          <Heading color="white" pointerEvents="none">
            Click anywhere on the map...
          </Heading>
          {/* Your map markers and circles */}
          {showFilteredClinics && (
            <>
              {filteredClinics.map((clinic, index) => (
                <Marker key={index} position={{ lat: clinic.latitude, lng: clinic.longitude }} />
              ))}
            </>
          )}
          <Marker position={{ lat: markerPosition.lat, lng: markerPosition.lng }} />
          <Circle
            center={{ lat: markerPosition.lat, lng: markerPosition.lng }}
            radius={Number(selectedRadius) * 1000}
            options={closeOptions}
          ></Circle>
        </GoogleMap>
        {!locationClicked && (
          <div style={{ zIndex: '3', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            <Heading color="white" textShadow="0 1px 2px rgba(0, 0, 10, 0.2)">
              Click anywhere on the map...
            </Heading>
          </div>
        )}
      </Flex>

      {/* <Box width="100%">
        <Button variant="hotpink" onClick={clickMe} paddingInline="36px">
          Search Surroundings
        </Button>
      </Box> */}
      {showFilteredClinics && (
        <Stack
          overflowY="scroll"
          boxShadow="0 -4px 12px rgba(0, 0, 10, 0.2)"
          width="100%"
          zIndex="3"
          bg="white"
          padding="24px"
          borderRadius="24px"
          maxHeight="50vh"
        >
          <Select border="1px solid rgba(0, 0, 0, 0.20)" value={selectedRadius} onChange={handleRadiusChange} maxWidth="150px" mb="4">
            {[1, 3, 5, 10, 15, 20, 25].map(radius => (
              <option key={radius} value={radius}>
                {`${radius} km`}
              </option>
            ))}
          </Select>
          <Heading fontSize="lg">Nearby clinics</Heading>
          <Flex direction="column" gap={['0', '0', '1rem']} align="left" width="100%">
            {filteredClinics.length > 0 ? (
              filteredClinics.map((clinic, index) => (
                <Flex key={index} justifyContent="space-between" width="100%" paddingBlock="0.2rem" borderWidth="1px" borderRadius="md">
                  <Stack maxWidth="60%">
                    <Heading size="1rem">
                      <Link href={clinic.url} noOfLines={1} textDecoration="none" color="black" _hover={{ color: 'blue.700' }}>
                        {clinic.name}
                      </Link>
                      <Flex direction={['column', 'column', 'row']} opacity="0.6" gap={['0', '0', '1rem']}>
                        <Box display="flex" alignItems="center" gap="0.5rem" color="#404353" fontSize="sm">
                          <Icon as={LuPhone} boxSize="1.0rem" />
                          <Text fontSize="sm" color="#404353" noOfLines={1}>
                            {clinic.phone}
                          </Text>
                        </Box>
                        <Box display="flex" alignItems="center" gap="0.5rem" color="#404353" fontSize="sm" maxWidth="80%">
                          <Icon as={LuMapPin} boxSize="1.0rem" />
                          <Text fontSize="sm" color="#404353" noOfLines={1}>
                            {clinic.addr}
                          </Text>
                        </Box>
                      </Flex>
                    </Heading>
                  </Stack>
                  <Link display="flex" alignItems="center" href={clinic.url}>
                    <Button variant="hotpink" paddingInline="12px">
                      View site
                      <Icon as={LuArrowUpRight} marginLeft="0.3rem" boxSize="1.0rem" />
                    </Button>
                  </Link>
                </Flex>
              ))
            ) : (
              <Box width="100%" borderWidth="1px" borderRadius="md" p="4">
                <Text size="sm" opacity="0.6" textAlign="center">
                  No clinics within your selected radius.
                </Text>
              </Box>
            )}
          </Flex>
        </Stack>
      )}
    </Flex>
  ) : (
    <></>
  );
};

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
