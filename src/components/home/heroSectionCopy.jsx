import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import '../../styles/heroSectionCopy.scss'; // Import the SCSS file

import logo from '../../assets/images/orangeLogoBG.png';
import logot from '../../assets/images/logotextguerillaBGT.png';
// import heroImage from '../../assets/images/gorilaRBG.png';
import heroImage from '../../assets/images/upscalemedia.png';

import CTA from "../cta";
import { Reveal } from "../reveal";
import FullNavbar from '../fullNavbar';
import { ArrowDownward } from "@mui/icons-material";
import Magnetic from '../common/Magnetic';

const HeroCenter = () => {
  return (
    <section className="hero-section ">
      {/* <p>Hello we are</p> */}
      <nav className="hero-text__nav">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-image" />
          <img src={logot} alt="Logo" className="logo-image" />
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
          <img src={heroImage} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default HeroCenter;