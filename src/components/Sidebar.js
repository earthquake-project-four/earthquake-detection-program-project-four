import Legend from './Legend';
const Sidebar = ({earthquakeData}) => {
	return (
		<section className="sidebar">
			<h1>Earthquake Detection Program</h1>
			<p>Magnitude 2.5+ Earthquakes</p>
			<p>Past 24 Hours: {earthquakeData.length}</p>
			<Legend earthquakeData={earthquakeData} />
		</section>
	);
};

export default Sidebar;
