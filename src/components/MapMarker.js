import { CircleMarker, Popup } from "react-leaflet";

const MapMarker = ({coords, mag, colour, title, time}) => {
    return (
        <CircleMarker center={coords} fillOpacity={1.0} radius={mag} color={colour} fillColor={colour}>
            <Popup>
                <p>{title}</p>
                <p>{time}</p>
            </Popup>
        </CircleMarker>
    )
}

export default MapMarker;
