import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: 'Scarlet completely transformed our brand. The design was bold, unique, and exactly what we needed to stand out. Highly recommend!',
    name: 'Emma R.',
    rating: '4.8/5',
    role: 'Startup Founder',
    avatar: 'https://framerusercontent.com/images/ZbBWT6HbhupH7FIQ25kMqURKqgQ.png?width=600&height=1200',
  },
  {
    quote: 'From start to finish, the team was professional, creative, and easy to work with. Our new website looks incredible and performs flawlessly.',
    name: 'James M.',
    rating: '4.9/5',
    role: 'Tech Entrepreneur',
    avatar: 'https://framerusercontent.com/images/PdVnZymDIiku8ywz3BUxAbly3U.png?width=960&height=1200',
  },
  {
    quote: 'Working with Scarlet was a game-changer. Their attention to detail and innovative design approach helped us create a brand identity that truly resonates.',
    name: 'Sophia L.',
    rating: '4.8/5',
    role: 'Marketing Director',
    avatar: 'https://framerusercontent.com/images/4R7HUMP3WUGx8mrykN4wq0PhGo.jpg?width=1200&height=1200',
  },
  {
    quote: 'Scarlet brought our vision to life with stunning UI/UX design. The results exceeded our expectations, and our users love the new interface.',
    name: 'Daniel W.',
    rating: '4.9/5',
    role: 'SaaS Founder',
    avatar: 'https://framerusercontent.com/images/h0Y62FJ4BRDanXQXbAGdNu5jIo.png?width=1137&height=1200',
  },
  {
    quote: 'The motion graphics Scarlet created for our campaign were next level. They helped us grab attention and boost engagement like never before!',
    name: 'Olivia P.',
    rating: '4.7/5',
    role: 'Creative Director',
    avatar: 'https://framerusercontent.com/images/i2sOp7CKOOg8s3DCiTAncc9YGY.png?width=904&height=1200',
  },
  {
    quote: 'Incredible work! The team understood our brand from day one and delivered designs that perfectly captured our essence.',
    name: 'Nathan K.',
    rating: '4.9/5',
    role: 'E-commerce Owner',
    avatar: 'https://framerusercontent.com/images/84lBXq1fwNQQTlBiitbl3LVbrGk.png?width=1200&height=1200',
  },
  {
    quote: "Not only did Scarlet create a visually stunning website, but they also made the process smooth and stress-free. Can't wait to work with them again!",
    name: 'Liam T.',
    rating: '4.8/5',
    role: 'Business Owner',
    avatar: 'https://framerusercontent.com/images/fJZvfxfAkrOQ2RWX05r1LpBGkWw.png?width=800&height=1200',
  },
  {
    quote: "Scarlet is hands down the best design team we've worked with. They combined creativity with strategy, and the results speak for themselves!",
    name: 'Isabella C.',
    rating: '4.9/5',
    role: 'Brand Manager',
    avatar: 'https://framerusercontent.com/images/tgzdwMEshMpdFqhK52TbrDnBB1U.png?width=960&height=1200',
  },
];

function TestimonialCard({ t }) {
  return (
    <div className="t-card">
      <p className="t-quote">"{t.quote}"</p>
      <div className="t-author">
        <img className="t-avatar" src={t.avatar} alt={t.name} />
        <div className="t-info">
          <p className="t-name">{t.name}</p>
          <p className="t-role">{t.role}</p>
        </div>
        <div className="t-rating">
          {t.rating} <span className="t-star">★</span>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction = 'left' }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-row-wrap">
      <div className={`marquee-track ${direction}`}>
        {doubled.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4);

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <div className="section-label">Testimonials</div>
        <h2 className="section-title">Real Results, Real Transformations.</h2>
        <p className="section-subtitle">Here's what our clients have to say about working with Scarlet.</p>
      </div>
      <MarqueeRow items={row1} direction="left" />
      <MarqueeRow items={row2} direction="right" />
    </section>
  );
}