import Magnitude from './Magnitude';

const Legend = () => {
	return (
		<section className="legend">
			<ul>
				<Magnitude numOfEvents="100" range="2.5 - 3.49" hero="Geo" />
				<Magnitude numOfEvents="100" range="2.5 - 3.49" hero="Geo" />
				<Magnitude numOfEvents="100" range="2.5 - 3.49" hero="Geo" />
				<Magnitude numOfEvents="100" range="2.5 - 3.49" hero="Geo" />
			</ul>
		</section>
	);
};

export default Legend;
