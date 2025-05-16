import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: 'fas fa-robot',
      title: 'Agentes de IA Avançados',
      description: 'Nossos agentes de IA são treinados para entender o contexto e fornecer respostas precisas e personalizadas para seus clientes.'
    },
    {
      id: 2,
      icon: 'fas fa-clock',
      title: 'Atendimento 24/7',
      description: 'Disponibilidade total para seus clientes, respondendo dúvidas e solucionando problemas a qualquer hora do dia ou da noite.'
    },
    {
      id: 3,
      icon: 'fas fa-chart-line',
      title: 'Análise de Dados',
      description: 'Obtenha insights valiosos sobre as interações com seus clientes para melhorar continuamente seu atendimento.'
    },
    {
      id: 4,
      icon: 'fas fa-sync',
      title: 'Integração Perfeita',
      description: 'Integração fácil com seus sistemas existentes, CRMs e plataformas de e-commerce sem complicações.'
    },
    {
      id: 5,
      icon: 'fas fa-user-friends',
      title: 'Personalização Avançada',
      description: 'Atendimento personalizado baseado no histórico e preferências de cada cliente, criando experiências únicas.'
    },
    {
      id: 6,
      icon: 'fas fa-shield-alt',
      title: 'Segurança Garantida',
      description: 'Proteção de dados e conformidade com as regulamentações de privacidade para garantir a segurança das informações.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2>Nossas <span>Soluções</span></h2>
          <p>Transforme seu atendimento ao cliente com nossas soluções de IA para WhatsApp</p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="features-cta">
          <h3>Pronto para revolucionar seu atendimento?</h3>
          <a href="#contact" className="btn btn-primary">Solicite uma Demonstração</a>
        </div>
      </div>
    </section>
  );
};

export default Features;
