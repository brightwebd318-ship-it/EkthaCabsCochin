import React from 'react';
import './Footer.css';

const Footer = () => {
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
        <footer className="footer" id="contact">
            {/* Inject JSON-LD Schema for Local SEO */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            
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
                    <address style={{ fontStyle: 'normal' }}>
                        <ul>
                            <li>📍 Ektha Cabs, Nayathode, Angamaly, Nedumbassery, Kerala 683572</li>
                            <li>📞 <a href="tel:+918606036004" className="contact-link">+91 86060 36004</a></li>
                            <li>✉️ <a href="mailto:Ekthacabs@gmail.com" className="contact-link">Ekthacabs@gmail.com</a></li>
                            <li>📱 <a href="https://wa.me/919072836004" target="_blank" rel="noopener noreferrer" className="contact-link whatsapp-link">WhatsApp: +91 90728 36004</a></li>
                            <li>🕒 Open 24/7</li>
                        </ul>
                    </address>
                </div>

                <div className="footer-map">
                    <h4>Our Location</h4>
                    <div className="map-container">
                        <iframe 
                            title="Ektha Cabs Location"
                            src="https://maps.google.com/maps?q=Ektha%20Cabs,%20Nayathode,%20Angamaly,%20Nedumbassery,%20Kerala%20683572&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
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
