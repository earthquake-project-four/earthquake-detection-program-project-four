import { CircleMarker, Popup } from "react-leaflet";

const MapMarker = ({coords, radius, colour, title, time, hero}) => {
    return (
        <CircleMarker center={coords} fillOpacity={1.0} radius={radius} weight={"1.5"} color={"#000000"} fillColor={colour}>
            <Popup>
                <p>{title}</p>
                <p>{time}</p>
                <p>Attending to Event: {hero}</p>
            </Popup>
        </CircleMarker>
    )
}

export default MapMarker;
