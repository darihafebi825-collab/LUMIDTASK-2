import React, { useEffect, useRef } from 'react';
import './AboutStats.css';

const ABOUT_IMG = 'https://framerusercontent.com/images/LG47yzJKYPaE9iSMjClLZQLV0Iw.jpg?width=2160&height=1440';
const IMG1 = 'https://framerusercontent.com/images/LG47yzJKYPaE9iSMjClLZQLV0Iw.jpg?width=400';
const IMG2 = 'https://framerusercontent.com/images/hpK2jiBaOZYg5CRERfR8Du1A4.jpg?width=400';
const IMG3 = 'https://framerusercontent.com/images/rwxqhSPLCEUd9f042FJNbwEnA.jpg?width=400';

const stats = [
  { number: '15', suffix: '+', label: 'Years of Experience' },
  { number: '100', suffix: '+', label: 'Projects completed' },
  { number: '97', suffix: '%', label: 'Client satisfaction rate' },
  { number: '75', suffix: '%', label: 'Conversion rate improvement' },
];

function AboutStats() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      if (scrollY <= vh) {
        const progress = scrollY / vh;
        const translateY = (1 - progress) * 80;
        const opacity = 0.3 + 0.7 * progress;
        wrapper.style.transform = `translateY(${translateY}px)`;
        wrapper.style.opacity = opacity;
      } else {
        wrapper.style.transform = 'translateY(0px)';
        wrapper.style.opacity = '1';
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'relative',
        zIndex: 1,
        background: '#fff',
        borderRadius: '24px 24px 0 0',
        marginTop: '-24px',
        overflow: 'hidden',
        transform: 'translateY(80px)',
        opacity: 0.3,
        willChange: 'transform, opacity',
      }}
    >
      <section className="about-stats">
        <div className="as-container">
          <div className="about-top">
            <div className="about-label">
              <span className="about-label-dot" />
              About us
            </div>
            <h2 className="about-heading">
              We blend creativity with precision, transforming ideas into{' '}
              <span className="muted">impactful brand identities, sleek user interfaces, and standout digital assets.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="stats-col">
              {stats.map((stat, i) => (
                <div className="stat-card" key={i}>
                  <div className="stat-number">
                    {stat.number}<span className="suffix">{stat.suffix}</span>
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
              <a href="/about" className="stat-cta">
                More about us <span>↗</span>
              </a>
            </div>
            <img src={ABOUT_IMG} alt="Scarlet Studio" className="about-image" />
          </div>
        </div>

        <div className="tagline-section">
          <div className="tagline-row">
            <span className="tagline-text">Bold Ideas</span>
            <img src={IMG1} alt="" className="tagline-img rotate-right" />
            <span className="tagline-text muted">Striking Designs</span>
          </div>

          <div className="tagline-row">
            <img src={IMG2} alt="" className="tagline-img rotate-left" />
            <span className="tagline-text">Precision in Every Pixel</span>
          </div>

          <div className="tagline-row">
            <span className="tagline-text muted">Design Without</span>
            <img src={IMG3} alt="" className="tagline-img rotate-right" />
            <span className="tagline-text">Limits</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutStats;
