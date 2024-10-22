// src/components/FAQs.js
import React from 'react';
import './FAQs.css';
import Accordion from './common/Accordion';

function FAQs() {
  const faqs = [
    {
      question: 'Como a plataforma pode ajudar minha clínica?',
      answer: 'O Allinea Life otimiza o acompanhamento dos pacientes, melhorando a comunicação e aumentando a adesão ao tratamento.',
    },
    {
      question: 'O Allinea Life é compatível com quais dispositivos?',
      answer: 'Nossa plataforma é compatível com smartphones, tablets e computadores, além de relógios inteligentes.',
    },
    {
      question: 'Como funciona o teste gratuito?',
      answer: 'Você pode experimentar todas as funcionalidades gratuitamente por um período limitado. Agende uma demonstração para saber mais.',
    },
  ];

  return (
    <section className="faqs" id="faqs">
      <h2>FAQs</h2>
      <div className="faqs-list">
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

export default FAQs;
