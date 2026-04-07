import React, { useRef, useEffect, useState } from 'react';
import './GallerySection.css';

import munnarImg    from '../Kerala Tourism Images/Munnar.jpg';
import alleppeyImg  from '../Kerala Tourism Images/Alleppey.jpg';
import thekkadyImg  from '../Kerala Tourism Images/Thekkady.jpg';
import varkalaImg   from '../Kerala Tourism Images/Varakala.jpg';
import kovalamImg   from '../Kerala Tourism Images/Kovalam.jpg';
import kochiImg     from '../assets/kochi_city.jpg';
import fortKochiImg from '../assets/fort_kochi.jpg';
import innovaImg    from '../assets/innova.jpg';

const galleryItems = [
    { id: 1, src: kochiImg,     alt: 'Kochi City Marine Drive – Premium Cab Services by Ektha Cabs Cochin',        caption: 'Marine Drive, Kochi' },
    { id: 2, src: munnarImg,    alt: 'Munnar Tea Plantations Kerala – Ektha Cabs Cochin Tour Packages',            caption: 'Munnar Hills' },
    { id: 3, src: innovaImg,    alt: 'Premium Toyota Innova Cab Fleet – Ektha Cabs Cochin',                       caption: 'Our Premium Fleet' },
    { id: 4, src: alleppeyImg,  alt: 'Alleppey Backwaters Houseboat – Kerala Cabs by Ektha Cabs Cochin',           caption: 'Alleppey Backwaters' },
    { id: 5, src: fortKochiImg, alt: 'Fort Kochi Heritage Sightseeing – Ektha Cabs Cochin',                         caption: 'Fort Kochi' },
    { id: 6, src: thekkadyImg,  alt: 'Thekkady Periyar Wildlife Sanctuary – Travel with Ektha Cabs Cochin',         caption: 'Thekkady Periyar' },
    { id: 7, src: varkalaImg,   alt: 'Varkala Cliff Beach Kerala – Ektha Cabs Cochin Airport Transfers',            caption: 'Varkala Beach' },
    { id: 8, src: kovalamImg,   alt: 'Kovalam Lighthouse Beach – Luxury Travel by Ektha Cabs Cochin',              caption: 'Kovalam Beach' },
];

const GallerySection = () => {
    const sectionRef  = useRef(null);
    const trackRef    = useRef(null);
    const [slideIdx, setSlideIdx]     = useState(0);
    const [lightbox, setLightbox]     = useState(null);

    /* Scroll-reveal */
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) e.target.classList.add('gl-visible'); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    /* Mobile slider scroll */
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const card  = track.children[slideIdx];
        if (!card)  return;
        track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
    }, [slideIdx]);

    /* Close lightbox on Escape */
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <section id="gallery" className="gl-section" ref={sectionRef}>
            <div className="gl-bg-glow" aria-hidden="true" />
            <div className="container">
                {/* Header */}
                <div className="gl-header">
                    <span className="gl-badge">📸 Our Gallery</span>
                    <h2 className="gl-title">
                        Travel <span className="gl-highlight">Moments</span> &amp; Fleet
                    </h2>
                    <p className="gl-subtitle">
                        A glimpse of our premium vehicles, beautiful Kerala destinations,
                        and memorable journeys with our valued passengers.
                    </p>
                </div>

                {/* Desktop grid */}
                <div className="gl-grid">
                    {galleryItems.map((item, idx) => (
                        <div
                            key={item.id}
                            className="gl-item"
                            onClick={() => setLightbox(idx)}
                            role="button"
                            tabIndex={0}
                            onKeyPress={e => e.key === 'Enter' && setLightbox(idx)}
                            aria-label={`View ${item.alt}`}
                        >
                            <img src={item.src} alt={item.alt} loading="lazy" className="gl-img" />
                            <div className="gl-caption-overlay">
                                <span className="gl-caption">{item.caption}</span>
                                <span className="gl-zoom-icon">🔍</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile slider */}
                <div className="gl-mobile-slider">
                    <div className="gl-mobile-track" ref={trackRef}>
                        {galleryItems.map((item) => (
                            <div key={item.id} className="gl-mobile-card">
                                <img src={item.src} alt={item.alt} loading="lazy" className="gl-mobile-img" />
                                <div className="gl-mobile-caption">{item.caption}</div>
                            </div>
                        ))}
                    </div>
                    <div className="gl-mobile-dots">
                        {galleryItems.map((_, i) => (
                            <button
                                key={i}
                                className={`gl-dot ${i === slideIdx ? 'gl-dot-active' : ''}`}
                                onClick={() => setSlideIdx(i)}
                                aria-label={`Slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {lightbox !== null && (
                <div
                    className="gl-lightbox"
                    onClick={() => setLightbox(null)}
                    role="dialog"
                    aria-label="Image preview"
                >
                    <button className="gl-lb-close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
                    <button
                        className="gl-lb-nav gl-lb-prev"
                        onClick={e => { e.stopPropagation(); setLightbox(p => (p - 1 + galleryItems.length) % galleryItems.length); }}
                        aria-label="Previous image"
                    >‹</button>
                    <img
                        src={galleryItems[lightbox].src}
                        alt={galleryItems[lightbox].alt}
                        className="gl-lb-img"
                        onClick={e => e.stopPropagation()}
                        draggable="false"
                    />
                    <button
                        className="gl-lb-nav gl-lb-next"
                        onClick={e => { e.stopPropagation(); setLightbox(p => (p + 1) % galleryItems.length); }}
                        aria-label="Next image"
                    >›</button>
                    <p className="gl-lb-caption">{galleryItems[lightbox].caption}</p>
                </div>
            )}
        </section>
    );
};

export default GallerySection;
