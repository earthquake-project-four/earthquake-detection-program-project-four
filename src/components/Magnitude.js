import Event from "./Event";
import { useState } from "react";

const Magnitude = ({ numOfEvents, range, hero, intensity, earthquakeData }) => {
    const [displayEvents, setDisplayEvents] = useState(false);
    const filteredData = earthquakeData.filter(earthquake => earthquake.intensity === intensity);
    const handleClick = () => {
        setDisplayEvents(!displayEvents);
    }

    return (
        <li>
            <button onClick={handleClick}>
                <div className={`legend-dot ${intensity}`}>
                    <p>{numOfEvents}</p>
                </div>
                <div className="legend-text">
                    <p>{hero}</p>
                    <p>{range}</p>
                </div>
            </button>
            {
                displayEvents ? (
                    <ul>
                        {
                            filteredData.map(earthquake => {
                                return <Event key={earthquake.id} place={earthquake.place} time={earthquake.time} mag={earthquake.mag} />;
                            })
                        }
                    </ul>
                ) : null
            }
        </li>
    );
};

export default Magnitude;
