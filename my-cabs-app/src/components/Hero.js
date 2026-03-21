import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import video1 from '../EkthaHero1.mp4';
import video2 from '../EkthaHero2.mp4';
import video3 from '../EkthaHero3.mp4';
import './Hero.css';

const Hero = ({ heroImage }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(0);
    
    const videos = [video1, video2, video3];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        }, 8000); // Change video every 8 seconds
        return () => clearInterval(timer);
    }, [videos.length]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form data
        setIsSubmitted(true);
    };

    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            
            {/* Video Background Slider */}
            <div className="hero-video-container">
                {videos.map((video, index) => (
                    <video
                        key={index}
                        className={`hero-video-item ${index === currentVideo ? 'active' : ''}`}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                ))}
            </div>

            <img src={heroImage || 'https://images.unsplash.com/photo-1559291071-70c0e231188e?auto=format&fit=crop&q=80&w=2670'} alt="Premium Cab Service" className="hero-bg" />

            <div className="container hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">Experience Premium <span className="highlight">Cab Services</span> in Cochin</h1>
                    <p className="hero-subtitle">Professional, Reliable, and Luxury Travel Solutions for Airport Transfers, Outstation Trips, and Local Sightseeing.</p>
                    <div className="hero-cta">
                        <Link to="/book" className="btn btn-primary">Book Your Ride</Link>
                        <a href="#services" className="btn btn-outline">Explore Services</a>
                    </div>
                </div>

                <div className="hero-form-card">
                    {!isSubmitted ? (
                        <>
                            <h3>Quick Booking</h3>
                            <form className="booking-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Pickup Location</label>
                                    <input type="text" placeholder="Enter pickup location" required />
                                </div>
                                <div className="form-group">
                                    <label>Destination</label>
                                    <input type="text" placeholder="Enter destination" required />
                                </div>
                                <div className="form-group">
                                    <label>Date & Time</label>
                                    <div className="form-row">
                                        <input type="date" className="date-input" required />
                                        <input type="time" className="time-input" required />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Search Availability</button>
                            </form>
                        </>
                    ) : (
                        <div className="confirmation-content animated fadeIn">
                            <div className="success-icon">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <h3>Inquiry Received!</h3>
                            <p>Thank you for choosing Ektha Cabs. Our team is checking availability and will contact you shortly.</p>
                            <div className="contact-info-compact">
                                <span>For immediate assistance:</span>
                                <div className="contact-item">
                                    <span className="icon">📞</span>
                                    <a href="tel:+918606036004" className="contact-link">+91 86060 36004</a>
                                </div>
                                <div className="contact-item">
                                    <span className="icon">✉️</span>
                                    <a href="mailto:Ekthacabs@gmail.com" className="contact-link">Ekthacabs@gmail.com</a>
                                </div>
                                <div className="contact-item">
                                    <span className="icon">📱</span>
                                    <a href="https://wa.me/919072836004" target="_blank" rel="noopener noreferrer" className="contact-link whatsapp-link">WhatsApp: +91 90728 36004</a>
                                </div>
                            </div>
                            <button onClick={() => setIsSubmitted(false)} className="btn btn-outline btn-sm mt-3">Back to Search</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
