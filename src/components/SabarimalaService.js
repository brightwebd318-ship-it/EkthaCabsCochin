import React, { useEffect, useRef } from 'react';
import './SabarimalaService.css';
import sabarimalaImg from '../assets/sabarimala_temple.jpg';

const WHATSAPP_URL = 'https://wa.me/919072836004';

const SabarimalaService = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('sab-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        const el = sectionRef.current;
        if (el) observer.observe(el);
        return () => { if (el) observer.unobserve(el); };
    }, []);

    const handleWhatsApp = () => {
        window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    };

    return (
        <section
            id="sabarimala-service"
            className="sab-section"
            ref={sectionRef}
        >
            {/* Decorative background glow */}
            <div className="sab-bg-glow" aria-hidden="true" />

            <div className="container">
                {/* Section Header */}
                <div className="sab-header">
                    <span className="sab-badge">🙏 Pilgrimage Special</span>
                    <h2 className="sab-title">
                        Sabarimala <span className="sab-highlight">Pilgrimage</span> Taxi Service
                    </h2>
                    <p className="sab-subtitle">
                        Comfortable and reliable taxi service for Sabarimala pilgrims.
                    </p>
                </div>

                {/* Banner Image */}
                <div className="sab-banner-wrapper" onClick={handleWhatsApp} role="button" tabIndex={0} onKeyPress={e => e.key === 'Enter' && handleWhatsApp()} aria-label="Enquire about Sabarimala taxi on WhatsApp">
                    <img
                        src={sabarimalaImg}
                        alt="Sabarimala Temple – Sacred Pilgrimage Destination in Kerala"
                        className="sab-banner-img"
                    />
                    <div className="sab-banner-overlay" aria-hidden="true" />
                    <div className="sab-banner-caption">
                        <span className="sab-banner-caption-text">Sabarimala Temple, Kerala</span>
                    </div>
                </div>

                {/* Content Card */}
                <div className="sab-content-card">
                    <div className="sab-icon-row" aria-hidden="true">
                        <span className="sab-icon">🚗</span>
                        <span className="sab-icon-divider" />
                        <span className="sab-icon">⛰️</span>
                        <span className="sab-icon-divider" />
                        <span className="sab-icon">🙏</span>
                    </div>

                    <p className="sab-description">
                        We provide <strong>safe and comfortable taxi services</strong> for Sabarimala pilgrims
                        from <strong>Kochi and surrounding areas</strong>. Our drivers are experienced with
                        Sabarimala routes, ensuring a smooth and peaceful pilgrimage journey. Travel with
                        confidence – we handle the road so you can focus on your devotion.
                    </p>

                    <div className="sab-features">
                        <div className="sab-feature-item">
                            <span className="sab-feature-dot" />
                            <span>Experienced Sabarimala Route Drivers</span>
                        </div>
                        <div className="sab-feature-item">
                            <span className="sab-feature-dot" />
                            <span>Comfortable &amp; Sanitized Vehicles</span>
                        </div>
                        <div className="sab-feature-item">
                            <span className="sab-feature-dot" />
                            <span>Pickup from Kochi &amp; Nearby Areas</span>
                        </div>
                        <div className="sab-feature-item">
                            <span className="sab-feature-dot" />
                            <span>24/7 Availability During Season</span>
                        </div>
                    </div>

                    <button
                        className="sab-whatsapp-btn"
                        onClick={handleWhatsApp}
                        id="sabarimala-whatsapp-enquire-btn"
                        aria-label="Enquire about Sabarimala taxi service on WhatsApp"
                    >
                        <svg className="sab-wa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Enquire on WhatsApp
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SabarimalaService;
