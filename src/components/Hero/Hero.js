import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Transforme seu atendimento com <span>Inteligência Artificial</span></h1>
          <p>
            Soluções avançadas de IA para WhatsApp que elevam a experiência 
            de atendimento ao cliente e impulsionam seus resultados.
          </p>
          <div className="hero-buttons">
            <a href="#features" className="btn btn-primary">Nossas Soluções</a>
            <a href="#contact" className="btn btn-secondary">Agende uma Demo</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-container">
            <div className="whatsapp-chat">
              <div className="chat-header">
                <div className="profile">
                  <div className="avatar">
                    <span>C</span>
                  </div>
                  <div className="profile-info">
                    <h4>CassIA Assistente</h4>
                    <p>Online</p>
                  </div>
                </div>
              </div>
              <div className="chat-messages">
                <div className="message client">
                  <p>Olá, preciso de informações sobre seus serviços.</p>
                </div>
                <div className="message bot">
                  <p>Olá! Sou a assistente virtual da CassIA Technology. Como posso ajudar você hoje?</p>
                </div>
                <div className="message client">
                  <p>Quais são os benefícios da IA no atendimento?</p>
                </div>
                <div className="message bot">
                  <p>Excelente pergunta! Nossos agentes de IA oferecem atendimento 24/7, respostas instantâneas e personalização avançada, aumentando a satisfação dos clientes em até 85%.</p>
                </div>
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
