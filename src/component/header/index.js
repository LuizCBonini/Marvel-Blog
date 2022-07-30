import React from "react";
import {
    Link
} from "react-router-dom";

import "./style.css"




const Header = () => {
    return (
        <>

            <nav>
            <Link to="/" className="logo">LOGO</Link>

                <ul>

                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/conectar">Conectar</Link>
                    </li>

                    <li className="button">
                        <Link to="/signup">Sign up</Link>
                    </li>

                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </>
    )

};

export default Header;