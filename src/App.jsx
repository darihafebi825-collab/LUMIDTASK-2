import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Home page components
import Hero from './components/Hero';
import AboutStats from './components/AboutStats';
import Benefits from './components/Benefits';
import SelectedWork from './components/SelectedWork';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import BlogPreview from './components/BlogPreview';
import FAQ from './components/FAQ';

// Other pages
import Studio from './pages/Studio';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Detail pages
import ProjectDetail from './pages/Project detail';
import BlogDetail from './pages/Bloagdetail';

function Home() {
  return (
    <>
      <Hero />
      <AboutStats />
      <SelectedWork />
      <Services />
      <Process />
      <Benefits />
      <Pricing />
      <Testimonials />
      <FAQ />
      <BlogPreview />
    </>
  );
}

// Fixed Buttons Component
function FixedButtons() {
  const containerStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    zIndex: 9999,
  };

  const btnStyle = {
    background: '#fff',
    color: '#111',
    border: '1.5px solid #ccc',
    padding: '12px 22px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '6px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    display: 'block',
    textAlign: 'center',
    transition: 'all 0.2s ease',
  };

  return (
    <div style={containerStyle}>
      <a
        href="https://polar.sh/checkout/polar_c_O1PUhK76wTozrXPBh9rb7vC9jm82LadGcyFH20xdJJl"
        target="_blank"
        rel="noopener noreferrer"
        style={btnStyle}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#111';
          e.currentTarget.style.color = '#fff';
          e.currentTarget.style.borderColor = '#111';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = '#fff';
          e.currentTarget.style.color = '#111';
          e.currentTarget.style.borderColor = '#ccc';
        }}
      >
        Buy Template - $99
      </a>
      <a
        href="https://thaer.shop/"
        target="_blank"
        rel="noopener noreferrer"
        style={btnStyle}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#111';
          e.currentTarget.style.color = '#fff';
          e.currentTarget.style.borderColor = '#111';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = '#fff';
          e.currentTarget.style.color = '#111';
          e.currentTarget.style.borderColor = '#ccc';
        }}
      >
        More Templates
      </a>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Studio />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FixedButtons />  {/* ← Stays fixed on every page */}
      </Router>
    </ThemeProvider>
  );
}

export default App;