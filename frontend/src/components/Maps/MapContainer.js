import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import dummyData from "../../dummy";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const MapContainer = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAAvpCdYS-GBFmc-1bskYVNvTgppQA9tyI",
  });

  const [selectedPlace, setSelectedPlace] = useState(null);

  const onMarkerClick = (item) => {
    setSelectedPlace(item);
  };

  const onInfoWindowClose = () => {
    setSelectedPlace(null);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={4}>
      {dummyData.map((item, index) => (
        <Marker
          key={index}
          position={{ lat: item.latitude, lng: item.longitude }}
          onClick={() => onMarkerClick(item)}
        />
      ))}

      {selectedPlace && (
        <InfoWindow
          position={{
            lat: selectedPlace.latitude,
            lng: selectedPlace.longitude,
          }}
          onCloseClick={onInfoWindowClose}
        >
          <div>
            <h1>{selectedPlace.name}</h1>
            <p>{selectedPlace.place}</p>
            <p>{selectedPlace.description}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default MapContainer;
