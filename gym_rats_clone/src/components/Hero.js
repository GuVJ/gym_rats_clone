// src/components/Hero.js
import React from 'react';
import './Hero.css';
import Button from './common/Button';
import heroImage from '../assets/hero-image.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Conectando Pacientes e Profissionais de Saúde de Forma Inteligente</h1>
        <p>Uma plataforma que otimiza o acompanhamento de treinos e tratamentos, proporcionando insights e resultados melhores.</p>
        <div className="hero-buttons">
          <Button text="Agende uma Demonstração" />
          <Button text="Comece seu teste gratuito" type="secondary" />
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Allinea Life App" />
      </div>
    </section>
  );
}

export default Hero;
