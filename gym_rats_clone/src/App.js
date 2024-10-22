// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <FAQs />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
