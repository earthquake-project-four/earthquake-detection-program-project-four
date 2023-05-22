import logo from "../assets/logo-black.png"

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={ logo } alt="esc logo" />
            </div>
            <h1>Earthquake Detection Program</h1>
        </header>
    )
};

export default Header;
