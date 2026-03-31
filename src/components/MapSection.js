import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import './MapSection.css';

const MapSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            },
            { threshold: 0.1 }
        );

        const currentElement = sectionRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    const mapUrl = "https://www.google.com/maps/dir/?api=1&destination=Ektha+Cabs+Nayathode+Angamaly+Nedumbassery+Kerala+683572";

    return (
        <section className="map-section" ref={sectionRef}>
            <div className="container">
                <div className="map-wrapper">
                    <div className="map-iframe-container">
                        <iframe 
                            title="Ektha Cabs Location"
                            src="https://maps.google.com/maps?q=Ektha%20Cabs,%20Nayathode,%20Angamaly,%20Nedumbassery,%20Kerala%20683572&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="map-overlay-vignette"></div>
                    </div>

                    <div className="location-card-wrapper">
                        <div className="glass-card location-card">
                            <div className="card-header">
                                <span className="badge">Our Headquarters</span>
                                <h2>Visit Our Office</h2>
                                <p>We're located in the heart of Nedumbassery, providing seamless travel solutions across Kerala.</p>
                            </div>

                            <div className="contact-details">
                                <div className="detail-item">
                                    <div className="icon-box">
                                        <MapPin size={20} />
                                    </div>
                                    <div className="text-box">
                                        <h4>Office Address</h4>
                                        <p>Ektha Cabs, Nayathode, Angamaly, Nedumbassery, Kerala 683572</p>
                                    </div>
                                </div>

                                <div className="detail-item">
                                    <div className="icon-box">
                                        <Phone size={20} />
                                    </div>
                                    <div className="text-box">
                                        <h4>Phone Number</h4>
                                        <a href="tel:+918606036004">+91 86060 36004</a>
                                    </div>
                                </div>

                                <div className="detail-item">
                                    <div className="icon-box">
                                        <Mail size={20} />
                                    </div>
                                    <div className="text-box">
                                        <h4>Email Address</h4>
                                        <a href="mailto:Ekthacabs@gmail.com">Ekthacabs@gmail.com</a>
                                    </div>
                                </div>

                                <div className="detail-item">
                                    <div className="icon-box">
                                        <Clock size={20} />
                                    </div>
                                    <div className="text-box">
                                        <h4>Business Hours</h4>
                                        <p>Available 24/7 for you</p>
                                    </div>
                                </div>
                            </div>

                            <a 
                                href={mapUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn-directions"
                            >
                                Get Directions <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
