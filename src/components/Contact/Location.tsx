import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "400px"
};

// Example location (e.g. New York)
const center = {
  lat: 40.7128,
  lng: -74.0060
};

const Map: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey={"AIzaSyA9vGSKB4IGunU9tSUNAHubOfHAPFjO_kE"}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        {/* Marker at the location */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
