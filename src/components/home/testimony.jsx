import React from 'react';
import '../../styles/testimony.scss';
import { motion, useInView } from 'framer-motion';

import kerry from '../../assets/images/kerry_logo1.png';
import berry from '../../assets/images/berrylogo.png';
import dachi from '../../assets/images/Dachiredlogo.png';
import LazyImage from '../common/LazyImage';

const Testimony = () => {
  const testimonies = [
    // { quote: "Guerrilla's expertise in BTL marketing significantly boosted our campaign results. Their strategic approach and seamless execution made a remarkable impact on our brand!", name: "Hanno Tegenu", title: "General Manager, Human Advertising PLC" },
    { quote: "Guerrilla Marketing PLC's innovative activations and customer-focused strategies enhanced our brand engagement and market reach. Their professionalism and execution are unmatched.", name: "Dachi Manufacturing Company", title: "Dachi Manufacturing Company" },
  ]
  return (
    <div className="testimony-container">
      {testimonies.map((testimony, index) => (
        <SingleTestimony key={index} quote={testimony.quote} name={testimony.name} title={testimony.title} />
      ))}
    </div>
  );
};

const SingleTestimony = ({ quote, name, title }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.01, delayChildren: 0.02 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="containerPaddingBig">
      <div className="testimony" ref={ref}>
        <div className="testimony__stars">
          ★★★★★
        </div>
        <motion.blockquote
          className="testimony__quote"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          " {quote.split("").map((char, index) => (
            <motion.span key={index} variants={child}>
              {char}
            </motion.span>
          ))} "
        </motion.blockquote>
        <div className="testimony__author">
          <LazyImage
            src={dachi}
            alt="dachi"
            className="testimony__logo"
            placeholderSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50' width='100' height='50'%3E%3Crect width='100' height='50' fill='%23f0f0f0'/%3E%3C/svg%3E"
          />
          <div className="testimony__info">
            <p className="testimony__name">{name}</p>
            {/* <p className="testimony__title">{title}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
