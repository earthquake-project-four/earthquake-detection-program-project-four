import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import "./styles/App.scss";
import { useState } from "react";

function App() {
    const [displaySidebar, setDisplaySidebar] = useState(true);
    const [displayLegend, setDisplayLegend] = useState(true);

    const toggleSidebar = () => {
        setDisplaySidebar(!displaySidebar);
    };
    const toggleLegend = () => {
        setDisplayLegend(!displayLegend);
    };

    return (
        <div className="app">
            <Header toggleSidebar={toggleSidebar} toggleLegend={toggleLegend} />
            <Main
                displaySidebar={displaySidebar}
                displayLegend={displayLegend}
            />
            <Footer />
        </div>
    );
}

export default App;
