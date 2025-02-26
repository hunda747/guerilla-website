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
// Define the AboutUsText component
const AboutUsText = () => {
  return (
    <div className="containerPaddingBig">
      <div className="about-us-text">
        <h2>About Us</h2>
        <p>Gorilla Marketing Plc is a dynamic, full-service marketing company based in Ethiopia, dedicated to delivering measurable results for clients both locally and internationally. We specialize in introducing modern, innovative marketing strategies tailored to the Ethiopian business landscape, helping clients maximize their marketing investments.
        </p>
        <p>
          With over 12 years of experience, our team has successfully planned and executed thousands of national and international events and activations. Our expertise ensures seamless coordination and flawless execution every time.
        </p>
        <p>
          We operate nationwide with satellite offices in key regions—Dessie (North), Arba Minch (South), and Dire Dawa (East)—providing extensive ground visibility and enabling successful project delivery.
        </p>
        <p>
          Our services span from creative event conceptualization to on-the-ground execution and documentation. We focus on driving brand innovation, effective communication, and measurable reach for every project.
        </p>
        {/* <div className="project-pillars">
        <div className="project-pillar">
          <div className="icon">
            <BrandingWatermark />
          </div>
          <p>On-brand Conceptions</p>
        </div>
        <div className="project-pillar">
          <div className="icon">
            <BrandingWatermark />
          </div>
          <p>Innovation</p>
        </div>
        <div className="project-pillar">
          <div className="icon">
            <BrandingWatermark />
          </div>
          <p>Reach</p>
        </div>
      </div> */}
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
          {/* <Together /> */}
          <BrandTransform />
          <ContactList />
        </div>
      </div>
    </>
  );
};

export default AboutUs;