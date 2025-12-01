import { GoogleMap, LoadScriptNext, Marker } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from '@/assets/apiKeys';

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "0.5rem",
};

const center = { lat: 30.7046, lng: 76.7179 };

const Location: React.FC = () => {
  return (
    <LoadScriptNext googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default Location;
