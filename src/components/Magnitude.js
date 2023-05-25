const Magnitude = ({ numOfEvents, range, hero, intensity }) => {
    return (
        <li className={intensity}>
            <p>{numOfEvents}</p>
            <p>{range}</p>
            <p>{hero}</p>
        </li>
    );
};

export default Magnitude;
