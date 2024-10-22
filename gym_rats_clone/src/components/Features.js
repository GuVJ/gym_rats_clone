// src/components/Features.js
import React from 'react';
import { FaDumbbell, FaHeartbeat, FaBell, FaChartLine } from 'react-icons/fa';
import './Features.css';

function Features() {
  const features = [
    {
      title: 'Gestão de Treinos',
      description: 'Gerencie treinos dentro e fora da clínica com facilidade.',
      icon: <FaDumbbell />,
    },
    {
      title: 'Monitoramento de Dor e PSE',
      description: 'Acompanhe a evolução dos pacientes em tempo real.',
      icon: <FaHeartbeat />,
    },
    {
      title: 'Notificações Automáticas',
      description: 'Receba insights rápidos via celular e relógio.',
      icon: <FaBell />,
    },
    {
      title: 'Dashboard Detalhado',
      description: 'Visualize dados completos para melhor tomada de decisão.',
      icon: <FaChartLine />,
    },
  ];

  return (
    <section className="features" id="features">
      <h2>Funcionalidades</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
