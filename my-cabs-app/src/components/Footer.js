import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-grid">
                <div className="footer-info">
                    <h3 className="footer-logo">Ektha<span>Cabs</span>Cochin</h3>
                    <p className="footer-desc">Your trusted partner for premium travel in Cochin. Experience luxury, safety, and punctuality with every ride.</p>
                    <div className="social-links">
                        {/* Social Icons would go here */}
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="/EkthaCabsCochin/fleet">Our Gallery</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>📍 Marine Drive, Cochin, Kerala</li>
                        <li>📞 <a href="tel:+918606036004" className="contact-link">+91 86060 36004</a></li>
                        <li>✉️ <a href="mailto:Ekthacabs@gmail.com" className="contact-link">Ekthacabs@gmail.com</a></li>
                        <li>📱 <a href="https://wa.me/919072836004" target="_blank" rel="noopener noreferrer" className="contact-link whatsapp-link">WhatsApp: +91 90728 36004</a></li>
                        <li>🕒 Open 24/7</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>© 2026 EkthaCabsCochin. All rights reserved. Designed for <a href="https://brightwebd.com/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>BrightWebD 31:8</a>.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
