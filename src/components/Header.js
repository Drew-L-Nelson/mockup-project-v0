import React from "react";
import { Link  } from "react-router-dom";
import '../styles/Header.css';
import { FiHome } from "react-icons/fi";

const Header = () => {
    return(<div>
            <div className="Header">
            <div className="header-logo">
                <FiHome className="FiHome-icon" />
            </div>
                <div className="nav-bar">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About Me</Link></li>
                    <li><Link to='/Contact'>Contact Me</Link></li>   
                    </ul> 
                </div>     
            </div>
    </div>)
}

export default Header;