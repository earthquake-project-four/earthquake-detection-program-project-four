import Sidebar from "./Sidebar";
import Map from "./Map";
import Legend from "./Legend";
import { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
    const [earthquakeData, setEarthquakeData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const currentDate = new Date();
        const startTime = new Date(
            currentDate.getTime() - 24 * 60 * 60 * 1000
        ).toISOString();
        axios({
            url: "https://earthquake.usgs.gov/fdsnws/event/1/query",
            params: {
                format: "geojson",
                starttime: startTime,
                minmagnitude: "2.5",
            },
        })
            .then((res) => {
                const results = res.data.features;
                const arrayOfEarthquakes = results.map((earthquake) => {
                    let color, intensity;
                    if (earthquake.properties.mag < 3.5) {
                        color = "#fddd59";
                        intensity = "low";
                    } else if (earthquake.properties.mag < 6) {
                        color = "#ff914d";
                        intensity = "medium";
                    } else if (earthquake.properties.mag < 7) {
                        color = "#ff3131";
                        intensity = "high";
                    } else {
                        color = "#a51b1b";
                        intensity = "severe";
                    }

                    return {
                        id: earthquake.id,
                        lat: earthquake.geometry.coordinates[1],
                        lng: earthquake.geometry.coordinates[0],
                        mag: earthquake.properties.mag,
                        title: earthquake.properties.title,
                        time: new Date(
                            earthquake.properties.time
                        ).toLocaleTimeString(),
                        color: color,
                        intensity: intensity,
                    };
                });
                setEarthquakeData(arrayOfEarthquakes);
            })
            .catch(() => {
                setError(true);
            });
    }, []);

    return (
        <main>
            {error ? (
                <p>Oops! Something Went Wrong. Please try again</p>
            ) : (
                <>
                    <Sidebar />
                    <div className="map-container">
                        <Map />
                        <Legend />
                    </div>
                </>
            )}
        </main>
    );
};

export default Main;
