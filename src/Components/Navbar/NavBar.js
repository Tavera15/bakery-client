import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import logo from "../../Content/Images/logo.png"

function NavBar()
{
    return(
        <div className="navbar-bg">
                <div>
                    <Link to="/"><img className="logo" alt="logo" src={logo} /></Link>
                </div>
                <div className='overflow-auto'>
                
                <div className='navbar-main'>
                    <div className='navbar-user'>
                    </div>
                </div>
                <nav className="navbar navbar-expand navbar-light w-100 m-0">
                    <div className="collapse navbar-collapse w-100" id="navbarNavDropdown">
                        <ul className="navbar-nav navbar-links-group">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Products" className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Treats" className="nav-link">Treats</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Accessories" className="nav-link">Accessories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Manager/ProductManager">Product Manager</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Manager/InvoiceManager">Invoice Manager</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Cart" className="nav-link">Basket</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;

