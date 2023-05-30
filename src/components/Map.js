import MapMarker from "./MapMarker";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";

const Map = ({ earthquakeData }) => {
    const southWest = [-90, -180]; // Minimum latitude and longitude
    const northEast = [90, 180]; // Maximum latitude and longitude
    const bounds = [southWest, northEast];
    return (
        <section>
            <MapContainer
                center={[28, -68]}
                zoom={1.5}
                minZoom={1}
                maxZoom={6}
                zoomControl={false}
                bounds={bounds}
                maxBounds={bounds}
                maxBoundsViscosity={1.0}
                className="map"
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='Map data &copy; <a href="https://carto.com/">CartoDB</a>'
                />
                <ZoomControl position="topright" />
                {earthquakeData.map((earthquake) => {
                    return (
                        <MapMarker
                            key={earthquake.id}
                            coords={[earthquake.lat, earthquake.lng]}
                            radius={earthquake.mag * 1.5}
                            colour={earthquake.colour}
                            title={earthquake.title}
                            time={earthquake.time}
                        />
                    );
                })}
            </MapContainer>
        </section>
    );
};

export default Map;
