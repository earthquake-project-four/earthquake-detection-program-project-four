import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import { useState } from "react";
import "./styles/App.scss";

function App() {
    const [displaySidebar, setDisplaySidebar] = useState(true);
    const toggleSidebar = () => {
        setDisplaySidebar(!displaySidebar);
    };

    return (
        <div className="app">
            <Header toggleSidebar={toggleSidebar} />
            <Main displaySidebar={displaySidebar} />
            <Footer />
        </div>
    );
}

export default App;