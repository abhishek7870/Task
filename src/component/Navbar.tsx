import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';
import './Navbar.css';
function Navbar() {
    return (
        <div className="navbar">
            <div>
                <Link to="/"><img src={logo}alt="image" /></Link>
            </div>
            <div className="navbarItem">
                <Link style={{textDecoration: 'none'}} className="navbarItem1" to="/">Home</Link>
                <Link style={{textDecoration:"none"}} className="navbarItem2" to="Our-services">Our services</Link>
                <Link style={{textDecoration:"none"}} className="navbarItem3" to="Portfolio">Portfolio</Link>
                <Link style={{textDecoration:"none"}} className="navbarItem4" to="contact">contact</Link>
            </div>
            
        </div>
    );
}

export default Navbar
