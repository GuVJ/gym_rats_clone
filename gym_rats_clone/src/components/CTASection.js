// src/components/CTASection.js
import React from 'react';
import './CTASection.css';
import Button from './common/Button';

function CTASection() {
  return (
    <section className="cta-section">
      <h2>Veja como a tecnologia pode transformar sua clínica</h2>
      <Button text="Agende uma Demonstração" />
    </section>
  );
}

export default CTASection;
