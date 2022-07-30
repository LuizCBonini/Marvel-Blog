import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// Pages:
import Home from "../Home/Welcome/Welcome";

// Style:
import "./Header.css"

const Header = () => {
    return ( 
        <Router>
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
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
        </Router>
     );
}
 
export default Header;