'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import './FleetPage.css';

const WA_BASE = 'https://wa.me/919072836004?text=Hello%2C%20I%20want%20to%20enquire%20about%20the%20';

const vehicles = [
  { id: 'swift', name: 'Maruti Swift', type: 'Hatchback', seats: '4 Seater', tag: 'Economy', tagColor: '#38bdf8', image: '/images/vehicles/maruti swift.jpg', description: 'Compact, fuel-efficient and perfect for city rides. The Swift offers a smooth, comfortable experience for 4 passengers with great economy for Kochi city travel.', features: ['AC', 'City Rides', 'Fuel Efficient', 'Compact'], icon: '🚗' },
  { id: 'wagonr', name: 'Maruti WagonR', type: 'Hatchback', seats: '4 Seater', tag: 'Spacious', tagColor: '#22d3ee', image: '/images/vehicles/Maruti_Suzuki-WagonR_.avif', description: 'Tall-boy design with surprising interior space. Great for short city trips, airport runs, and everyday commutes with easy ingress and egress.', features: ['AC', 'Tall Cabin', 'Easy Entry', 'Airport Runs'], icon: '🚙' },
  { id: 'dzire', name: 'Maruti Dzire', type: 'Sedan', seats: '4 Seater', tag: 'Comfortable', tagColor: '#a78bfa', image: '/images/fleet/dzire-white.jpg', description: 'A premium compact sedan loved for its spacious boot and comfortable ride. Popular choice for airport transfers, outstation trips, and business travel in Kochi.', features: ['AC', 'Large Boot', 'Smooth Ride', 'Outstation'], icon: '🚘' },
  { id: 'etios', name: 'Toyota Etios', type: 'Sedan', seats: '4 Seater', tag: 'Reliable', tagColor: '#34d399', image: '/images/fleet/etios-silver.jpg', description: 'Toyota reliability at its best. The Etios offers a spacious cabin, excellent fuel economy, and a comfortable ride — ideal for long outstation tours from Kochi.', features: ['AC', 'Toyota Quality', 'Fuel Efficient', 'Long Tours'], icon: '🚖' },
  { id: 'innova', name: 'Toyota Innova Crysta', type: 'Premium SUV', seats: '6–7 Seater', tag: 'Most Popular', tagColor: '#D4AF37', image: '/images/vehicles/innova-crysta.avif', description: 'The ultimate family travel vehicle. The Innova Crysta combines generous space, powerful performance, and premium comfort — perfect for Kerala tours, family trips, and pilgrimages.', features: ['Dual AC', 'Premium Interior', 'Group Travel', 'Pilgrimage Tours'], icon: '🚐' },
  { id: 'ertiga', name: 'Maruti Ertiga', type: 'MPV', seats: '6–7 Seater', tag: 'Family Favourite', tagColor: '#fb923c', image: '/images/fleet/ertiga-white.jpg', description: 'The Ertiga is a versatile 7-seater MPV that balances space and economy superbly. Ideal for family tours, outstation trips, and group rides from Kochi.', features: ['AC', '7-Seater', 'Fuel Efficient', 'Family SUV'], icon: '🚌' },
];

const WA_ICON = (
  <svg className="fp-wa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const FleetPage = () => {
  const pathname = usePathname();
  const refs = useRef({});

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && refs.current[hash]) {
      setTimeout(() => {
        refs.current[hash].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('fp-revealed'); }); },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fp-vehicle-card').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="fleet-page">
      <section className="fp-hero">
        <div className="fp-hero-overlay" />
        <div className="container fp-hero-content">
          <span className="fp-hero-badge">🚗 Our Fleet</span>
          <h1 className="fp-hero-title">Premium <span className="fp-accent">Vehicle</span> Gallery</h1>
          <p className="fp-hero-subtitle">Choose from our well-maintained, sanitized fleet of cars — from compact hatchbacks to premium SUVs and luxury travellers.</p>
          <div className="fp-quick-links">
            {vehicles.map(v => (
              <a key={v.id} href={`#${v.id}`} className="fp-quick-chip">{v.icon} {v.name.split(' ').pop()}</a>
            ))}
          </div>
        </div>
      </section>

      <section className="fp-fleet-section">
        <div className="container">
          <div className="fp-grid">
            {vehicles.map((car) => (
              <div key={car.id} id={car.id} className="fp-vehicle-card" ref={el => { refs.current[car.id] = el; }}>
                <div className="fp-img-wrapper">
                  <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                    <Image
                      src={car.image} alt={car.name} fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="fp-img" style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <span className="fp-tag" style={{ background: car.tagColor + '22', color: car.tagColor, borderColor: car.tagColor + '55' }}>{car.tag}</span>
                </div>
                <div className="fp-card-body">
                  <div className="fp-car-header">
                    <div>
                      <span className="fp-car-type">{car.type}</span>
                      <h2 className="fp-car-name">{car.name}</h2>
                    </div>
                    <span className="fp-car-icon">{car.icon}</span>
                  </div>
                  <div className="fp-seats-row"><span>👥</span><span>{car.seats}</span></div>
                  <p className="fp-car-desc">{car.description}</p>
                  <div className="fp-features">
                    {car.features.map((f, i) => <span key={i} className="fp-feature-chip">{f}</span>)}
                  </div>
                  <a href={`${WA_BASE}${encodeURIComponent(car.name)}.`} target="_blank" rel="noopener noreferrer" className="fp-enquire-btn" id={`enquire-btn-${car.id}`}>
                    {WA_ICON} Enquire on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fp-urbania-section" id="urbania">
        <div className="container">
          <div className="fp-urbania-card">
            <div className="fp-urbania-img-col">
              <div className="fp-urbania-img-wrapper">
                <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '350px' }}>
                  <Image src="/images/vehicles/Force-Urbania-Van.avif" alt="Force Urbania Luxury Traveller" fill sizes="(max-width:768px) 100vw, 50vw" className="fp-urbania-img" style={{ objectFit: 'cover' }} />
                </div>
                <div className="fp-urbania-overlay" />
                <span className="fp-urbania-badge">⭐ Luxury Traveller</span>
              </div>
            </div>
            <div className="fp-urbania-info">
              <span className="fp-urbania-tag">Premium Group Travel</span>
              <h2 className="fp-urbania-title">Luxury Traveller <span className="fp-accent">Force Urbania</span></h2>
              <p className="fp-urbania-desc">Travel in comfort and style with our luxury <strong>Force Urbania</strong> traveller. Perfect for group trips, pilgrimages, and Kerala tours with spacious seating, premium interiors, individual reading lights, and push-back seats.</p>
              <div className="fp-urbania-features">
                {['12–17 Seater', 'AC', 'Push-back Seats', 'Reading Lights', 'Group Tours', 'Pilgrimages'].map((f, i) => (
                  <span key={i} className="fp-feature-chip fp-gold-chip">{f}</span>
                ))}
              </div>
              <a href="https://wa.me/919072836004?text=Hello%2C%20I%20want%20to%20book%20the%20Luxury%20Force%20Urbania%20Traveller." target="_blank" rel="noopener noreferrer" className="fp-urbania-btn" id="book-luxury-traveller-btn">
                {WA_ICON} Book Luxury Traveller
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FleetPage;
