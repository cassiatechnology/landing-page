import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare email data
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_company: formData.company,
      message: formData.message,
      to_email: 'technologycassia@gmail.com'
    };
    
    // Send email directly using EmailJS
    emailjs.send(
      'service_u21lyrk', // EmailJS service ID
      'template_jhsg34c', // EmailJS template ID
      templateParams,
      'zHuOiVYla31zDIn2e' // EmailJS public key
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormSubmitted(true);
        
        // Reset form after submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: ''
          });
          setFormSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Entre em <span>Contato</span></h2>
          <p>Estamos prontos para transformar o atendimento da sua empresa</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">


            <div className="info-item">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>technologycassia@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="text">
                <h3>Telefone</h3>
                <p>+55 (62) 3229-6801</p>
              </div>
            </div>

            <div className="social-media">
              <h3>Siga-nos</h3>
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

          <div className="contact-form">
            {formSubmitted ? (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <h3>Mensagem enviada com sucesso!</h3>
                <p>Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="company">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="message-textarea"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
