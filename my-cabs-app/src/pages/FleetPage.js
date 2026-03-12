import React, { useEffect } from 'react';
import './FleetPage.css';

const fleetData = [
  {
    id: 'hatchback',
    category: 'Hatchback',
    models: 'Swift, WagonR, etc.',
    capacity: '4 Passengers + 1 Driver',
    description: 'Perfect for city rides and small families. Economical and comfortable for short to medium distances.',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Swift-like/hatchback
    features: ['AC', 'Music System', 'Compact', 'Economical']
  },
  {
    id: 'sedan',
    category: 'Sedan',
    models: 'Dzire, Etios, etc.',
    capacity: '4 Passengers + 1 Driver',
    description: 'Spacious and comfortable for longer journeys. Offers great boot space for your luggage.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Sedan
    features: ['AC', 'Extra Boot Space', 'Comfortable Seats', 'Smooth Ride']
  },
  {
    id: 'suv',
    category: 'SUV',
    models: 'Innova, Ertiga, etc.',
    capacity: '6-7 Passengers + 1 Driver',
    description: 'Ideal for group travels and family trips. Extra space, powerful performance, and premium comfort.',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // SUV
    features: ['Dual AC', 'Ample Legroom', 'Carrier on Top (Optional)', 'Premium Interiors']
  },
  {
    id: 'luxury',
    category: 'Luxury Cars',
    models: 'Premium Segment',
    capacity: '4 Passengers + 1 Driver',
    description: 'Travel in style with our premium range of luxury cars. Perfect for weddings, corporate events, and special occasions.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Luxury / Mercedes
    features: ['Luxury Interiors', 'Chauffeur Driven', 'High-end Music System', 'VIP Experience']
  }
];

const FleetPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="fleet-page">
      <section className="fleet-hero">
        <div className="container">
          <h1>Our Premium <span className="accent">Gallery</span></h1>
          <p>Choose from our wide range of well-maintained vehicles for a comfortable and safe journey.</p>
        </div>
      </section>

      <section className="fleet-list-section">
        <div className="container fleet-grid">
          {fleetData.map((car, index) => (
            <div className="fleet-card" key={car.id}>
              <div className="fleet-image-wrapper">
                <img src={car.image} alt={car.category} className="fleet-image" />
                <div className="fleet-category-badge">{car.category}</div>
              </div>
              <div className="fleet-card-content">
                <h2>{car.category}</h2>
                <h3 className="models">{car.models}</h3>
                <p className="description">{car.description}</p>
                
                <div className="capacity">
                  <span className="icon">👥</span>
                  <span>{car.capacity}</span>
                </div>
                
                <div className="features">
                  {car.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                
                <a href="/EkthaCabsCochin/book" className="btn btn-primary btn-block">Book {car.category}</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FleetPage;
