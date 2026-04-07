import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './VehicleSlider.css';

import sedanImg  from '../assets/sedan.jpg';
import suvImg    from '../assets/suv.jpg';
import innovaImg from '../assets/innova.jpg';

const WA_BASE = 'https://wa.me/919072836004?text=Hello%2C%20I%20want%20to%20book%20a%20';

/* Maps to FleetPage anchor IDs */
const vehicles = [
    {
        id: 1,
        slug: 'swift',
        name: 'Swift / WagonR',
        model: 'Maruti Swift / WagonR',
        icon: '🚗',
        seats: '4 Seater',
        tag: 'Economy',
        tagColor: '#38bdf8',
        features: ['AC', 'City Rides', 'Fuel Efficient', 'Compact'],
        image: sedanImg,
    },
    {
        id: 2,
        slug: 'dzire',
        name: 'Dzire / Etios',
        model: 'Maruti Dzire / Toyota Etios',
        icon: '🚘',
        seats: '4 Seater',
        tag: 'Comfortable',
        tagColor: '#a78bfa',
        features: ['AC', 'Large Boot', 'Outstation', 'Airport'],
        image: sedanImg,
    },
    {
        id: 3,
        slug: 'innova',
        name: 'Innova Crysta',
        model: 'Toyota Innova Crysta',
        icon: '🚐',
        seats: '6–7 Seater',
        tag: 'Most Popular',
        tagColor: '#10b981',
        features: ['Dual AC', 'Best Comfort', 'Family Trips', 'Long Tours'],
        image: innovaImg,
    },
    {
        id: 4,
        slug: 'ertiga',
        name: 'Ertiga',
        model: 'Maruti Ertiga MPV',
        icon: '🚙',
        seats: '6–7 Seater',
        tag: 'Family Favourite',
        tagColor: '#fb923c',
        features: ['AC', '7-Seater', 'Fuel Efficient', 'Group Travel'],
        image: suvImg,
    },
];

const VehicleSlider = () => {
    const [active, setActive] = useState(0);
    const sectionRef = useRef(null);
    const timerRef   = useRef(null);
    const navigate   = useNavigate();

    /* Scroll-reveal */
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) e.target.classList.add('vs-visible'); },
            { threshold: 0.12 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    /* Auto-rotate */
    useEffect(() => {
        timerRef.current = setInterval(() => setActive(p => (p + 1) % vehicles.length), 4000);
        return () => clearInterval(timerRef.current);
    }, []);

    const goTo = (idx) => {
        clearInterval(timerRef.current);
        setActive(idx);
        timerRef.current = setInterval(() => setActive(p => (p + 1) % vehicles.length), 4000);
    };

    /* Click image → navigate to Fleet Gallery page with anchor */
    const handleViewDetails = (slug) => {
        navigate(`/fleet#${slug}`);
    };

    const v = vehicles[active];

    return (
        <section id="vehicle-showcase" className="vs-section" ref={sectionRef}>
            <div className="vs-bg-glow" aria-hidden="true" />

            <div className="container">
                {/* Header */}
                <div className="vs-header">
                    <span className="vs-badge">🚘 Our Fleet</span>
                    <h2 className="vs-title">
                        Vehicle <span className="vs-highlight">Showcase</span>
                    </h2>
                    <p className="vs-subtitle">
                        Click any vehicle to see full details — or book directly on WhatsApp.
                    </p>
                </div>

                {/* Tab selector */}
                <div className="vs-tabs" role="tablist">
                    {vehicles.map((veh, idx) => (
                        <button
                            key={veh.id}
                            className={`vs-tab ${idx === active ? 'vs-tab-active' : ''}`}
                            onClick={() => goTo(idx)}
                            role="tab"
                            aria-selected={idx === active}
                            id={`vs-tab-${veh.id}`}
                        >
                            <span className="vs-tab-icon">{veh.icon}</span>
                            <span className="vs-tab-label">{veh.name}</span>
                        </button>
                    ))}
                </div>

                {/* Main Showcase card */}
                <div className="vs-showcase" key={v.id}>
                    {/* Clickable image → goes to fleet gallery */}
                    <div
                        className="vs-img-col"
                        onClick={() => handleViewDetails(v.slug)}
                        role="button"
                        tabIndex={0}
                        onKeyPress={e => e.key === 'Enter' && handleViewDetails(v.slug)}
                        aria-label={`View ${v.name} in our vehicle gallery`}
                        title="Click to view full details in our Gallery"
                    >
                        <div className="vs-img-wrapper">
                            <img
                                src={v.image}
                                alt={`${v.model} - Premium Taxi Rental by Ektha Cabs Cochin`}
                                className="vs-img"
                                loading="lazy"
                                draggable="false"
                            />
                            <span
                                className="vs-vehicle-tag"
                                style={{ background: v.tagColor + '22', color: v.tagColor, borderColor: v.tagColor + '55' }}
                            >
                                {v.tag}
                            </span>
                            <div className="vs-img-hover-hint">
                                <span>👁 View Full Gallery</span>
                            </div>
                        </div>
                    </div>

                    <div className="vs-info-col">
                        <div className="vs-icon-big">{v.icon}</div>
                        <h3 className="vs-vehicle-name">{v.name}</h3>
                        <p className="vs-vehicle-model">{v.model}</p>
                        <div className="vs-seats-badge">
                            <span>👥</span> {v.seats}
                        </div>

                        <div className="vs-features">
                            {v.features.map((f, i) => (
                                <span key={i} className="vs-feature-chip">{f}</span>
                            ))}
                        </div>

                        <div className="vs-action-row">
                            <button
                                className="vs-gallery-btn"
                                onClick={() => handleViewDetails(v.slug)}
                                id={`vehicle-gallery-btn-${v.id}`}
                            >
                                View in Gallery →
                            </button>
                            <a
                                href={`${WA_BASE}${encodeURIComponent(v.model)}.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="vs-book-btn"
                                id={`vehicle-book-btn-${v.id}`}
                            >
                                <svg className="vs-wa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                Book on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Dots */}
                <div className="vs-dots">
                    {vehicles.map((_, i) => (
                        <button
                            key={i}
                            className={`vs-dot ${i === active ? 'vs-dot-active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Vehicle ${i + 1}`}
                        />
                    ))}
                </div>

                {/* View All CTA */}
                <div className="vs-view-all-row">
                    <button
                        className="vs-view-all-btn"
                        onClick={() => navigate('/fleet')}
                        id="view-all-vehicles-btn"
                    >
                        View Complete Vehicle Gallery →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VehicleSlider;
