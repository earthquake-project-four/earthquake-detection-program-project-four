import Event from './Event';
const EventList = ({earthquakeData}) => {
	return (
		<ul className="event-list">
			{earthquakeData.map((earthquake) => {
				return <Event key={earthquake.id} place={earthquake.place} time={earthquake.time} mag={earthquake.mag} />;
			})}
		</ul>
	);
};

export default EventList;
