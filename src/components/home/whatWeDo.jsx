import React from 'react';
import { motion, useInView } from 'framer-motion';
import '../../styles/whatWeDo.scss';

import { AddShoppingCart, EventRepeat, TravelExplore, WorkspacePremium } from '@mui/icons-material';
const services = [
  {
    icon: <AddShoppingCart className="icon" />,
    title1: "Shopper/Outlet",
    title2: "Activation",
    description: "Branding and Promotion",
  },
  {
    icon: <WorkspacePremium className="icon" />,
    title1: "Brand",
    title2: "Activation",
    description: "& Mass Sampling",
  },
  {
    icon: <TravelExplore className="icon" />,
    title1: "Brand",
    title2: "Ambassadors",
    description: "Recruitment and training",
  },
  {
    icon: <EventRepeat className="icon" />,
    title1: "PR/Event",
    title2: "Organizing",
    description: "& Managing Brand launches",
  }
];
const WhatWeDo = () => {
  // Define the animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
  };

  // Use the useInView hook
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: false,
    threshold: 0.1,
    rootMargin: '0px 0px -50% 0px'
  });
  // Define the services as an array of objects

  return (
    <div
      className="what-we-do"
      ref={ref}
    >
      <div className="headerCommon">
        <h1>What We Do</h1>
        <div className="subtitle">Creating Impactful Brand Experiences That Resonate</div>
        <p className="description">
          We create unforgettable brand experiences through strategic activations, innovative campaigns,
          and impactful audience engagement. Our expertise ensures your brand stands out and connects
          meaningfully with your audience.
        </p>
      </div>
      <div className="services">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service"
            initial="hidden"
            variants={containerVariants}
            animate={isInView ? "visible" : "hidden"}
            // ref={ref}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="icon-container">{service.icon}</div>
            <h3>{service.title1}</h3>
            <h3>{service.title2}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;