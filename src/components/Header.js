import logo from "../assets/ecs-logo.png";
import list from "../assets/list-icon.png";
import world from "../assets/map-icon.png";
import ecs from "../assets/ecs-icon.png";



const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={ logo } alt="esc logo" />
            </div>

            <div>
                <ul className="top-bar"> 
                <li><img src={ list } className="list" alt="list view" /></li>
                <li><img src={ world } className="world" alt="map view" /></li>
                <li><img src={ ecs } className="ecs" alt="dropdown menu" /></li>
                </ul>
            </div>
        </header>
    )
};

export default Header;
