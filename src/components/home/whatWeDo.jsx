import React from 'react';
import { motion, useInView } from 'framer-motion';
import '../../styles/whatWeDo.scss';

import { AddShoppingCart, EventRepeat, TravelExplore, WorkspacePremium } from '@mui/icons-material';
import { Reveal } from '../reveal';

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

const reports = [
  {
    icon: <AddShoppingCart className="icon" />,
    title1: "Automated",
    title2: "Tracking",
    description: "Real-time monitoring for accuracy",
  },
  {
    icon: <WorkspacePremium className="icon" />,
    title1: "Custom",
    title2: "Templates",
    description: "Ready-to-use formats for quick reports",
  },
  {
    icon: <TravelExplore className="icon" />,
    title1: "Stock Control &",
    title2: "Management",
    description: "Keep inventory in check",
  },
  {
    icon: <EventRepeat className="icon" />,
    title1: "Data",
    title2: "Security",
    description: "Secure cloud storage for all reports",
  }
];

const servicesHeader = {
  miniTitle: "What We Do",
  title: "Creating Impactful Brand Experiences That Resonate",
  description: "We create unforgettable brand experiences through strategic activations, innovative campaigns,and impactful audience engagement. Our expertise ensures your brand stands out and connects meaningfully with your audience."
}

const reportsHeader = {
  miniTitle: "Reports",
  title: "Smart Reporting & Analytics",
  description: "Effortlessly track, manage, and analyze your data with our digital reporting tools.."
}

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
    <div className="containerPaddingBig">

      <div
        className="what-we-do"
        ref={ref}
      >
        <div className="headerCommon">
          <Reveal>
            <h1>{servicesHeader.miniTitle}</h1>
          </Reveal>
          <Reveal>
            <div className="subtitle">{servicesHeader.title}</div>
          </Reveal>
          <Reveal>
            <p className="description">
              {servicesHeader.description}
            </p>
          </Reveal>
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
    </div>
  );
};

export default WhatWeDo;