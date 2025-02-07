import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import '../../styles/heroSectionCopy.scss'; // Import the SCSS file

import logo from '../../assets/images/orangeLogoBG.png';
import logot from '../../assets/images/logotextguerillaBGT.png';

import CTA from "../cta";
import { Reveal } from "../reveal";
import FullNavbar from '../fullNavbar';
import { ArrowDownward } from "@mui/icons-material";

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
      <div className="hero-text">
        <div className="hero-text__title">
          {/* <Reveal> */}
          <h3>
            Guerilla
          </h3>
          {/* </Reveal> */}
          {/* <Reveal> */}
          <h3>
            Marketing
          </h3>
          {/* </Reveal> */}
        </div>
        <div className="hero-text__description">
          <button>
            Learn More
            <ArrowDownward />
          </button>
          <p>
            Transform Your Brand's Potential Through Immersive Marketing Experiences
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroCenter;