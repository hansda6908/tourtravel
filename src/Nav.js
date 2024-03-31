
export default function Nav() {
    return (
        <>

            <nav className="navbar navbar-expand-lg ">

                <img src="./images/joseph_Travels.png" alt="brand name" id="logoimage" />
                <a className="navbar-brand" href="#">Joseph Travels</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Book</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Packages
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">United State</a>
                                <a className="dropdown-item" href="#">India</a>

                                <a className="dropdown-item" href="#">France</a>
                                <a className="dropdown-item" href="#">Germany</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>

                    <button className="btn btn-success" data-toggle="modal" data-target="#loginmodal">Login</button>&nbsp;
                    <button className="btn btn-success" data-toggle="modal" data-target="#registermodal">Register</button>
                </div>
            </nav>

        </>

    )
}
