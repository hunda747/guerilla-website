import React, { useState } from 'react';
import '../styles/navbar.scss';

import logo from '../assets/images/gorillalogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <span className="logo-text">GUERILLA</span>
      </div>
      <button className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        {/* <li><Link to="/services">Services</Link></li> */}
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
