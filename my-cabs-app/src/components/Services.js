import { Link } from 'react-router-dom';
import { Plane, Map, Navigation, Briefcase } from 'lucide-react';
import './Services.css';

const services = [
    {
        title: 'Airport Transfers',
        description: 'Timely and comfortable pickups/drops to Cochin International Airport (COK).',
        icon: <Plane size={32} />
    },
    {
        title: 'Local Sightseeing',
        description: 'Explore the beauty of Fort Kochi, Marine Drive, and more with our local experts.',
        icon: <Map size={32} />
    },
    {
        title: 'Outstation Trips',
        description: 'Premium intercity travel to Munnar, Alleppey, Thekkady and beyond.',
        icon: <Navigation size={32} />
    },
    {
        title: 'Corporate Rentals',
        description: 'Professional cab solutions for your business meetings and guest transfers.',
        icon: <Briefcase size={32} />
    }
];

const Services = () => {
    return (
        <section id="services" className="services section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our <span className="highlight">Professional</span> Services</h2>
                    <p className="section-subtitle">We offer a wide range of travel solutions tailored to your needs in Cochin and beyond.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-card-title">{service.title}</h3>
                            <p className="service-card-description">{service.description}</p>
                            <Link to="/book" className="service-link">Learn More →</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
