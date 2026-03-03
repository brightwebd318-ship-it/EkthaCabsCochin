import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/" className="logo-link" onClick={() => setIsMenuOpen(false)}>
            <span className="logo-text">Ektha<span className="accent">Cabs</span>Cochin</span>
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-active' : ''}`}>
          <a href="/#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="/#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="/#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
          <Link to="/book" className="nav-link btn btn-primary" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
