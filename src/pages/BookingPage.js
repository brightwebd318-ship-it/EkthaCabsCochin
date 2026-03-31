import React, { useState } from 'react';
import './BookingPage.css';

const BookingPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [form, setForm] = useState({
        fullName: '',
        phone: '',
        pickup: '',
        destination: '',
        date: '',
        time: '',
    });

    const [errors, setErrors] = useState({});

    const today = new Date().toISOString().split('T')[0];

    const validate = () => {
        const newErrors = {};

        // Full Name
        if (!form.fullName.trim()) {
            newErrors.fullName = 'Full name is required.';
        } else if (form.fullName.trim().length < 3) {
            newErrors.fullName = 'Name must be at least 3 characters.';
        }

        // Phone
        const phoneRegex = /^[+]?[0-9]{10,13}$/;
        if (!form.phone.trim()) {
            newErrors.phone = 'Phone number is required.';
        } else if (!phoneRegex.test(form.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Enter a valid phone number (10–13 digits).';
        }

        // Pickup
        if (!form.pickup.trim()) {
            newErrors.pickup = 'Pickup location is required.';
        }

        // Destination
        if (!form.destination.trim()) {
            newErrors.destination = 'Destination is required.';
        }

        // Date
        if (!form.date) {
            newErrors.date = 'Pickup date is required.';
        } else if (form.date < today) {
            newErrors.date = 'Date cannot be in the past.';
        }

        // Time
        if (!form.time) {
            newErrors.time = 'Pickup time is required.';
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        // Clear error on change
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            // Scroll to first error
            const firstErrorField = document.querySelector('.input-error');
            if (firstErrorField) firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        const message = `*New Cab Booking Request*\n\n` +
                        `*Customer Name:* ${form.fullName}\n` +
                        `*Phone:* ${form.phone}\n` +
                        `*Pickup Location:* ${form.pickup}\n` +
                        `*Destination:* ${form.destination}\n` +
                        `*Pickup Date:* ${form.date}\n` +
                        `*Pickup Time:* ${form.time}`;

        const whatsappUrl = `https://wa.me/919072836004?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

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
                        <form className="booking-form-detailed" onSubmit={handleSubmit} noValidate>

                            {/* Contact Information */}
                            <section className="form-section">
                                <h3>1. Contact Information</h3>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            placeholder="John Doe"
                                            value={form.fullName}
                                            onChange={handleChange}
                                            className={errors.fullName ? 'input-error' : ''}
                                        />
                                        {errors.fullName && <span className="error-msg">⚠ {errors.fullName}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="+91 98765 43210"
                                            value={form.phone}
                                            onChange={handleChange}
                                            className={errors.phone ? 'input-error' : ''}
                                        />
                                        {errors.phone && <span className="error-msg">⚠ {errors.phone}</span>}
                                    </div>
                                </div>
                            </section>

                            {/* Trip Details */}
                            <section className="form-section">
                                <h3>2. Trip Details</h3>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>Pickup Location</label>
                                        <input
                                            type="text"
                                            name="pickup"
                                            placeholder="Hotel / Airport / Residence"
                                            value={form.pickup}
                                            onChange={handleChange}
                                            className={errors.pickup ? 'input-error' : ''}
                                        />
                                        {errors.pickup && <span className="error-msg">⚠ {errors.pickup}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>Destination</label>
                                        <input
                                            type="text"
                                            name="destination"
                                            placeholder="Where are you going?"
                                            value={form.destination}
                                            onChange={handleChange}
                                            className={errors.destination ? 'input-error' : ''}
                                        />
                                        {errors.destination && <span className="error-msg">⚠ {errors.destination}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>Pickup Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            min={today}
                                            value={form.date}
                                            onChange={handleChange}
                                            className={errors.date ? 'input-error' : ''}
                                        />
                                        {errors.date && <span className="error-msg">⚠ {errors.date}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>Pickup Time</label>
                                        <input
                                            type="time"
                                            name="time"
                                            value={form.time}
                                            onChange={handleChange}
                                            className={errors.time ? 'input-error' : ''}
                                        />
                                        {errors.time && <span className="error-msg">⚠ {errors.time}</span>}
                                    </div>
                                </div>
                            </section>

                            <button type="submit" className="btn btn-primary btn-book-large">
                                Confirm Booking Request
                            </button>
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
