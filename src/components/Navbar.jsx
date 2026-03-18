import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // ✅ FIXED SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setScrolled(scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    // run once on mount (important)
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    toggleTheme();
    navigate('/');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">

        {/* Logo */}
        <Link to="/" className="nav-logo">
          Scarlet.
        </Link>

        {/* Desktop */}
        <div className="nav-center-right">
          <button className="nav-theme-label" onClick={handleThemeToggle}>
            ( Optional {isDark ? 'Light' : 'Dark'} version )
          </button>

          <span className="nav-divider" />

          <ul className="nav-links">
            {/* Studio */}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                <span className="nav-text">Studio</span>
                <span className="nav-text-clone">Studio</span>
              </NavLink>
            </li>

            {/* Projects */}
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                <span className="nav-text">Projects</span>
                <span className="nav-text-clone">Projects</span>
              </NavLink>
            </li>

            {/* Blog */}
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                <span className="nav-text">Blog</span>
                <span className="nav-text-clone">Blog</span>
              </NavLink>
            </li>
          </ul>

          <span className="nav-divider" />

          <Link to="/contact" className="nav-cta">
            Contact us
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              Studio
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact us
            </NavLink>
          </li>
          <li>
            <button className="mobile-theme-btn" onClick={handleThemeToggle}>
              Switch to {isDark ? 'Light' : 'Dark'} version
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}