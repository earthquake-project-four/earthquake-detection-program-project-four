import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import "./styles/App.scss";
import { useState } from "react";

function App() {
    const [displaySidebar, setDisplaySidebar] = useState(true);

    const showSidebar = () => {
        setDisplaySidebar(true);
    };
    const hideSidebar = () => {
        setDisplaySidebar(false);
    };

    return (
        <div className="app">
            <Header showSidebar={showSidebar} hideSidebar={hideSidebar} />
            <Main displaySidebar={displaySidebar} />
            <Footer />
        </div>
    );
}

export default App;
