import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="#home">
            <img src="https://zlshgyamqgoyqipiejty.supabase.co/storage/v1/object/public/site//logomarcacassia.svg" alt="CassIA Technology Logo" className="logo-image" />
          </a>
        </div>
        
        <div className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Soluções</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>

        <div className="cta-button">
          <a href="#contact" className="btn btn-primary">Fale Conosco</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
