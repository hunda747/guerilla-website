import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/aboutUs.scss';
import { motion } from 'framer-motion';
import SuccessMetrics from '../components/aboutUs/successMetrics';
import ContactList from '../components/aboutUs/contactList';
import BrandTransform from '../components/aboutUs/brandTransform';

// Define the AboutUsText component
const AboutUsText = () => {
  return (
    <div className="about-us-text">
      <h2>About Us</h2>
      <p>Gorilla Marketing Plc is a young, fullservice marketing company
        registered in Ethiopia. We deliver tangible results for a broad diversity
        of clients nationwide and international. We're experts at introducing
        modern, unique and innovative marketing techniques to the Ethiopi-
        an business landscape, encouraging clients to spend their marketing
      </p>
      <p>
        With over twelve years of experience, our team boasts unparalleled
        expertise  in orchestrating and mobilizing thousands of national and
        international events and activations. We have honed our skills to
        perfection, ensuring seamless coordination and impeccable execution
        at every step.
      </p>
      <p>
        Reach
        Guerilla operates nationwide; we proudly own satellite project offices
        in key  regions: North (Dessie), South(Aribaminch), and East (Direda-
        wa). This extensive  network provides comprehensive ground visibili- ty,
        enabling successful project execution and activations.
      </p>
      <p>
        Looking at clients' needs and wants, we present services that range
        from the  creative conception of events to on-the-ground execution
        and documentation.  With On-the-ground Executions of Brand and
        Marketing Communications, we strive to drive the following project
        pillars:
      </p>
      <div className="project-pillars">
        <div className="project-pillar">
          On-brand Conceptions
        </div>
        <div className="project-pillar">
          Innovation
        </div>
        <div className="project-pillar">
          Reach
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return <>
    <Navbar />
    <div className="about-us-container">
      <div className="about-us-content">
        <AboutUsText />
        {/* <SuccessMetrics /> */}
        <BrandTransform />
        <ContactList />
      </div>
    </div>
    <Footer />
  </>;
};

export default AboutUs;