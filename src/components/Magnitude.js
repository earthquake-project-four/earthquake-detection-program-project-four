const Magnitude = ({ numOfEvents, range, hero, intensity }) => {
    return (
        <li>
            <div className={`legend-dot ${intensity}`}>
                <div className="legend-text">
                    <p>{numOfEvents}</p>
                    <p>{hero}</p>
                    <p>{range}</p>
                </div>
            </div>
        </li>
    );
};

export default Magnitude;
