import Sidebar from "./Sidebar";
import Map from "./Map";
import Legend from "./Legend";


const Main = () => {
    return (
        <main>
            <Sidebar />
            <div className="map-container">
                <Map />
                <Legend />
            </div>
        </main>
    )
};

export default Main;