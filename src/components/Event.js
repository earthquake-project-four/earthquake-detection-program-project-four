const Event = ({place, mag, time}) => {
	return (
		<li className="event">
			<p>{mag}</p>
			<p>{place}</p>
			<p>{time}</p>
		</li>
	);
};

export default Event;
