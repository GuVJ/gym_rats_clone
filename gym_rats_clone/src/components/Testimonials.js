// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      quote: 'O Allinea Life mudou a forma como acompanho meus pacientes, proporcionando insights que antes eu não tinha.',
      author: 'Prof. Luiz, Fisioterapeuta',
    },
    {
      quote: 'O app facilita o acompanhamento fora da clínica, melhorando a adesão dos pacientes ao tratamento.',
      author: 'Renata, Profissional de Saúde',
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>Depoimentos</h2>
      <div className="testimonials-slider">
        {testimonials.map((item, index) => (
          <div className="testimonial-item" key={index}>
            <p>"{item.quote}"</p>
            <h4>{item.author}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
