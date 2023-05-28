import Legend from './Legend';
const Sidebar = ({earthquakeData}) => {
	return (
		<section className="sidebar">
			<h1>Earthquake Detection Program</h1>
			<h2>Magnitude 2.5+ Earthquakes</h2>
			<p>Past 24 Hours: {earthquakeData.length} earthquakes.</p>
			<Legend earthquakeData={earthquakeData} />
		</section>
	);
};

export default Sidebar;
