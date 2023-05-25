import EventList from './EventList';
const Sidebar = ({earthquakeData}) => {
	return (
		<section className="sidebar">
			
			<h2>Magnitude 2.5+ Earthquakes</h2>
			<p>Past 24 Hours</p>
			<p>{earthquakeData.length} earthquakes</p>
			<EventList earthquakeData={earthquakeData} />
		</section>
	);
};

export default Sidebar;
