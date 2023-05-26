import logo from "../assets/ecs-logo.png";
import list from "../assets/list-icon.png";
import world from "../assets/map-icon.png";


const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={ logo } alt="esc logo" title="Extraordinary Collective of Superheroes"/>
            </div>

            <nav className="header-nav">
                <ul className="top-bar"> 
                    <li><button><img src={ list } alt="list view" title="Earthquake details" /></button></li>
                    <li><button><img src={ world } alt="map view" title="Legend" /></button></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;
