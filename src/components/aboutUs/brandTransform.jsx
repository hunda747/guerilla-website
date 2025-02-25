import React from 'react';
import '../../styles/brandTransform.scss';
import CTA from '../cta';

import logo from '../../assets/images/gorillalogo.png';
import logoorange from '../../assets/images/orangeLogoBG.webp';

const BrandTransform = () => {
  return (
    <div className="containerPaddingBig">
      <div className="brand-transform">
        <div className="content">
          <h1>Let's Transform Your Brand Together</h1>
          <p>Join us in creating innovative marketing strategies that elevate your brand to new heights.</p>
          {/* <CTA /> */}
          <div
            className="together-buttons"
          >
            <button className="get-started" onClick={() => window.location.href = '/contact-us'}>Get in Touch</button>
            {/* <button className="learn-more">Explore Our Work</button> */}
          </div>
        </div>
        <div className="image-placeholder">
          <img src={logoorange} alt="logo" />
          {/* Image placeholder */}
        </div>
      </div>
    </div>
  );
};

export default BrandTransform;
