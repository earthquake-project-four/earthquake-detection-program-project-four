const Magnitude = ({numOfEvents, range, hero}) => {
	return (
		<li>
			<p>{numOfEvents}</p>
			<p>{range}</p>
			<p>{hero}</p>
		</li>
	);
};

export default Magnitude;
