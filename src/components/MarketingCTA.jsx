import React from 'react';
import '../styles/marketingCTA.scss';
import { LocationOn } from '@mui/icons-material';
import CTA from './cta';

const MarketingCTA = () => {
  return (
    <div className="marketing-cta containerPaddingBig">
      <div className="cta-title-container">
        <div className="cta-title">
          <h1>Transform Your Marketing Today</h1>
          {/* <p className='cta-description'>
            Ready to elevate your brand? Connect with Gurella Marketing for innovative solutions that drive results and transform your marketing strategy.
          </p> */}
          <p className='cta-location'>
            <span><LocationOn /></span>
            <span>Addis Ababa, Ethiopia, From 22 to Megenagna around Lem hotel</span>
          </p>
          <div className="cta-buttons">
            <CTA />
            {/* <button className="cta-button contact">Contact</button> */}
            {/* <button className="cta-button learn-more">Learn More</button> */}
          </div>
        </div>
        <div className="cta-content">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d934.8469058217551!2d38.79661359744628!3d9.018620349333546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8568f92b6a39%3A0xa25529ab536bd064!2s2Q9W%2BGQ3%20Admas%20University%20College%2C%20Addis%20Ababa!5e1!3m2!1sen!2set!4v1739970081360!5m2!1sen!2set" className='cta-map' style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default MarketingCTA; 