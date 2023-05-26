import logo from "../assets/ecs-logo.png";
import list from "../assets/list-icon.png";
import world from "../assets/map-icon.png";

const Header = ({ showSidebar, hideSidebar }) => {
    return (
        <header>
            <div className="logo">
                <img
                    src={logo}
                    alt="esc logo"
                    title="Extraordinary Collective of Superheroes"
                />
            </div>

            <nav className="header-nav">
                <ul className="top-bar">
                    <li>
                        <button onClick={showSidebar}>
                            <img
                                src={list}
                                alt="sidebar icon"
                                title="Earthquake details"
                            />
                        </button>
                    </li>
                    <li>
                        <button onClick={hideSidebar}>
                            <img src={world} alt="map icon" title="Map Icon" />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
