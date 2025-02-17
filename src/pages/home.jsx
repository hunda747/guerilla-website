import React from 'react';
import TrustedBrand from '../components/home/trustedBrand';
import EventShowcase from '../components/home/eventShowcase';
import WhatWeDo from '../components/home/whatWeDo';
import OurTeam from '../components/home/ourTeam';
import Testimony from '../components/home/testimony';
import Together from '../components/home/together';
import Example from '../components/home/example';
import ShuffleHero from '../components/home/heroSection';
import SuccessMetrics from '../components/aboutUs/successMetrics';
import { motion } from 'framer-motion';
import { usePageTransition } from '../hooks/usePageTransition';
import HeroCenter from '../components/home/heroSectionCopy';
import BrandTransform from '../components/aboutUs/brandTransform';
import Projects from '../components/projects/projects';
import PopImage from '../components/popimage/popimage';
import MarketingCTA from '../components/MarketingCTA';

const Home = () => {
  const { PageTransitionWrapper } = usePageTransition();
  return (
    <>
      <HeroCenter />
      {/* <EventShowcase /> */}
      <TrustedBrand />
      <SuccessMetrics />
      {/* <PopImage /> */}
      <Example />
      <WhatWeDo />
      {/* <Projects /> */}
      {/* <OurTeam /> */}
      <Testimony />
      {/* <BrandTransform /> */}
      {/* <Together /> */}
      <MarketingCTA />
    </>
  );
};

export default Home;
