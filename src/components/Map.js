import MapMarker from "./MapMarker";
import { MapContainer, TileLayer } from "react-leaflet";

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
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='Map data &copy; <a href="https://carto.com/">CartoDB</a>'
                />
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
