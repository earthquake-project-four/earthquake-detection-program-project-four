import Legend from "./Legend";
import About from "./About";
import { useState } from "react";

const Sidebar = ({ earthquakeData, setDisplaySidebar }) => {
    const [sidebarContent, setSidebarContent] = useState("earthquakes");
    const handleClick = (content) => {
        setSidebarContent(content);
    };
    const handleClose = () => {
        setDisplaySidebar(false);
    };

    return (
        <section className="sidebar">
            <button className="close-sidebar" onClick={handleClose}>
                &#x2715;
            </button>
            <nav>
                <ul className="sidebar-nav">
                    <li>
                        <button
                            onClick={() => {
                                handleClick("earthquakes");
                            }}
                        >
                            Earthquakes
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                handleClick("about");
                            }}
                        >
                            About
                        </button>
                    </li>
                </ul>
            </nav>
            <h1>Earthquake Detection Program</h1>
            <h2>Magnitude 2.5+ Earthquakes</h2>
            <p>Past 24 Hours: {earthquakeData.length} earthquakes.</p>
            {sidebarContent === "earthquakes" ? (
                <Legend earthquakeData={earthquakeData} />
            ) : (
                <About />
            )}
        </section>
    );
};

export default Sidebar;
