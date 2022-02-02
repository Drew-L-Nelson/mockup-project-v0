import React from "react";
import { Link,  BrowserRouter as Router } from "react-router-dom";
import '../styles/Header.css';

const Header = () => {
    return(<div>
            <div className="Header">
            <div className="header-log">
                <img src="src/assets/ups_oops.jpg" alt="logo"></img>
            </div>
            <Router>
                <div className="nav-bar">
                    <Link to='/'>Home</Link>
                    <Link to='/Service'>Services</Link>
                    <Link to='/About'>About Me</Link>
                    <Link to='/Contact'>Contact Me</Link>
                </div>
            </Router>
            </div>
    </div>)
}

export default Header;