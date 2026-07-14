'use client';

import { Plane, Compass, Users, CheckCircle, Languages } from 'lucide-react';
import Link from 'next/link';
import './InterstateSection.css';

const regions = [
  { city: 'Bangalore', state: 'Karnataka' },
  { city: 'Mumbai', state: 'Maharashtra' },
  { city: 'Delhi', state: 'NCR' },
  { city: 'Pune', state: 'Maharashtra' },
  { city: 'Chennai', state: 'Tamil Nadu' },
  { city: 'Hyderabad', state: 'Telangana' },
  { city: 'Goa', state: 'Goa' },
  { city: 'Andhra Pradesh', state: 'AP' },
  { city: 'Haryana', state: 'Haryana' }
];

const InterstateSection = () => {
  return (
    <section className="interstate-section" id="interstate-travelers">
      <div className="interstate-bg-glow" aria-hidden="true" />
      <div className="container">
        <div className="interstate-header">
          <span className="interstate-badge">✈️ Domestic Tourist Special</span>
          <h2 className="interstate-title">
            Kochi Cab Services for <span className="highlight">Interstate Travelers</span>
          </h2>
          <p className="interstate-subtitle">
            Are you visiting Kerala from Mumbai, Delhi, Bangalore, Chennai, Pune, Goa, Hyderabad, Andhra Pradesh, or Haryana? We make your transition from flight/train to the road absolutely seamless.
          </p>
        </div>

        <div className="interstate-grid">
          <div className="interstate-info-card glass-card">
            <h3>Tailored for Out-of-State Guests</h3>
            <p className="card-desc">
              We specialize in hosting domestic tourists from major cities across India. Enjoy a hassle-free, comfortable, and localized travel experience in Kerala.
            </p>

            <div className="benefit-list">
              <div className="benefit-item">
                <div className="benefit-icon"><Languages size={20} /></div>
                <div>
                  <h4>Multilingual Drivers</h4>
                  <p>Our drivers are fluent in Hindi, English, Tamil, Telugu, and Kannada, ensuring clear communication.</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon"><Plane size={20} /></div>
                <div>
                  <h4>On-Time Airport Pickups</h4>
                  <p>Direct pickups from Cochin International Airport (COK) domestic terminals. We track flight delays.</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon"><Compass size={20} /></div>
                <div>
                  <h4>Tourist Routes Experts</h4>
                  <p>Experienced in route navigation to Munnar, Alleppey, Thekkady, Varkala, and Sabarimala.</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon"><Users size={20} /></div>
                <div>
                  <h4>Interstate Permits Included</h4>
                  <p>All vehicles have active tourist permits, national permits, and transparent toll/tax handling.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="interstate-regions-card glass-card">
            <h3>Serving Travelers From</h3>
            <p className="regions-desc">We regularly serve tourists and corporate executives arriving from these key regions:</p>
            
            <div className="regions-grid">
              {regions.map((reg, idx) => (
                <div key={idx} className="region-tag">
                  <span className="region-bullet">✓</span>
                  <div>
                    <span className="region-city">{reg.city}</span>
                    <span className="region-state">{reg.state}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="interstate-cta-box">
              <h4>Ready to Explore Kerala?</h4>
              <p>Get a quick, free quote for your custom itinerary on WhatsApp.</p>
              <div className="cta-actions">
                <Link href="/book" className="btn btn-primary">
                  Book Online
                </Link>
                <a
                  href="https://wa.me/919072836004?text=Hello%2C%20I%20am%20planning%20a%20trip%20to%20Kerala%20from%20outside%20the%20state.%20I%20need%20to%20enquire%20about%20your%20taxi%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterstateSection;
