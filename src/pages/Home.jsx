import React from 'react';
import Hero from '../components/Hero';
import AboutStats from '../components/AboutStats';
import SelectedWork from '../components/SelectedWork';
import Benefits from '../components/Benefits';

import Services from '../components/Services';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import BlogPreview from '../components/BlogPreview';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutStats />
      <Benefits />
      <SelectedWork />
      <Services />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <BlogPreview />
    </main>
  );
}