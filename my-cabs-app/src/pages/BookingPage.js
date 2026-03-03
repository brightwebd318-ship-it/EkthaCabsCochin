import React, { useState } from 'react';
import './BookingPage.css';

const BookingPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form data
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="booking-page container">
            <div className="booking-header">
                <h1>Book Your <span className="highlight">Professional</span> Ride</h1>
                <p>Experience the most reliable cab service in Cochin.</p>
            </div>

            <div className="booking-container">
                {!isSubmitted ? (
                    <div className="booking-card">
                        <h2>Reservation Details</h2>
                        <form className="booking-form-detailed" onSubmit={handleSubmit}>
                            <section className="form-section">
                                <h3>1. Contact Information</h3>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="John Doe" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="tel" placeholder="+91 98765 43210" required />
                                    </div>
                                </div>
                            </section>

                            <section className="form-section">
                                <h3>2. Trip Details</h3>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>Pickup Location</label>
                                        <input type="text" placeholder="Hotel / Airport / Residence" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Destination</label>
                                        <input type="text" placeholder="Where are you going?" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Pickup Date</label>
                                        <input type="date" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Pickup Time</label>
                                        <input type="time" required />
                                    </div>
                                </div>
                            </section>

                            <button type="submit" className="btn btn-primary btn-book-large">Confirm Booking Request</button>
                        </form>
                    </div>
                ) : (
                    <div className="booking-card confirmation-card animated fadeIn">
                        <div className="confirmation-header">
                            <div className="success-badge">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <h2>Booking Request Sent!</h2>
                        </div>

                        <div className="confirmation-body">
                            <p>Thank you for choosing <strong>Ektha Cabs Cochin</strong>. We have received your booking details and are currently processing your request.</p>

                            <div className="next-steps">
                                <h3>What's Next?</h3>
                                <ul>
                                    <li>Our representative will call you within 15 minutes to confirm the vehicle.</li>
                                    <li>A driver assignment message will be sent to your phone.</li>
                                    <li>Payment can be made directly to the driver after the trip.</li>
                                </ul>
                            </div>

                            <div className="booking-contact-section">
                                <p>Need immediate confirmation?</p>
                                <div className="contact-info-compact">
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
                            </div>
                        </div>

                        <div className="confirmation-footer">
                            <button onClick={() => setIsSubmitted(false)} className="btn btn-outline">Back to Booking</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingPage;
