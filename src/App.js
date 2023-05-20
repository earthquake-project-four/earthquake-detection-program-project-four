import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import "./styles/App.scss";

function App() {

    return (
        <MapContainer className="map" id="map" center={[0, 0]} zoom={2} >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="Map data &copy; OpenStreetMap contributors" />
        </MapContainer>
    );
}

export default App;