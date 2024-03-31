
function Bookarea() {
    return (
        <>
            <section id="section1">
                <h1 className="section-book">Book</h1>
                <hr width="250px" className="bg-danger" />
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <img src="images/tour.jpg" alt="tour image" className="book-img" />
                        </div>
                        <div className="col-md-6">
                            <form action="" id="book-form">
                                <div className="form-group">
                                    <label for="places">Where To</label>
                                    <select id="places" name="places" className="form-control">
                                        <option value="United states">United States</option>
                                        <option value="India">India</option>
                                        <option value="France">France</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Greece">Greece</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="Portugal">Portugal</option>
                                    </select>

                                </div>
                                <div className="form-group">
                                    <input type="number" placeholder="How Many" required className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="startDate">startDate</label>
                                    <input type="date" id="startDate" required className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="endDate">End Date</label>
                                    <input type="date" id="endDate" required className="form-control" />
                                </div>
                                <div className="form-group">
                                    <textarea name="place-desc" id="place-desc" cols="30" rows="5" minlength="50"
                                        maxlength="500" placeholder="Enter your Name & Details" required
                                        className="form-control"></textarea>
                                </div>
                                <div className="form-group form-btn1">
                                    <button type="submit" className="btn" id="form-btn" onclick="bookConfirmation()">Book
                                        Now</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>

    )
}

export default Bookarea