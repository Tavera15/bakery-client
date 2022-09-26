import React from "react";
import { Link } from "react-router-dom";

function NavBar()
{
    return(
        <div className='navbar-bg'>
            <div className='navbar-main'>
                <div className='navbar-user'>
                </div>
            </div>
            <nav className="navbar navbar-expand navbar-light  w-100 m-0">
                <div className="collapse navbar-collapse w-100" id="navbarNavDropdown">
                    <ul className="navbar-nav navbar-links-group">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Treats" className="nav-link">Treats</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Accessories" className="nav-link">Accessories</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;

