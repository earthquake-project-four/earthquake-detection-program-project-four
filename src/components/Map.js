import Marker from "./Marker";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = () => {
    return (
        <section>
            <MapContainer center={[40, 0]} zoom={2} maxZoom={6} className="map">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker coords={[0, 0]} />
            </MapContainer>
        </section>
    )
};

export default Map;
