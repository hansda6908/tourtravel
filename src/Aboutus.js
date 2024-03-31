
function Aboutus() {
    return (
        <>
            <div className="container my-5">
                <h1 className="text-center">About <span className="heading-title">Joseph Travels</span></h1>
                <hr width="250px" className="bg-danger" />
                <div className="row">
                    <div className="col-md-6">
                        <img src="images/tour.jpg" className="img-fluid about-img" alt="" />
                    </div>
                    <div className="col-md-6 ">
                        <h3>Company Information</h3>
                        <div className="com-info">
                            <ul>
                                <li>
                                    Joseph Travels
                                </li>
                                <li>
                                    Established in 2021.
                                </li>
                                <li>Cheap and luxury tours packages</li>
                                <li>24/7<sup>*</sup>Customer support</li>
                                <li>Over 1800+ cities service available</li>
                                <li>⭐⭐⭐⭐ 4 rating in trustPilot review</li>
                                <li>People Choice</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Aboutus