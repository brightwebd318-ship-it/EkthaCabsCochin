import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import munnarImg from '../Kerala Tourism Images/Munnar.jpg';
import thekkadyImg from '../Kerala Tourism Images/Thekkady.jpg';
import alleppeyImg from '../Kerala Tourism Images/Alleppey.jpg';
import varkalaImg from '../Kerala Tourism Images/Varakala.jpg';
import thiruvananthapuramImg from '../Kerala Tourism Images/Thruvananthapuram.jpg';
import kovalamImg from '../Kerala Tourism Images/Kovalam.jpg';
import maduraiImg from '../Kerala Tourism Images/Madurai.jpg';
import rameshwaramImg from '../Kerala Tourism Images/Rameshwaram.jpg';


const Hero = ({ heroImage }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [formData, setFormData] = useState({
        pickup: '',
        destination: '',
        date: '',
        time: '',
        name: '',
        phone: ''
    });
    
    const images = [
        munnarImg,
        thekkadyImg,
        alleppeyImg,
        varkalaImg,
        thiruvananthapuramImg,
        kovalamImg,
        maduraiImg,
        rameshwaramImg
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(timer);
    }, [images.length]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const message = `*Quick Cab Inquiry*\n` +
                        `------------------------------\n` +
                        `👤 *Name:* ${formData.name}\n` +
                        `📞 *Phone:* ${formData.phone}\n` +
                        `📍 *From:* ${formData.pickup}\n` +
                        `🏁 *To:* ${formData.destination}\n` +
                        `📅 *Date:* ${formData.date}\n` +
                        `⏰ *Time:* ${formData.time}\n` +
                        `------------------------------`;

        const whatsappUrl = `https://wa.me/919072836004?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        setIsSubmitted(true);
    };

    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            
            {/* Image Background Slider */}
            <div className="hero-image-container">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Kerala Destination ${index + 1}`}
                        className={`hero-image-item ${index === currentImage ? 'active' : ''}`}
                        loading={index === 0 ? "eager" : "lazy"}
                    />
                ))}
            </div>

            {/* Remove static heroImage if it exists as we now have a slider */}

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
                                    <label>Full Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        placeholder="Enter your name" 
                                        value={formData.name}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        placeholder="Enter phone number" 
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Pickup Location</label>
                                    <input 
                                        type="text" 
                                        name="pickup"
                                        placeholder="Enter pickup location" 
                                        value={formData.pickup}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Destination</label>
                                    <input 
                                        type="text" 
                                        name="destination"
                                        placeholder="Enter destination" 
                                        value={formData.destination}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Date & Time</label>
                                    <div className="form-row">
                                        <input 
                                            type="date" 
                                            name="date"
                                            className="date-input" 
                                            value={formData.date}
                                            onChange={handleChange}
                                            required 
                                        />
                                        <input 
                                            type="time" 
                                            name="time"
                                            className="time-input" 
                                            value={formData.time}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Book Now</button>
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
