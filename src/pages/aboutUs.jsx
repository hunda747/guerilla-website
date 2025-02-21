import React from 'react';
import '../styles/aboutUs.scss';
import { motion } from 'framer-motion';
import SuccessMetrics from '../components/aboutUs/successMetrics';
import ContactList from '../components/aboutUs/contactList';
import BrandTransform from '../components/aboutUs/brandTransform';
import OurTeam from '../components/home/ourTeam';
import { BrandingWatermark } from '@mui/icons-material';
import { usePageTransition } from '../hooks/usePageTransition';
import Navbar from '../components/Navbar';
import Together from '../components/home/together';


import safariEventOnCar from '../assets/images/gorilla8.png';
// Define the AboutUsText component
const AboutUsText = () => {
  return (
    <div className="containerPaddingBig">
      <div className="about-us-text">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>

        <div className="about-grid">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={safariEventOnCar} alt="Marketing team collaboration" />
          </motion.div>

          <div className="about-content">
            <motion.div
              className="content-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="icon-wrapper">
                <i className="fas fa-rocket"></i>
              </div>
              <p>Gorilla Marketing Plc is a young, fullservice marketing company registered in Ethiopia. We deliver tangible results for a broad diversity of clients nationwide and international.</p>
            </motion.div>

            <motion.div
              className="content-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="icon-wrapper">
                <i className="fas fa-chart-line"></i>
              </div>
              <p>With over twelve years of experience, our team boasts unparalleled expertise in orchestrating and mobilizing thousands of national and international events and activations.</p>
            </motion.div>

            <motion.div
              className="content-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="icon-wrapper">
                <i className="fas fa-globe-africa"></i>
              </div>
              <p>Reach Guerilla operates nationwide, with satellite project offices in key regions: North(Dessie), South(Aribaminch), and East(Dire-dawa).</p>
            </motion.div>
          </div>
        </div>

        <div className="service-pillars">
          <h3>Our Core Services</h3>
          <div className="pillar-grid">
            {['Creative Conception', 'Ground Execution', 'Brand Communications', 'Innovation'].map((pillar, index) => (
              <motion.div
                key={pillar}
                className="pillar"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="pillar-icon">
                  <i className={`fas fa-${['lightbulb', 'tasks', 'comments', 'rocket'][index]}`}></i>
                </div>
                <h4>{pillar}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {

  return (
    <>
      <Navbar />
      <div className="about-us-container">
        <div className="about-us-content">
          <AboutUsText />
          {/* <SuccessMetrics /> */}
          <OurTeam />
          <Together />
          {/* <BrandTransform /> */}
          <ContactList />
        </div>
      </div>
    </>
  );
};

export default AboutUs;