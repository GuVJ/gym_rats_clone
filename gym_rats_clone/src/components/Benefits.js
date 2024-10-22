// src/components/Benefits.js
import React from 'react';
import { FaUserCheck, FaComments, FaCogs, FaLightbulb } from 'react-icons/fa';
import './Benefits.css';

function Benefits() {
  const benefits = [
    {
      title: 'Melhora na Adesão.',
      description: 'Aumente o engajamento dos pacientes com o tratamento.',
      icon: <FaUserCheck />,
    },
    {
      title: 'Comunicação Eficiente',
      description: 'Melhore a comunicação entre pacientes e profissionais.',
      icon: <FaComments />,
    },
    {
      title: 'Personalização',
      description: 'Adapte a plataforma às necessidades da sua clínica.',
      icon: <FaCogs />,
    },
    {
      title: 'Insights Rápidos',
      description: 'Obtenha informações práticas através de notificações.',
      icon: <FaLightbulb />,
    },
  ];

  return (
    <section className="benefits" id="benefits">
      <h2>Benefícios</h2>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div className="benefit-item" key={index}>
            <div className="benefit-icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
