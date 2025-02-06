import { useEffect } from "react";
import '../styles/stickyFooter.scss';
import logo from '../assets/images/logotextguerillaBG.png';

const StickyFooter = () => {
  return (
    <div
      className='sticky-footer__container'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className='sticky-footer__fixed-wrapper'>
        <Content />
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className='sticky-footer__content'>
      <Section1 />
      <Section2 />
    </div>
  )
}

const Section1 = () => {
  return (
    <div className='sticky-footer__rows'>
      <div className="sticky-footer__rows-logo">
        <img src={logo} alt="Logo" />
      </div>
      <Nav />
    </div>
  )
}

const Section2 = () => {
  return (
    <div className='sticky-footer__bottom'>
      <h1>info@gurelamarketing.com</h1>
      {/* <p>©copyright</p> */}
    </div>
  )
}

const Nav = () => {
  return (
    <div className='sticky-footer__nav'>
      <div className='sticky-footer__nav-section'>
        <h3>Quick Links</h3>
        <p>Home</p>
        <p>Works</p>
        <p>Contact Us</p>
        <p>About Us</p>
      </div>
      <div className='sticky-footer__nav-section'>
        <h3>Education</h3>
        <p>Facebook</p>
        <p>LinkedIn</p>
        <p>Twitter</p>
        <p>Email</p>
      </div>
    </div>
  )
}

export default StickyFooter;