import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    num: '1',
    title: 'Branding & Identity',
    desc: 'We craft bold, memorable brand identities that tell your story and leave a lasting impression. From logos to full brand guidelines, we ensure consistency and impact across all touchpoints.',
    timeline: '2 – 4 weeks',
    image: 'https://framerusercontent.com/images/A6YnUvBDzORnWsNHEVOfkFUOEk.jpg',
  },
  {
    num: '2',
    title: 'Web Design & Development',
    desc: 'Stunning, high-performance websites tailored to your brand. We design sleek, user-friendly interfaces and develop responsive, fast-loading sites that captivate and convert.',
    timeline: '4 – 8 weeks',
    image: 'https://framerusercontent.com/images/GLw1JhxLR5EOoHTR2xYoOI0OA.jpg',
  },
  {
    num: '3',
    title: 'UI/UX Design',
    desc: 'Seamless, intuitive digital experiences designed to enhance user engagement. We focus on usability, aesthetics, and interaction to create interfaces that feel as good as they look.',
    timeline: '3 – 6 weeks',
    image: 'https://framerusercontent.com/images/EcEkAcDTPF28UqTHcTcvZMdY0I.jpg',
  },
  {
    num: '4',
    title: 'Motion & Visual Design',
    desc: "From eye-catching animations to dynamic video content, we bring visuals to life. Our motion design enhances storytelling and strengthens your brand's presence in a digital world.",
    timeline: '2 – 6 weeks',
    image: 'https://framerusercontent.com/images/YNypdwQUoudZpc88wm2Nbkeepc.jpg',
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="services">
      <div className="services-container">

        {/* Top header row */}
        <div className="services-header">
          <p className="services-label">
            <span className="services-dot" />
            Services
          </p>
          <h2 className="services-heading">What we offer.</h2>
          <p className="services-sub">
            We specialize in creating bold, high-impact digital experiences that set brands apart.
          </p>
        </div>

        {/* 3-col body */}
        <div className="services-body">

          {/* Left — tab list */}
          <div className="services-left">
            <ul className="services-list">
              {services.map((s, i) => (
                <li
                  key={s.num}
                  className={`services-item ${active === i ? 'services-item--active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <span className="services-item-num">{s.num}.</span>
                  <span className="services-item-title">{s.title}</span>
                </li>
              ))}
            </ul>

            <Link to="/pricing" className="services-pricing-btn">
              See pricing
              <span className="services-pricing-arrow">↘</span>
            </Link>
          </div>

          {/* Middle — description + timeline */}
          <div className="services-middle">
            {services.map((s, i) => (
              <div
                key={s.num}
                className={`services-detail ${active === i ? 'services-detail--visible' : ''}`}
              >
                <p className="services-desc">{s.desc}</p>
                <div className="services-timeline">
                  <span className="timeline-label">Timeline</span>
                  <span className="timeline-value">{s.timeline}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right — image */}
          <div className="services-image-wrap">
            {services.map((s, i) => (
              <img
                key={s.num}
                src={s.image}
                alt={s.title}
                className={`services-img ${active === i ? 'services-img--visible' : ''}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}