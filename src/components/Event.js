const Event = ({place, mag, time}) => {
	return (
		<li className="event">
            <p className="magnitude">{mag.toFixed(2)}</p>
            <div className="event-details">
                <p>{place}</p>
                <p className="time">{time}</p>
            </div>
		</li>
	);
};

export default Event;
