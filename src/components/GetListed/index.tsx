import { useRef, useState, useEffect } from "react";
import {
    GoogleMap,
    LoadScript,
    Autocomplete,
} from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "@/assets/apiKeys";

export default function GetListed() {
    const mapRef = useRef<google.maps.Map | null>(null);
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

    const [formData, setFormData] = useState({
        latitude: "",
        longitude: "",
        address: "",
        pincode: "",
    });

    const [marker, setMarker] = useState<google.maps.Marker | null>(null);
    const [center, setCenter] = useState({ lat: 40.7128, lng: -74.0060 }); // default fallback

    // Get user location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    setCenter({ lat, lng });
                    setFormData((prev) => ({
                        ...prev,
                        latitude: lat.toString(),
                        longitude: lng.toString(),
                    }));
                },
                (err) => console.error("Error getting location:", err)
            );
        }
    }, []);

    const onLoadMap = (map: google.maps.Map) => {
        mapRef.current = map;

        // Set initial marker at current location
        const initialMarker = new google.maps.Marker({
            position: center,
            map,
            draggable: true,
        });

        initialMarker.addListener("dragend", (e: google.maps.MapMouseEvent) => {
            if (!e.latLng) return;
            handleMarkerDrag(e.latLng.lat(), e.latLng.lng());
        });

        setMarker(initialMarker);
    };

    const onLoadAutocomplete = (ac: google.maps.places.Autocomplete) => {
        autocompleteRef.current = ac;
    };

    const onPlaceChanged = () => {
        const place = autocompleteRef.current?.getPlace();
        if (!place || !place.geometry) return;

        const lat = place.geometry.location?.lat() || 0;
        const lng = place.geometry.location?.lng() || 0;

        let postalCode = "";
        if (place.address_components) {
            const postalComponent = place.address_components.find((c) =>
                c.types.includes("postal_code")
            );
            postalCode = postalComponent?.long_name || "";
        }

        const formattedAddress = place.formatted_address || "";

        setFormData({
            latitude: lat.toString(),
            longitude: lng.toString(),
            address: formattedAddress,
            pincode: postalCode,
        });

        mapRef.current?.panTo({ lat, lng });
        mapRef.current?.setZoom(15);

        if (marker) {
            marker.setPosition({ lat, lng });
        }
    };

    const handleMarkerDrag = (lat: number, lng: number) => {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
            if (status === "OK" && results && results[0]) {
                const address = results[0].formatted_address;

                let pincode = "";
                const comp = results[0].address_components;
                const postal = comp.find((c) => c.types.includes("postal_code"));
                if (postal) pincode = postal.long_name;

                setFormData({
                    latitude: lat.toString(),
                    longitude: lng.toString(),
                    address,
                    pincode,
                });
            }
        });
    };

    const onMapClick = (e: google.maps.MapMouseEvent) => {
        if (!e.latLng) return;
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();

        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
            if (status === "OK" && results && results[0]) {
                const address = results[0].formatted_address;

                let pincode = "";
                const comp = results[0].address_components;
                const postal = comp.find((c) => c.types.includes("postal_code"));
                if (postal) pincode = postal.long_name;

                setFormData({
                    latitude: lat.toString(),
                    longitude: lng.toString(),
                    address,
                    pincode,
                });
            }
        });

        if (marker) {
            marker.setPosition({ lat, lng });
        }

        mapRef.current?.panTo({ lat, lng });
    };

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-4 lg:px-15 lg:gap-10">
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
                <h1 className="text-xl font-bold">Get Listed</h1>

                <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
                    <Autocomplete onLoad={onLoadAutocomplete} onPlaceChanged={onPlaceChanged}>
                        <input
                            type="text"
                            placeholder="Search a location..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </Autocomplete>

                    <GoogleMap
                        onLoad={onLoadMap}
                        onClick={onMapClick}
                        mapContainerClassName="w-full h-[400px] border rounded-md shadow"
                        zoom={10}
                        center={center}
                    />
                </LoadScript>
            </div>

            <div className="w-full lg:w-1/2 bg-white p-4 border rounded-md shadow flex flex-col gap-4">
                <h2 className="text-lg font-semibold">Selected Location Details</h2>

                <label className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Latitude</span>
                    <input
                        type="text"
                        value={formData.latitude}
                        onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
                        className="px-3 py-2 border rounded"
                    />
                </label>

                <label className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Longitude</span>
                    <input
                        type="text"
                        value={formData.longitude}
                        onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
                        className="px-3 py-2 border rounded"
                    />
                </label>

                <label className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Address</span>
                    <textarea
                        rows={3}
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="px-3 py-2 border rounded resize-none"
                        placeholder="Enter your address"
                    />
                </label>

                <label className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Pincode</span>
                    <input
                        type="text"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        className="px-3 py-2 border rounded"
                    />
                </label>
            </div>
        </div>
    );
}
