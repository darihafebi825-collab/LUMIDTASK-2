import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SelectedWork.css';

const projects = [
  {
    id: 1,
    title: 'LuxeWear',
    year: '2025',
    slug: 'luxewear',
    image: 'https://framerusercontent.com/images/Rkv2Y35XqOtjHMDCogQD8Lzlr4o.jpg',
  },
  {
    id: 2,
    title: 'Pulse Media',
    year: '2024',
    slug: 'pulse-media',
    image: 'https://framerusercontent.com/images/hpK2jiBaOZYg5CRERfR8Du1A4.jpg',
  },
  {
    id: 3,
    title: 'Zenith Finance',
    year: '2024',
    slug: 'zenith-finance',
    image: 'https://framerusercontent.com/images/XXuNfmUtvbIoDgOoziBdpthwU.jpg',
  },
  {
    id: 4,
    title: 'BoldTech',
    year: '2023',
    slug: 'boldtech',
    image: 'https://framerusercontent.com/images/i55vTTF0hVCC5GqlkA0XAW6ZSNI.jpg',
  },
  {
    id: 5,
    title: 'Velocity Motors',
    year: '2022',
    slug: 'velocity-motors',
    image: 'https://framerusercontent.com/images/rwxqhSPLCEUd9f042FJNbwEnA.jpg',
  },
  {
    id: 6,
    title: 'NovaFit',
    year: '2022',
    slug: 'novafit',
    image: 'https://framerusercontent.com/images/p3VFqTJkkbSJyG4gQML0VHVxLA.jpg',
  },
];

export default function SelectedWork() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="selected-work">
      <div className="sw-container">

        {/* Header */}
        <div className="sw-header">
          <div className="sw-title-block">
            <h2 className="sw-title">
              <span className="sw-title-bold">Selected </span>
              <span className="sw-title-light">Work</span>
              <span className="sw-title-dot">.</span>
            </h2>
          </div>
          <div className="sw-right">
            <p className="sw-description">
              Explore how Scarlet has helped businesses elevate their digital presence.
            </p>
            <Link to="/projects" className="sw-view-all">
              View all ↗
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="sw-grid">
          {projects.map((p) => (
            <Link
              key={p.id}
              to={`/projects/${p.slug}`}
              className={`sw-card ${hoveredId === p.id ? 'sw-card--hovered' : ''}`}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={p.image}
                alt={p.title}
                className="sw-card__img"
              />
              <div className="sw-card__overlay" />
              <div className="sw-card__info">
                <p className="sw-card__title">{p.title}</p>
                <p className="sw-card__year">{p.year}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}