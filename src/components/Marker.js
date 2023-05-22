import { CircleMarker, Popup } from "react-leaflet";

const Marker = ({coords}) => {
    return (
        <CircleMarker center={coords} fillOpacity={1.0} radius={7} color="#a51b1b" fillColor="#a51b1b">
            <Popup>
                Pop!
            </Popup>
        </CircleMarker>
    )
}

export default Marker;
