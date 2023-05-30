import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import { useState } from "react";
import "./styles/App.scss";

function App() {
    const [displaySidebar, setDisplaySidebar] = useState(true);
    const [error, setError] = useState(false);
    const toggleSidebar = () => {
        setDisplaySidebar(!displaySidebar);
    };

    return (
        <div className="app">
            <Header error={error} toggleSidebar={toggleSidebar} />
            <Main
                error={error}
                setError={setError}
                displaySidebar={displaySidebar}
                setDisplaySidebar={setDisplaySidebar}
            />
            <Footer />
        </div>
    );
}

export default App;
