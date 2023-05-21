import {MapContainer, TileLayer} from 'react-leaflet';
import './styles/App.scss';

function App() {
	fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-05-06&minmagnitude=6.0')
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			// Perform any further processing or display the data
		})
		.catch((error) => {
			console.error('Error:', error);
			// Handle the error
		});
	return (
		<MapContainer className="map" id="map" center={[0, 0]} zoom={2}>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="Map data &copy; OpenStreetMap contributors" />
		</MapContainer>
	);
}

export default App;
