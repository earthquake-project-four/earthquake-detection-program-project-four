const Error = () => {
    return (

        <section className="error-section">


            <div className="message">
                <p className="oops">Oops!</p> 
                <p>Something Went Wrong. Please try again</p>
            </div>

            <div className="quake-art">

                <div className="quake-left">
                    <span className="box-left"/>
                        <div className="triangle-left">
                            <span className="left-1"/>
                            <span className="left-2"/>
                            <span className="left-3"/>
                        </div>
                </div>

                <div className="quake-right">
                   <div className="triangle-right">
                        <span className="right-1"/>
                        <span className="right-2"/>
                    </div>
                    <span className="box-right"/>
                </div>    


            </div>


        </section>
    )
}

export default Error;