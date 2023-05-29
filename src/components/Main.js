import LoadingAnimation from "./LoadingAnimation";
import Error from "./Error";
import Sidebar from "./Sidebar";
import Map from "./Map";
import axios from "axios";
import app from "../firebase/firebase";
import { onValue, getDatabase, ref, set } from "firebase/database";
import { useState, useEffect } from "react";
import refreshIcon from "../assets/refresh.png";
import swal from "sweetalert";

const Main = ({ displaySidebar }) => {
    const [earthquakeData, setEarthquakeData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [latestClicked, setLatestClicked] = useState(false);
    const [newEvents, setNewEvents] = useState({
        generalGeologyTeachers: [],
        richMortal: [],
        strongGood: [],
        all: [],
    });

    const handleLatestClicked = () => {
        setLatestClicked(!latestClicked);

        swal({
            text: "Data updated!!",
            icon: "success",
            className: "sweet-alert",
            button: {
                text: "Close",
                className: "close-btn",
            },
        });
    };

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
                console.log(results);
                const eventsLog = {
                    generalGeologyTeachers: [],
                    richMortal: [],
                    strongGood: [],
                    all: [],
                };
                const arrayOfEarthquakes = results.map((earthquake) => {
                    let colour, intensity;
                    const mag = earthquake.properties.mag;
                    if (mag < 3.5) {
                        colour = "#fddd59";
                        intensity = "low";
                        eventsLog.generalGeologyTeachers.push(earthquake.id);
                    } else if (mag < 6) {
                        colour = "#ff914d";
                        intensity = "medium";
                        eventsLog.richMortal.push(earthquake.id);
                    } else if (mag < 7) {
                        colour = "#ff3131";
                        intensity = "high";
                        eventsLog.strongGood.push(earthquake.id);
                    } else {
                        colour = "#a51b1b";
                        intensity = "severe";
                        eventsLog.all.push(earthquake.id);
                    }

                    return {
                        id: earthquake.id,
                        lat: earthquake.geometry.coordinates[1],
                        lng: earthquake.geometry.coordinates[0],
                        mag: mag,
                        title: earthquake.properties.title,
                        place: earthquake.properties.place,
                        time: new Date(
                            earthquake.properties.time
                        ).toLocaleString(),
                        colour: colour,
                        intensity: intensity,
                    };
                });
                setEarthquakeData(arrayOfEarthquakes);
                setNewEvents(eventsLog);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            })
            .catch(() => {
                setError(true);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            });
    }, [latestClicked]);

	useEffect(() => {
		const database = getDatabase(app);
		const dbRef = ref(database, '/testing2');

        onValue(dbRef, (dbResponse) => {
            if (dbResponse.exists()) {
                const dataFromFirebase = dbResponse.val();
                const totalEvents = {};
                for (let key in dataFromFirebase) {
                    totalEvents[key] = [
                        ...new Set([
                            ...dataFromFirebase[key],
                            ...newEvents[key],
                        ]),
                    ];
                }
                set(dbRef, totalEvents);
            } else {
                set(dbRef, newEvents);
            }
        });
    }, [newEvents]);
    return (
        <main>
            {loading ? <LoadingAnimation /> : null}
            {error ? (
                <Error />
            ) : (
                <>
                    {displaySidebar && (
                        <Sidebar earthquakeData={earthquakeData} />
                    )}
                    <div className="map-container">
                        <Map earthquakeData={earthquakeData} />
                        <button
                            className="latest-data-btn"
                            onClick={handleLatestClicked}
                        >
                            <img src={refreshIcon} alt="" />
                        </button>
                    </div>
                </>
            )}
        </main>
    );
};

export default Main;
