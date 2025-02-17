import React from 'react';
import '../styles/marketingCTA.scss';

const MarketingCTA = () => {
  return (
    <div className="marketing-cta containerPaddingBig">
      <div className="cta-title-container">
        <div className="cta-title">
          <h1>Transform Your Marketing Today</h1>
        </div>
        <div className="cta-content">
          <p>
            Ready to elevate your brand? Connect with Gurella Marketing for innovative solutions that drive results and transform your marketing strategy.
          </p>
          <div className="cta-buttons">
            <button className="cta-button contact">Contact</button>
            {/* <button className="cta-button learn-more">Learn More</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingCTA; 