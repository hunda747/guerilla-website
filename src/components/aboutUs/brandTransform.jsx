import React from 'react';
import '../../styles/brandTransform.scss';
import CTA from '../cta';

const BrandTransform = () => {
  return (
    <div className="brand-transform">
      <div className="content">
        <h1>Let's Transform Your Brand Together</h1>
        <p>Join us in creating innovative marketing strategies that elevate your brand to new heights.</p>
        <CTA />
      </div>
      <div className="image-placeholder">
        {/* Image placeholder */}
      </div>
    </div>
  );
};

export default BrandTransform;
