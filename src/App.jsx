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
      </Router>
    </ThemeProvider>
  );
}

export default App;