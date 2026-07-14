'use client';

import { Phone } from 'lucide-react';
import './FloatingCallButton.css';

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+918606036004"
      className="floating-call-btn"
      aria-label="Call Us"
      onClick={(e) => {
        if (typeof window.gtag_report_conversion !== 'undefined') {
          e.preventDefault();
          window.gtag_report_conversion('tel:+918606036004');
        }
      }}
    >
      <Phone size={24} fill="currentColor" />
    </a>
  );
};

export default FloatingCallButton;
