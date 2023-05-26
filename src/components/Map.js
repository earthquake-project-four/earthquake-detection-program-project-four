import MapMarker from "./MapMarker";
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";

const Map = ({ earthquakeData }) => {
    return (
        <section>
            <MapContainer
                center={[0, 0]}
                zoom={2}
                minZoom={2}
                maxZoom={6}
                className="map"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {earthquakeData.map((earthquake) => {
                    return (
                        <MapMarker
                            key={earthquake.id}
                            coords={[earthquake.lat, earthquake.lng]}
                            mag={earthquake.mag * 1.5}
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
