import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Sobre a <span>CassIA</span> Technology</h2>
            <p className="subtitle">Revolucionando o atendimento ao cliente com inteligência artificial</p>
            
            <p>
              Somos especialistas em desenvolver soluções de inteligência artificial para atendimento 
              via WhatsApp, ajudando empresas a melhorar a experiência do cliente, aumentar a eficiência 
              operacional e impulsionar os resultados de negócios.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h3>98%</h3>
                <p>Satisfação do cliente</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Disponibilidade</p>
              </div>
              <div className="stat-item">
                <h3>+70%</h3>
                <p>Redução de tempo de resposta</p>
              </div>
            </div>
            
            <p>
              Nossa tecnologia combina o poder da inteligência artificial com a praticidade do WhatsApp, 
              a plataforma de mensagens mais utilizada no Brasil, para oferecer uma solução completa 
              que atende às necessidades específicas do seu negócio.
            </p>
            
            <div className="about-buttons">
              <a href="#features" className="btn btn-primary">Nossas Soluções</a>
              <a href="#contact" className="btn btn-secondary">Fale Conosco</a>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <div className="image-box">
                <div className="tech-icons">
                  <div className="icon-item">
                    <i className="fas fa-brain"></i>
                    <span>IA Avançada</span>
                  </div>
                  <div className="icon-item">
                    <i className="fab fa-whatsapp"></i>
                    <span>WhatsApp API</span>
                  </div>
                  <div className="icon-item">
                    <i className="fas fa-comments"></i>
                    <span>NLP</span>
                  </div>
                  <div className="icon-item">
                    <i className="fas fa-cloud"></i>
                    <span>Cloud</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
