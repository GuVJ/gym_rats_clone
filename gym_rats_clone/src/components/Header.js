// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Allinea Life Logo" className="logo" />
      <nav className="nav">
        <a href="#about">Sobre Nós</a>
        <a href="#features">Funcionalidades</a>
        <a href="#benefits">Benefícios</a>
        <a href="#testimonials">Depoimentos</a>
        <a href="#faqs">FAQs</a>
        <a href="#contact">Contato</a>
      </nav>
      <a href="#demo" className="btn-header">Agende uma Demonstração</a>
    </header>
  );
}

export default Header;
