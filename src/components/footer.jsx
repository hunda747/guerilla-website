import React from 'react';
import '../styles/footer.scss'; // Import the SCSS file
import { Email, Facebook, LinkedIn, Twitter } from '@mui/icons-material';
// import logo from '../assets/images/orangeLogoBG.png';
import logo from '../assets/images/logotextguerillaBG.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-column footer-logo">
          <h2><img src={logo} alt="Logo" /></h2>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Case Studies</li>
            <li>Contact Us</li>
            <li>Blog Posts</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Connect With Us</h3>
          <ul>
            <li>Facebook Page</li>
            <li>Twitter Profile</li>
            <li>LinkedIn Page</li>
            <li>Instagram Feed</li>
            <li>YouTube Channel</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Details</h3>
          <ul>
            <li>Email Us</li>
            <li>Call Us</li>
            <li>Office Location</li>
            <li>Support Center</li>
            <li>Feedback Form</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <p>© 2024 Relume. All rights reserved.</p>
        </div>
        <div className="footer-social-icons">
          <a href={''} target="_blank" rel="noopener noreferrer"><Facebook /></a>
          <a href={''} target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
          <a href={''} target="_blank" rel="noopener noreferrer"><Twitter /></a>
          <a href={''} target="_blank" rel="noopener noreferrer"><Email /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
