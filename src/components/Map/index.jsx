import React, {useState} from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import { Main } from "./styled";
require('dotenv').config()

const Component = ({data}) => {
  const longitud = data.lon;
  const latitud = data.lat;
  const libraries = ["places"];
  const mapContainerStyle = { width: "100 vw", height: "100vh" };
  const center = { lat: 34.94867558576501, lng: -117.88731205693799};
  const options = { disableDefaultUI: true };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDI1q0KGvEGkuqJDxaFJPbiLvbLLJJZZYE",
    libraries,
  });

  const [markers, setMarkers] = useState({lat: 34.94867558576501, lng: -117.88731205693799});

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

const handleMark =() => {
  setMarkers({lat:latitud, lng: longitud});
}

  return (
    <Main>
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10.5}
          center={center}
          options={options}
        >
            <Marker
            handleMark={handleMark}
              position={markers}
            />
        </GoogleMap>
      </div>
    </Main>
  );
};

export { Component as Map };
export default Component;
