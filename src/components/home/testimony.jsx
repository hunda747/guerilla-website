import React from 'react';
import '../../styles/testimony.scss';
import { motion, useInView } from 'framer-motion';

import safaricom from '../../assets/images/safaricom.png';

const Testimony = () => {
  const testimonies = [
    { quote: "Guerrilla's expertise in BTL marketing significantly boosted our campaign results. Their strategic approach and seamless execution made a remarkable impact on our brand!", name: "Hanno Tegenu", title: "General Manager, Human Advertising PLC" },
    // { quote: "Guerrilla Marketing PLC's innovative activations and customer-focused strategies enhanced our brand engagement and market reach. Their professionalism and execution are unmatched.", name: "Berry Advertising PLC", title: "Berry Advertising PLC" },
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
          {quote.split("").map((char, index) => (
            <motion.span key={index} variants={child}>
              {char}
            </motion.span>
          ))}
        </motion.blockquote>
        <div className="testimony__author">
          <div className="testimony__info">
            <p className="testimony__name">{name}</p>
            <p className="testimony__title">{title}</p>
          </div>
          {/* <img src={safaricom} alt="Webflow" className="testimony__logo" /> */}
        </div>
      </div>
    </div>
  );
};

export default Testimony;
