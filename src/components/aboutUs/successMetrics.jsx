import React from 'react';
import '../../styles/successMetrics.scss';
import CTA from '../cta';
import { Reveal } from '../reveal';

const SuccessMetrics = () => {
  const metrics = [
    {
      title: 'Campaigns & Activations',
      value: '1K+',
      description: 'Nationwide brand launches to regional roadshows for Safaricom, Coca-Cola, Roil, and more'
    },
    {
      title: '59,000+ Consumers Engaged',
      value: '59K+',
      description: 'Coca-Cola\'s "Billion Reasons to Believe" campaign sampling and activations'
    },
    {
      title: '12,960 Outlets Activated',
      value: '12K+',
      description: 'Hyper-localized strategies for Roil Detergent and other brands'
    }
  ];

  return (
    <section className="success-metrics">
      <div className="header-container">
        <Reveal>
          <h2 className="section-title">Our Impact: 12+ Years of Proven Expertise</h2>
        </Reveal>
        <div className="section-description">
          <p>At Guerilla, we believe every client’s dream is like a seed brimming with untapped potential. Just as a farmer nurtures seeds into thriving forests, we dedicate ourselves to cultivating your brand’s aspirations into tangible success.</p>
          <CTA />
        </div>
      </div>

      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div className="metric-card" key={index}>
            {/* <div className="metric-icon">✓</div> */}
            <div className="metric-content">
              <h3 className="metric-value">
                {metric.value}</h3>
              <p className="metric-title">{metric.title}</p>
              {/* <p className="metric-description">{metric.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessMetrics;