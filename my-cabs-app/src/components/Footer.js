import React from 'react';
import { 
    Facebook, 
    Instagram, 
    Twitter, 
    ChevronUp, 
    MessageCircle, 
    Phone, 
    Mail, 
    MapPin,
    ArrowRight
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // 2026 Perfect Local SEO Schema for Cab Services
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": "Ektha Cabs Cochin",
        "image": "https://www.ekthacabs.com/logo.png",
        "@id": "https://www.ekthacabs.com",
        "url": "https://www.ekthacabs.com",
        "telephone": "+918606036004",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ektha Cabs, Nayathode",
            "addressLocality": "Angamaly, Nedumbassery",
            "addressRegion": "Kerala",
            "postalCode": "683572",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 10.1632,
            "longitude": 76.3803
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
        }
    };

    return (
        <footer className="main-footer" id="contact">
            {/* Inject JSON-LD Schema for Local SEO */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            
            <div className="footer-top-border"></div>

            <div className="container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            Ektha<span>Cabs</span>Cochin
                        </div>
                        <p className="footer-description">
                            The premier luxury cab service in Cochin, dedicated to providing unparalleled comfort, safety, and reliability for all your travel needs. Experience Kerala like never before.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="social-icon" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="social-icon" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#home"><ArrowRight size={14} /> Home</a></li>
                            <li><a href="#services"><ArrowRight size={14} /> Our Services</a></li>
                            <li><a href="/EkthaCabsCochin/fleet"><ArrowRight size={14} /> Luxury Fleet</a></li>
                            <li><a href="#about"><ArrowRight size={14} /> About Us</a></li>
                            <li><a href="#contact"><ArrowRight size={14} /> Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-column">
                        <h3>Our Services</h3>
                        <ul className="footer-links">
                            <li><a href="#"><ArrowRight size={14} /> Airport Transfers</a></li>
                            <li><a href="#"><ArrowRight size={14} /> Kerala Tour Packages</a></li>
                            <li><a href="#"><ArrowRight size={14} /> Sabarimala Service</a></li>
                            <li><a href="#"><ArrowRight size={14} /> Outstation Cabs</a></li>
                            <li><a href="#"><ArrowRight size={14} /> Wedding Car Rental</a></li>
                        </ul>
                    </div>

                    {/* Contact Detail Card */}
                    <div className="footer-contact-card">
                        <div className="glass-contact-card">
                            <h3>Get In Touch</h3>
                            <div className="contact-list">
                                <a href="tel:+918606036004" className="contact-item">
                                    <div className="icon-circle">
                                        <Phone size={18} />
                                    </div>
                                    <span>+91 86060 36004</span>
                                </a>
                                <a href="mailto:Ekthacabs@gmail.com" className="contact-item">
                                    <div className="icon-circle">
                                        <Mail size={18} />
                                    </div>
                                    <span>Ekthacabs@gmail.com</span>
                                </a>
                                <div className="contact-item">
                                    <div className="icon-circle">
                                        <MapPin size={18} />
                                    </div>
                                    <span>Nayathode, Kerala 683572</span>
                                </div>
                            </div>
                            <a href="https://wa.me/919072836004" target="_blank" rel="noopener noreferrer" className="footer-whatsapp-btn">
                                <MessageCircle size={20} /> Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="back-to-top" onClick={scrollToTop}>
                        <ChevronUp size={24} />
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        © 2026 EkthaCabsCochin. All rights reserved. Designed for 
                        <a href="https://brightwebd.com/" target="_blank" rel="noopener noreferrer"> BrightWebD 31:8</a>
                    </div>
                    <div className="legal-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
