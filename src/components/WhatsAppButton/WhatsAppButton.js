import React, { useState } from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '556232296801'; // WhatsApp number format without spaces or special characters
  const defaultMessage = 'Olá! Gostaria de saber mais sobre os serviços da CassIA Technology.';
  const [message, setMessage] = useState(defaultMessage);
  const [chatOpen, setChatOpen] = useState(false);
  
  const openWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setChatOpen(false);
  };

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="whatsapp-button">
      <button onClick={toggleChat} className="whatsapp-btn">
        <i className="fab fa-whatsapp"></i>
        <span className="whatsapp-tooltip">Fale conosco no WhatsApp</span>
      </button>
      
      {chatOpen && (
        <div className="whatsapp-chat-popup">
          <div className="chat-header">
            <div className="chat-profile">
              <i className="fas fa-user-circle"></i>
              <span>CassIA Technology</span>
            </div>
            <button className="close-chat" onClick={toggleChat}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="chat-messages">
            <div className="received-message">
              <p>Olá! Como podemos ajudar?</p>
            </div>
          </div>
          
          <div className="chat-input-area">
            <textarea 
              value={message} 
              onChange={handleMessageChange} 
              placeholder="Digite sua mensagem..."
              rows="3"
            ></textarea>
            <button onClick={openWhatsApp} className="send-button">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;