import logo from "../assets/ecs-logo.png";
import list from "../assets/list-icon.png";

const Header = ({ toggleSidebar, error }) => {
    return (
        <header>
            <div className="logo">
                <img
                    src={logo}
                    alt="esc logo"
                    title="Extraordinary Collective of Superheroes"
                />
            </div>
            {error ? null : (
                <nav className="header-nav">
                    <button onClick={toggleSidebar}>
                        <img
                            src={list}
                            alt="sidebar icon"
                            title="Earthquake details"
                        />
                    </button>
                </nav>
            )}
        </header>
    );
};

export default Header;
