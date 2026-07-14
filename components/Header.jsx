'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link href="/" className="logo-link" onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            <span className="logo-text">Ektha<span className="accent">Cabs</span>Cochin</span>
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-active' : ''}`}>
          <Link href="/#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/fleet" className="nav-link" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
          <Link href="/#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/book" className="nav-link btn btn-primary" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
