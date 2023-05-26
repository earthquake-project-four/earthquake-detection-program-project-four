import ecsfoot from "../assets/ecs-icon.png";

const Footer = () => {
    return (
        <footer>

            <div className="footer-container">
                <img src={ ecsfoot } className="ecs-foot" alt="ecs icon" />
                <h3>mission statement</h3>

            </div>

            <div className="credits">
            <p>&copy; 2023 <a href="https://gerardjuan.com">Gerard</a>, <a href="https://gagandeep-portfolio.com/">Gagandeep</a>, <a href="https://www.sokimcodes.com/">Kim</a>, <a href="https://jesscodes.dev">Jess</a></p>
            <p className="juno">Created with ♥ at Juno College</p>
            </div>
        </footer>
    )
};

export default Footer