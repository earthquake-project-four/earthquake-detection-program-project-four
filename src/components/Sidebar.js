import EventList from "./EventList";
const Sidebar = ({ earthquakeData }) => {
    return (
        <section className="sidebar">
            <h1>Earthquake Detection Program</h1>
            <p>Magnitude 2.5+ Earthquakes</p>
            <p>Past 24 Hours: {earthquakeData.length}</p>
            <EventList earthquakeData={earthquakeData} />
        </section>
    );
};

export default Sidebar;
