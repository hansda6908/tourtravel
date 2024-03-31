
function Services() {
    return (
        <>
            <div className="container slider1">
                <h1 className="services">Services</h1>
                <hr width="250px" className="bg-danger" />
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className="slide-h2">Affordable Hotel</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi repellendus
                                        nostrum labore nobis quisquam vitae iste dolor similique officia. Aperiam ad veritatis
                                        commodi explicabo harum blanditiis aut quod praesentium.</p>
                                </div>
                                <div className="col-md-6">
                                    <img className="d-block w-100" src="./images/affordable.png" alt="First slide" />
                                </div>
                            </div>

                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="d-block w-100" src="./images/food-and-drinks.jpg" alt="Second slide" />
                                </div>
                                <div className="col-md-6">
                                    <h2 className="slide-h2">Food & Drinks</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi repellendus
                                        nostrum labore nobis quisquam vitae iste dolor similique officia. Aperiam ad veritatis
                                        commodi explicabo harum blanditiis aut quod praesentium.</p>
                                </div>

                            </div>

                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className="slide-h2">Safety Guide</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi repellendus
                                        nostrum labore nobis quisquam vitae iste dolor similique officia. Aperiam ad veritatis
                                        commodi explicabo harum blanditiis aut quod praesentium.</p>
                                </div>
                                <div className="col-md-6">
                                    <img className="d-block w-100" src="./images/safety-guide.jpg" alt="Third slide" />
                                </div>

                            </div>

                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="d-block w-100" src="./images/transportation.jpg" alt="Third slide" />
                                </div>
                                <div className="col-md-6">
                                    <h2 className="slide-h2">Transportation Services</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi repellendus
                                        nostrum labore nobis quisquam vitae iste dolor similique officia. Aperiam ad veritatis
                                        commodi explicabo harum blanditiis aut quod praesentium.</p>
                                </div>
                            </div>

                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className="slide-h2">Hospitality Services</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi repellendus
                                        nostrum labore nobis quisquam vitae iste dolor similique officia. Aperiam ad veritatis
                                        commodi explicabo harum blanditiis aut quod praesentium.</p>
                                </div>
                                <div className="col-md-6">
                                    <img className="d-block w-100" src="./images/hospitability.jpg" alt="Third slide" />
                                </div>
                            </div>

                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="d-block w-100" src="./images/security.jpg" alt="Third slide" />
                                </div>
                                <div className="col-md-6">
                                    <h2 className="slide-h2">Security Services</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi repellendus
                                        nostrum labore nobis quisquam vitae iste dolor similique officia. Aperiam ad veritatis
                                        commodi explicabo harum blanditiis aut quod praesentium.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>

        </>

    )
}

export default Services