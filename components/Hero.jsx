'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Hero.css';

const images = [
  { src: '/images/kerala/Munnar.jpg', alt: 'Munnar Tourism - Premium Taxi Services by Ektha Cabs Cochin' },
  { src: '/images/kerala/Thekkady.jpg', alt: 'Thekkady Tourism - Premium Taxi Services by Ektha Cabs Cochin' },
  { src: '/images/kerala/Alleppey.jpg', alt: 'Alleppey Tourism - Premium Taxi Services by Ektha Cabs Cochin' },
  { src: '/images/kerala/Varakala.jpg', alt: 'Varkala Tourism - Premium Taxi Services by Ektha Cabs Cochin' },
  { src: '/images/kerala/Thruvananthapuram.jpg', alt: 'Thiruvananthapuram Tourism - Premium Taxi Services by Ektha Cabs Cochin' },
  { src: '/images/kerala/Kovalam.jpg', alt: 'Kovalam Tourism - Premium Taxi Services by Ektha Cabs Cochin' },
  { src: '/images/kerala/Madurai.jpg', alt: 'Madurai Tourism - Premium Taxi Services by Ektha Cabs Cochin' },
  { src: '/images/kerala/Rameshwaram.jpg', alt: 'Rameshwaram Tourism - Premium Taxi Services by Ektha Cabs Cochin' },
];

const Hero = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    pickup: '', destination: '', date: '', time: '', name: '', phone: ''
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message =
      `*Quick Cab Inquiry*\n------------------------------\n` +
      `👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n` +
      `📍 *From:* ${formData.pickup}\n🏁 *To:* ${formData.destination}\n` +
      `📅 *Date:* ${formData.date}\n⏰ *Time:* ${formData.time}\n------------------------------`;
    window.open(`https://wa.me/919072836004?text=${encodeURIComponent(message)}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-image-container">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={img.alt}
            fill
            sizes="100vw"
            className={`hero-image-item ${index === currentImage ? 'active' : ''}`}
            priority={index === 0}
            style={{ objectFit: 'cover' }}
          />
        ))}
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Ektha Cabs Cochin: Premium <span className="highlight">Taxi Services</span> in Kochi</h1>
          <p className="hero-subtitle">Professional, Reliable, and Luxury Travel Solutions for Airport Transfers, Outstation Trips, and Curated Kerala Tour Packages.</p>
          <div className="hero-cta">
            <Link href="/book" className="btn btn-primary">Book Your Ride</Link>
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
                  <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Pickup Location</label>
                  <input type="text" name="pickup" placeholder="Enter pickup location" value={formData.pickup} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Destination</label>
                  <input type="text" name="destination" placeholder="Enter destination" value={formData.destination} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Date & Time</label>
                  <div className="form-row">
                    <input type="date" name="date" className="date-input" value={formData.date} onChange={handleChange} required />
                    <input type="time" name="time" className="time-input" value={formData.time} onChange={handleChange} required />
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
                  <a href="tel:+918606036004" className="contact-link"
                    onClick={(e) => {
                      if (typeof window.gtag_report_conversion !== 'undefined') {
                        e.preventDefault();
                        window.gtag_report_conversion('tel:+918606036004');
                      }
                    }}>+91 86060 36004</a>
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
