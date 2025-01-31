import React from 'react';
import TrustedBrand from '../components/home/trustedBrand';
import Navbar from '../components/navbar';
import EventShowcase from '../components/home/eventShowcase';
import WhatWeDo from '../components/home/whatWeDo';
import OurTeam from '../components/home/ourTeam';
import Testimony from '../components/home/testimony';
import Together from '../components/home/together';
import Footer from '../components/footer';
import Example from '../components/home/example';
import ShuffleHero from '../components/home/heroSection';
import SuccessMetrics from '../components/aboutUs/successMetrics';

const Home = () => {

  return (
    <>
      <Navbar />
      <ShuffleHero />
      {/* <TrustedBrand /> */}
      {/* <EventShowcase /> */}
      <WhatWeDo />
      <Example />
      <SuccessMetrics />
      <OurTeam />
      <Testimony />
      <Together />
      <Footer />
    </>
  );
};

export default Home;
