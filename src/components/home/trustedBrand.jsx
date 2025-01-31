import React, { useEffect, useRef } from 'react';
import '../../styles/trustedBrand.scss';
import { animate, motion, useMotionValue } from 'framer-motion';

import BGI from '../../assets/images/BGI.png';
import Cocacola from '../../assets/images/CocaCola.png';
import multichoice from '../../assets/images/multichoice.png';
import safaricom from '../../assets/images/safaricom.png';
import useMeasure from 'react-use-measure';

const images = [
  BGI,
  Cocacola,
  multichoice,
  safaricom,
  BGI,
  Cocacola,
  multichoice,
  safaricom,
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
    <div className="trusted-brand">
      {/* <p className="trusted-brand__text">Trusted by industry leaders worldwide</p> */}
      <motion.div className="trusted-brand__logos" ref={ref} style={{ x: xTranslation }}>
        {
          [...images, ...images].map((image, index) => (
            <div className="img-wrapper">
              <img src={image} alt="Webflow" className="trusted-brand__image" key={index} />
            </div>
          ))
        }
      </motion.div>
    </div >
  );
};

export default TrustedBrand;
