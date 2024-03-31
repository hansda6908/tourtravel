
function Hero() {
    return (
        <>
            <div className="jumbotron" id="hero">
                <div className="main-bg">
                    <h3 className="display-4">Welcome to <span className="main-brandname">Joseph Travels</span></h3>
                    <h1 className="display-2">Visit <span id="changeText"></span></h1>
                    <button className="btn btn-success" id="main-btn">Book Now</button>
                </div>
            </div>
        </>
    )
}

export default Hero