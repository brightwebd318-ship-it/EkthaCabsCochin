import React from 'react';
import { Phone } from 'lucide-react';
import './FloatingCallButton.css';

const FloatingCallButton = () => {
    return (
        <a href="tel:+918606036004" className="floating-call-btn" aria-label="Call Us">
            <Phone size={24} fill="currentColor" />
        </a>
    );
};

export default FloatingCallButton;
