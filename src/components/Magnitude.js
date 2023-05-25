const Magnitude = ({ numOfEvents, range, hero, intensity }) => {
    return (
        <li>
            <div className={`legend-dot ${intensity}`}>
                <p>{numOfEvents}</p>
            </div>
            <div className="legend-text">
                <p>{hero}</p>
                <p>{range}</p>
            </div>
        </li>
    );
};

export default Magnitude;
