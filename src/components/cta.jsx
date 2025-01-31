import React from 'react';
import '../styles/cta.scss';

const CTA = () => {
  return (
    <div
      className="together-buttons"
    >
      <button className="get-started" onClick={() => window.location.href = '/contact-us'}>Get in Touch</button>
      {/* <button className="learn-more">Explore Our Work</button> */}
    </div>
  );
};

export default CTA;