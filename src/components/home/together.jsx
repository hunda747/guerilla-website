import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../../styles/together.scss';

import togetherImage from '../../assets/images/gorilla1.png';
import CTA from '../cta';
import { Reveal } from '../reveal';

const Together = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 2.5 });

  return (
    <div className="containerPaddingBig">
      <div className="together" ref={ref}>
        <motion.div
          className="together-content headerCommon"
          initial={{ x: '-100vw' }}
          animate={isInView ? { x: 0 } : {}}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <Reveal>
            <div className="subtitle">Let's Elevate Your Brand Together</div>
          </Reveal>
          <Reveal>
            <p>Contact us today for a personalized consultation and discover how we can boost your brand.</p>
          </Reveal>
          <div
            className="together-buttons"
          >
            <CTA />
          </div>
        </motion.div>
        <motion.div
          className="together-image"
          // initial={{ opacity: 0 }}
          // animate={isInView ? { opacity: 1 } : {}}
          // transition={{ duration: 1 }}
          initial={{ x: '100vw' }}
          animate={isInView ? { x: 0 } : {}}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <div className="img-container">
            <img src={togetherImage} alt="Together" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Together;
