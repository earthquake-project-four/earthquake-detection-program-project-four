import Sidebar from "./Sidebar";
import Map from "./Map";
import Legend from "./Legend";
import axios from "axios";
import { useState, useEffect } from "react";

const Main = () => {
    const [earthquakeData, setEarthquakeData] = useState([]);

    useEffect(() => {

        axios({
            url: "https://earthquake.usgs.gov/fdsnws/event/1/query",
            params: {
                format: "geojson",
                starttime: "2023-05-20",
                minmagnitude: "2.5"
            }

        }).then(res => {
            const resData = res.data.features;
            const arrayOfEarthquakes = [];

            resData.forEach(earthquake => {
                const earthquakeObject = {
                    id: earthquake.id,
                    lat: earthquake.geometry.coordinates[1],
                    lng: earthquake.geometry.coordinates[0],
                    mag: earthquake.properties.mag,
                    title: earthquake.properties.title,
                    time: new Date(earthquake.properties.time).toLocaleTimeString()
                }
                arrayOfEarthquakes.push(earthquakeObject);
            });
            setEarthquakeData(arrayOfEarthquakes);

        }).catch(error => {
            console.log(error);
        });

    }, []);


    return (
        <main>
            <Sidebar />
            <div className="map-container">
                <Map />
                <Legend />
            </div>
        </main>
    )
};

export default Main;