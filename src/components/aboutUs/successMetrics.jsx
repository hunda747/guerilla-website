import React from 'react';
import '../../styles/successMetrics.scss';
import CTA from '../cta';
import { Reveal } from '../reveal';
import AnimatedNumber from '../counter';
import { useNavigate } from 'react-router-dom';

const SuccessMetrics = () => {
  const navigate = useNavigate();
  const metrics = [
    {
      title: 'Campaigns & Activations',
      value: 1000,
      description: 'Nationwide brand launches to regional roadshows for Safaricom, Coca-Cola, Roil, and more'
    },
    {
      title: 'Consumers Engaged',
      value: 59000,
      description: 'Coca-Cola\'s "Billion Reasons to Believe" campaign sampling and activations'
    },
    {
      title: 'Outlets Activated',
      value: 13000,
      description: 'Hyper-localized strategies for Roil Detergent and other brands'
    }
  ];

  return (
    <div className="containerPaddingBig">
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
            <div className="metric-card" key={index} onClick={() => navigate('/works')}>
              {/* <div className="metric-icon">✓</div> */}
              <div className="metric-content">
                <h3 className="metric-value">
                  <AnimatedNumber targetNumber={metric.value >= 1000000
                    ? Math.round(metric.value / 1000000)
                    : metric.value >= 1000
                      ? Math.round(metric.value / 1000)
                      : Math.round(metric.value)} />{metric.value >= 1000000 ? " M" : metric.value >= 1000 ? " K" : ""}+
                </h3>
                <p className="metric-title">{metric.title}</p>
                {/* <p className="metric-description">{metric.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SuccessMetrics;