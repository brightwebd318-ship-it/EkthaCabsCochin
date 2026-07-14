'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import './LocalSightseeing.css';

const WA_URL = 'https://wa.me/919072836004?text=Hello%2C%20I%20want%20to%20enquire%20about%20Local%20Sightseeing%20%2F%20Daily%20Rental%20Taxi%20Service.';

const cards = [
  { id: 1, title: 'Kochi Local Sightseeing', subtitle: 'Explore the Queen of the Arabian Sea', icon: '🌊', image: '/images/assets/kochi_city.jpg' },
  { id: 2, title: 'Munnar Day Trip', subtitle: 'Misty hills & lush tea gardens', icon: '🌿', image: '/images/assets/munnar_day.jpg' },
  { id: 3, title: 'Alleppey Backwaters', subtitle: 'Serene canals & houseboat experience', icon: '🚣', image: '/images/assets/alleppey_visit.jpg' },
  { id: 4, title: 'Fort Kochi Tour', subtitle: 'Heritage walks & Chinese fishing nets', icon: '⚓', image: '/images/assets/fort_kochi.jpg' },
  { id: 5, title: 'Daily Cab Rentals', subtitle: 'Flexible hourly & full-day hire', icon: '🚗', image: '/images/assets/varkala_gallery.jpg' },
];

const LocalSightseeing = () => {
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const dragDelta = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('ls-visible'); },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const startAuto = () => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % cards.length);
    }, 3500);
  };
  const stopAuto = () => clearInterval(timerRef.current);

  useEffect(() => { startAuto(); return stopAuto; }, []); // eslint-disable-line

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[current];
    if (!card) return;
    const offset = card.offsetLeft - track.offsetWidth / 2 + card.offsetWidth / 2;
    track.scrollTo({ left: offset, behavior: 'smooth' });
  }, [current]);

  const onDragStart = (clientX) => { stopAuto(); setIsDragging(true); dragStart.current = clientX; dragDelta.current = 0; };
  const onDragMove = (clientX) => { if (!isDragging) return; dragDelta.current = dragStart.current - clientX; };
  const onDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDelta.current > 50) setCurrent(p => Math.min(p + 1, cards.length - 1));
    else if (dragDelta.current < -50) setCurrent(p => Math.max(p - 1, 0));
    startAuto();
  };

  const handleCardClick = (idx) => {
    if (Math.abs(dragDelta.current) > 10) return;
    if (idx === current) { window.open(WA_URL, '_blank', 'noopener,noreferrer'); }
    else { setCurrent(idx); }
  };

  return (
    <section id="local-sightseeing" className="ls-section" ref={sectionRef}>
      <div className="ls-bg-glow" aria-hidden="true" />
      <div className="container">
        <div className="ls-header">
          <span className="ls-badge">🗺️ Explore Local</span>
          <h2 className="ls-title">Local Sightseeing &amp; <span className="ls-highlight">Daily Rentals</span></h2>
          <p className="ls-subtitle">Discover Kochi&apos;s hidden gems and Kerala&apos;s iconic destinations with our flexible, comfortable day-trip and rental services.</p>
        </div>

        <div className="ls-slider-wrapper" onMouseEnter={stopAuto} onMouseLeave={() => { if (!isDragging) startAuto(); }}>
          <button className="ls-arrow ls-arrow-left" onClick={() => { stopAuto(); setCurrent(p => Math.max(p - 1, 0)); startAuto(); }} aria-label="Previous">‹</button>

          <div
            className="ls-track" ref={trackRef}
            onMouseDown={e => onDragStart(e.clientX)}
            onMouseMove={e => onDragMove(e.clientX)}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            onTouchStart={e => onDragStart(e.touches[0].clientX)}
            onTouchMove={e => onDragMove(e.touches[0].clientX)}
            onTouchEnd={onDragEnd}
          >
            {cards.map((card, idx) => (
              <div
                key={card.id}
                className={`ls-card ${idx === current ? 'ls-card-active' : ''}`}
                onClick={() => handleCardClick(idx)}
                role="button" tabIndex={0}
                onKeyPress={e => e.key === 'Enter' && handleCardClick(idx)}
                aria-label={`${card.title} – tap to enquire`}
              >
                <Image src={card.image} alt={card.title} fill sizes="(max-width:768px) 90vw, 300px" className="ls-card-img" style={{ objectFit: 'cover' }} draggable={false} />
                <div className="ls-card-overlay" aria-hidden="true" />
                <div className="ls-card-body">
                  <span className="ls-card-icon">{card.icon}</span>
                  <h3 className="ls-card-title">{card.title}</h3>
                  <p className="ls-card-subtitle">{card.subtitle}</p>
                  {idx === current && <span className="ls-card-cta">Enquire on WhatsApp →</span>}
                </div>
              </div>
            ))}
          </div>

          <button className="ls-arrow ls-arrow-right" onClick={() => { stopAuto(); setCurrent(p => Math.min(p + 1, cards.length - 1)); startAuto(); }} aria-label="Next">›</button>
        </div>

        <div className="ls-dots" aria-label="Slide indicators">
          {cards.map((_, idx) => (
            <button key={idx} className={`ls-dot ${idx === current ? 'ls-dot-active' : ''}`} onClick={() => setCurrent(idx)} aria-label={`Go to slide ${idx + 1}`} />
          ))}
        </div>

        <div className="ls-cta-row">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="ls-whatsapp-btn" id="local-sightseeing-whatsapp-btn">
            <svg className="ls-wa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Enquire All Services on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocalSightseeing;
