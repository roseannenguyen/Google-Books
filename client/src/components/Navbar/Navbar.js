import React from 'react'
import { Link } from "react-router-dom";
import '../Navbar/Navbar.css';



const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
               <h1>Google Books      </h1>
            

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={
                                    window.location.pathname === "/" || window.location.pathname === "/home"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                Home
            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/search"
                                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                            >
                                Search
            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/saved"
                                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                            >
                                Saved
            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>

    )
}

export default Navbar
