import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/fullNavbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`${styles.nav} ${isOpen ? styles.show : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About us</Link></li>
          <li><Link to="/works">Our Works</Link></li>
          <li><Link to="/contact-us">Contact us</Link></li>
        </ul>
      </nav>
      <div
        className={`${styles.hamburger} ${isOpen ? styles.cross : ''}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar} id={styles.bar1}></div>
        <div className={styles.bar} id={styles.bar2}></div>
      </div>
    </>
  );
};

export default Navbar;