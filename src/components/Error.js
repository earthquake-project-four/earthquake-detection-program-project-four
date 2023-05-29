import rich from "../assets/rich-mortal-noback.png";
import quake from "../assets/quake.png";

const Error = () => {
    return (
        <section className="error-section">
            <div className="error-container">
                <h2>OOPS!</h2>
                <p>Something went wrong on our end.</p>
                <p>Please try again soon.</p>
                    <div className="error-art">
                        <img src={quake} className="quake-img" alt="earthquake"/> 
                        <img src={rich} className="float-img" alt="floating superhero"/>
                    </div>
            </div>        
        </section>
    )
}

export default Error;