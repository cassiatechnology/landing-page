import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '556232296801'; // WhatsApp number format without spaces or special characters
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Olá! Gostaria de saber mais sobre os serviços da CassIA Technology.`;

  return (
    <div className="whatsapp-button">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
        <i className="fab fa-whatsapp"></i>
        <span className="whatsapp-tooltip">Fale conosco no WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;