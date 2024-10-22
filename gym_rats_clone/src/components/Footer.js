// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-links">
        <a href="#about">Sobre Nós</a>
        <a href="#features">Funcionalidades</a>
        <a href="#contact">Contato</a>
        <a href="/privacy-policy">Política de Privacidade</a>
        <a href="/terms-of-use">Termos de Uso</a>
      </div>
      <div className="footer-social">
        <a href="https://linkedin.com/company/allinealife" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/allinealife" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div className="footer-contact">
        <p>Email: contato@allinealife.com</p>
        <p>Telefone: (11) 1234-5678</p>
      </div>
      <div className="footer-legal">
        <p>&copy; {new Date().getFullYear()} Allinea Life. Todos os direitos reservados.</p>
        <p>Conforme a LGPD.</p>
      </div>
    </footer>
  );
}

export default Footer;
