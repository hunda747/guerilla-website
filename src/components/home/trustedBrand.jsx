import React, { useEffect, useRef } from 'react';
import '../../styles/trustedBrand.scss';
import { animate, motion, useMotionValue } from 'framer-motion';

import BGI from '../../assets/images/BGI.png';
import Cocacola from '../../assets/images/CocaCola.png';
import multichoice from '../../assets/images/multichoice.png';
import safaricom from '../../assets/images/safaricom.png';
import useMeasure from 'react-use-measure';
import capitals from '../../assets/images/54capitallogo1.jpg';
// import dachi from '../../assets/images/dachilogo1.png';
import dachi from '../../assets/images/Dachiredlogo.png';
import kerry from '../../assets/images/kerry_logo1.png';
import niglogo from '../../assets/images/niglogo1.png';
import wilmar from '../../assets/images/wilmarlogo1.png';
import awashwine from '../../assets/images/AWASHWINELO.png';
import unitedbeverages from '../../assets/images/unitedbeverages.png';

const images = [
  // BGI,
  Cocacola,
  multichoice,
  safaricom,
  // capitals,
  dachi,
  kerry,
  // niglogo,
  wilmar,
  awashwine,
  unitedbeverages,
];

const TrustedBrand = () => {
  const carouselRef = useRef(null);

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  useEffect(() => {
    let controls;
    let finalPostion = -width / 2 - 16;

    controls = animate(xTranslation, [0, finalPostion], {
      ease: 'linear',
      duration: 25,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className=" trusted-brand-container">

      {/* <p className="trusted-brand__text">Trusted by industry leaders</p> */}
      <div className="trusted-brand">
        <motion.div className="trusted-brand__logos" ref={ref} style={{ x: xTranslation }}>
          {
            [...images, ...images].map((image, index) => (
              <div className="img-wrapper" key={index}>
                <img src={image} alt="Webflow" className="trusted-brand__image" />
              </div>
            ))
          }
        </motion.div>
      </div >
    </div>
  );
};

export default TrustedBrand;
