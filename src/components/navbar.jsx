import React, { useState } from 'react';
import '../styles/navbar.scss';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/images/gorillalogo.png';
import FullNavbar from './fullNavbar';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="containerPaddingBig">
      <nav className="navbar ">
        <div className="logo" onClick={() => navigate('/')}>
          <img src={logo} alt="Logo" className="logo-image" />
          <span className="logo-text">GUERILLA</span>
        </div>
        {/* <button className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </button> */}
        {/* <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/about-us' ? 'active' : ''}>
            <Link to="/about-us">About Us</Link>
          </li>
          <li className={location.pathname === '/works' ? 'active' : ''}>
            <Link to="/works">Works</Link>
          </li>
          <li className={location.pathname === '/contact-us' ? 'active' : ''}>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul> */}
        <FullNavbar />
      </nav>
    </div>
  );
};

export default Navbar;
