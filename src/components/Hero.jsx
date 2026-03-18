import React, { useEffect, useRef } from 'react';

const VIDEO_URL = 'https://framerusercontent.com/assets/nOnG6UjYW8RaewJ5YotxdLwAWKY.mp4';

function Hero() {
  const sectionRef = useRef(null);

  // On load: hero zooms inward (1.15 → 1.0) over 1.8s
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    section.style.transform = 'scale(1.15)';
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        section.style.transition = 'transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        section.style.transform = 'scale(1)';
      });
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Hide hero once scrolled past 100vh
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const handleScroll = () => {
      section.style.visibility = window.scrollY >= window.innerHeight ? 'hidden' : 'visible';
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {/* Background video */}
      <video
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.65) 100%)',
      }} />

      {/* Bottom content row */}
      <div style={{
        position: 'absolute',
        bottom: '36px',
        left: '32px',
        right: '32px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
      }}>

        {/* Left: year + title */}
        <div>
          <p style={{
            color: '#fff',
            fontSize: '14px',
            fontWeight: 400,
            margin: '0 0 8px',
            opacity: 0.9,
          }}>© 2010 - 2025</p>
          <h1 style={{
            color: '#fff',
            fontSize: 'clamp(40px, 7vw, 80px)',
            fontWeight: 700,
            lineHeight: 1.05,
            margin: 0,
            letterSpacing: '-1px',
          }}>
            Scarlet Design Studio®
          </h1>
        </div>

        {/* Right: subtitle */}
        <p style={{
          color: '#fff',
          fontSize: '15px',
          fontWeight: 400,
          maxWidth: '320px',
          textAlign: 'right',
          lineHeight: 1.6,
          opacity: 0.9,
          flexShrink: 0,
          margin: '0 0 0 40px',
        }}>
          We're a cutting-edge digital design studio<br />
          dedicated to crafting bold, immersive experiences.
        </p>

      </div>
    </section>
  );
}

export default Hero;