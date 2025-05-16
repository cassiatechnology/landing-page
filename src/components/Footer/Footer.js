import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home">
              <img src="https://zlshgyamqgoyqipiejty.supabase.co/storage/v1/object/public/site//logomarcacassia.svg" alt="CassIA Technology Logo" className="footer-logo-image" />
            </a>
            <p className="description">
              Soluções avançadas de IA para WhatsApp que transformam o atendimento ao cliente.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-column">
              <h3>Menu</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Soluções</a></li>
                <li><a href="#about">Sobre nós</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </div>
            
            <div className="link-column">
              <h3>Soluções</h3>
              <ul>
                <li><a href="#features">Agentes de IA</a></li>
                <li><a href="#features">Atendimento 24/7</a></li>
                <li><a href="#features">Análise de Dados</a></li>
                <li><a href="#features">Integrações</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} CassIA Technology. Todos os direitos reservados.</p>
          </div>
          
          <div className="social-icons">
            <a href="https://www.instagram.com/cassiatechnology/" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/danilodecassia/" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
