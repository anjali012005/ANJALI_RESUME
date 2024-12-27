import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="navbar">
            <div className="nav-logo">
                <h1>ANJALI</h1>
            </div>

            <ul className="nav-menu">
                <li>
                    <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/services" className={location.pathname === '/services' ? 'active-link' : ''}>
                        Services
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
