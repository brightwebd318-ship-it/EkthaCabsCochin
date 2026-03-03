import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <section id="about" className="why-choose-us section">
            <div className="container">
                <div className="grid-2">
                    <div className="why-content">
                        <h2 className="section-title">Why Choose <span className="highlight">EkthaCabs</span>?</h2>
                        <p className="description">We pride ourselves on providing the most reliable and premium cab experience in Cochin. Our commitment to safety and quality sets us apart.</p>

                        <div className="features-list">
                            <div className="feature-item">
                                <div className="feature-dot"></div>
                                <div>
                                    <h4>Professional Drivers</h4>
                                    <p>Our drivers are verified, well-trained, and courteous experts who know Cochin's routes perfectly.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-dot"></div>
                                <div>
                                    <h4>Sanitized & Premium Fleet</h4>
                                    <p>All our vehicles are regularly sanitized and maintained to provide a high-end travel experience.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-dot"></div>
                                <div>
                                    <h4>24/7 Customer Support</h4>
                                    <p>We are always here to assist you, ensuring a smooth and worry-free booking experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="why-image-wrapper">
                        <div className="image-accent"></div>
                        <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2670" alt="Driving Excellence" className="why-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
