import Sidebar from "./Sidebar";
import Map from "./Map";
import Legend from "./Legend";
import { useState, useEffect } from "react";
import axios from "axios";
import app from "../firebase/firebase";
import { onValue, getDatabase, ref } from 'firebase/database';

const Main = () => {
    const [earthquakeData, setEarthquakeData] = useState([]);
    const [error, setError] = useState(false);
    const [firebaseData, setFirebaseData] = useState({});

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
                    let colour, intensity;
                    if (earthquake.properties.mag < 3.5) {
                        colour = "#fddd59";
                        intensity = "low";
                    } else if (earthquake.properties.mag < 6) {
                        colour = "#ff914d";
                        intensity = "medium";
                    } else if (earthquake.properties.mag < 7) {
                        colour = "#ff3131";
                        intensity = "high";
                    } else {
                        colour = "#a51b1b";
                        intensity = "severe";
                    }

                    return {
                        id: earthquake.id,
                        lat: earthquake.geometry.coordinates[1],
                        lng: earthquake.geometry.coordinates[0],
                        mag: earthquake.properties.mag,
                        title: earthquake.properties.title,
                        time: `${new Date(
                            earthquake.properties.time
                        ).toLocaleDateString()}
                        ${new Date(
                            earthquake.properties.time
                        ).toLocaleTimeString()}`,
                        colour: colour,
                        intensity: intensity,
                    };
                });
                setEarthquakeData(arrayOfEarthquakes);
            })
            .catch(() => {
                setError(true);
            });
    }, []);

    useEffect( () => {
        const database = getDatabase(app);
        const dbRef = ref(database);

        onValue(dbRef, (dbResponse) => {
            if (dbResponse.exists()){
                setFirebaseData(dbResponse.val());
            }
            else {
                setFirebaseData({});

            }
                console.log(firebaseData);
        })

    }, []);

    return (
        <main>
            {error ? (
                <p>Oops! Something Went Wrong. Please try again</p>
            ) : (
                <>
                    <Sidebar />
                    <div className="map-container">
                        <Map earthquakeData={earthquakeData} />
                        <Legend />
                    </div>
                </>
            )}
        </main>
    );
};

export default Main;
