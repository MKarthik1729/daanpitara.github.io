import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const containerStyle = {
  width: "100%",
  height: "100%", // Changed to 100% to fill the parent grid column
  borderRadius: "0.5rem", // Added rounded corners to match the Form
};

// Updated coordinates to match the screenshot (Sector 71, Mohali/Chandigarh)
const center = {
  lat: 30.7046, 
  lng: 76.7179
};

const Location: React.FC = () => {
  return (
    // Ideally, move LoadScript to your App.tsx or root to avoid reloading it on navigation
    // If this is the only map, this placement is fine.
    <LoadScript googleMapsApiKey="AIzaSyA9vGSKB4IGunU9tSUNAHubOfHAPFjO_kE">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15} // Increased zoom to match the street-level view in the screenshot
        options={{
            disableDefaultUI: true, // Cleaner look (optional, removes buttons)
            zoomControl: true,
        }}
      >
        {/* Marker at the location */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Location;