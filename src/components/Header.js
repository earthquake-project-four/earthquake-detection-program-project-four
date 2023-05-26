import logo from "../assets/logo-white.png";

const Header = ({ handleToggle }) => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="esc logo" />
            </div>
            <h1>Earthquake Detection Program</h1>
            <button className="toggle-btn" onClick={handleToggle}>
                &#9776;
            </button>
        </header>
    );
};

export default Header;
