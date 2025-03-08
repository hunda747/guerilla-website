import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import '../../styles/heroSectionCopy.scss'; // Import the SCSS file

import logo from '../../assets/images/orangeLogoBG.webp';
import logot from '../../assets/images/logotextguerillaBGT.webp';
// import heroImage from '../../assets/images/gorilaRBG.png';
import heroImage from '../../assets/images/upscalemedia.webp';

import CTA from "../cta";
import { Reveal } from "../reveal";
import FullNavbar from '../fullNavbar';
import { ArrowDownward } from "@mui/icons-material";
import Magnetic from '../common/Magnetic';
import LazyImage from '../common/LazyImage';

const HeroCenter = () => {
  return (
    <section className="hero-section ">
      {/* <p>Hello we are</p> */}
      <nav className="hero-text__nav">
        <div className="logo-container">
          <LazyImage src={logo} alt="Logo" className="logo-image" />
          <LazyImage src={logot} alt="Logo" className="logo-image" />
        </div>
        <div className="hero-text__nav-links">
          <FullNavbar />
        </div>
      </nav>
      <div className="hero-text__container">
        <div className="hero-text">
          <div className="hero-text-description">
            <div className="hero-text__title">
              <h3>
                Guerilla
              </h3>
              <h3>
                Marketing
              </h3>
            </div>
            <div className="hero-text__description">
              <p>
                Transform Your Brand's Potential Through Immersive Marketing Experiences
              </p>
            </div>
          </div>
          <Magnetic>

            <button onClick={() => {
              window.location.href = '/about-us';
            }}>
              Learn More
              <ArrowDownward />
            </button>
          </Magnetic>
        </div>
        <div className="hero-image">
          <LazyImage
            src={heroImage}
            alt="Hero Image"
          // placeholderSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200' width='300' height='200'%3E%3Crect width='300' height='200' fill='%23cccccc'/%3E%3C/svg%3E"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroCenter;