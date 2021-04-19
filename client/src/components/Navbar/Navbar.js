import React from 'react'

import '../Navbar/Navbar.css';



const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
               <h1>Google Books      </h1>
            

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span class="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Save</a>
                        </li>

                    </ul>
                </div>
            </div>

        </nav>

    )
}

export default Navbar
