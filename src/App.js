import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import "./styles/App.scss";
import { useState } from "react";

function App() {
    const [showSidebar, setShowSidebar] = useState(true);

    const handleToggle = () => {
        setShowSidebar(!showSidebar);
    };

    console.log(showSidebar);
    return (
        <div className="app">
            <Header handleToggle={handleToggle} />
            <Main showSidebar={showSidebar} />
            <Footer />
        </div>
    );
}

export default App;
