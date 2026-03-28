import React, { useState } from 'react';
import { Heart, Compass, Palmtree, Mountain, Landmark, Trees as Tree, Sparkles } from 'lucide-react';
import './KeralaTourPackages.css';
import munnarImg from '../Kerala Tourism Images/Munnar.jpg';
import thekkadyImg from '../Kerala Tourism Images/Thekkady.jpg';
import alleppeyImg from '../Kerala Tourism Images/Alleppey.jpg';
import varkalaImg from '../Kerala Tourism Images/Varakala.jpg';
import thiruvananthapuramImg from '../Kerala Tourism Images/Thruvananthapuram.jpg';
import kovalamImg from '../Kerala Tourism Images/Kovalam.jpg';
import maduraiImg from '../Kerala Tourism Images/Madurai.jpg';
import rameshwaramImg from '../Kerala Tourism Images/Rameshwaram.jpg';


const destinations = [
  {
    id: 1,
    name: "Munnar",
    category: "Hill",
    description: "Lush green tea plantations, cool climate, and misty hills. A perfect escape into nature's lap.",
    highlights: ["Tea Gardens", "Misty Hills", "Eco-Tours"],
    price: "₹7,499",
    image: munnarImg
  },
  {
    id: 2,
    name: "Thekkady",
    category: "Nature",
    description: "Home to Periyar wildlife sanctuary, boating, and spice plantations. Adventure awaits in the wild.",
    highlights: ["Wildlife", "Spices", "Boating"],
    price: "₹6,999",
    image: thekkadyImg
  },
  {
    id: 3,
    name: "Alleppey",
    category: "Nature",
    description: "World-famous backwaters and luxury houseboat stays. Experience the peaceful village life on canals.",
    highlights: ["Backwaters", "Houseboats", "Canals"],
    price: "₹8,999",
    image: alleppeyImg
  },
  {
    id: 4,
    name: "Varkala",
    category: "Beach",
    description: "Unique cliff beach with stunning sunset views and a vibrant cafe culture by the Arabian Sea.",
    highlights: ["Cliff Beach", "Sunset", "Surfing"],
    price: "₹5,499",
    image: varkalaImg
  },
  {
    id: 5,
    name: "Thiruvananthapuram",
    category: "Temple",
    description: "The capital city blending rich heritage with urban life. Famous for its majestic temples and museums.",
    highlights: ["Heritage", "City Life", "Temples"],
    price: "₹4,999",
    image: thiruvananthapuramImg
  },
  {
    id: 6,
    name: "Kovalam",
    category: "Beach",
    description: "Iconic lighthouse beach with golden sands and pristine resorts. Ideal for beach lovers.",
    highlights: ["Lighthouse", "Resorts", "Swimming"],
    price: "₹5,999",
    image: kovalamImg
  },
  {
    id: 7,
    name: "Madurai",
    category: "Temple",
    description: "An ancient heritage city known for the majestic Meenakshi Temple and its rich spiritual atmosphere.",
    highlights: ["Spiritual", "Ancient", "Culture"],
    price: "₹6,499",
    image: maduraiImg
  },
  {
    id: 8,
    name: "Rameshwaram",
    category: "Temple",
    description: "A sacred pilgrimage destination known for the legendary Pamban bridge and spiritual significance.",
    highlights: ["Pilgrimage", "Bridges", "Sacred"],
    price: "₹7,999",
    image: rameshwaramImg
  }
];

const categories = ["All", "Beach", "Hill", "Temple", "Nature"];

const KeralaTourPackages = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredDestinations = activeFilter === "All" 
    ? destinations 
    : destinations.filter(dest => dest.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Beach": return <Palmtree size={14} />;
      case "Hill": return <Mountain size={14} />;
      case "Temple": return <Landmark size={14} />;
      case "Nature": return <Tree size={14} />;
      default: return <Compass size={14} />;
    }
  };

  return (
    <div className="kerala-tour-packages-page">
      <header className="page-header">
        <div className="container">
          <div className="tagline-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={18} style={{ color: '#2EC4B6' }} />
            <span className="tagline-text">Curated travel experiences</span>
          </div>
          <h1 className="section-title">Kerala <span className="highlight">Tour</span> Packages</h1>
          <p className="subheading">Explore the paradise of South India with our signature premium tours</p>
        </div>
      </header>

      <div className="container">
        <div className="filter-container">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <main className="packages-grid-page">
          {filteredDestinations.map(dest => (
            <article key={dest.id} className="destination-card-premium">
              <div className="card-image-wrapper">
                <img src={dest.image} alt={dest.name} loading="lazy" />
                <div className="image-overlay-gradient-card"></div>
                <div className="card-category-tag">
                  {getCategoryIcon(dest.category)}
                  <span>{dest.category}</span>
                </div>
              </div>
              <div className="card-content">
                <div className="card-content-inner">
                  <h3>{dest.name}</h3>
                  <p>{dest.description}</p>
                  <div className="highlights-grid">
                    {dest.highlights.map((h, i) => (
                      <span key={i} className="highlight-tag">
                        <Heart size={12} style={{ color: '#FF7F50' }} /> {h}
                      </span>
                    ))}
                  </div>
                  <div className="card-footer-premium" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                    <a
                      href={`https://wa.me/919072836004?text=Hello%2C%20I%20want%20to%20enquire%20about%20the%20${encodeURIComponent(dest.name)}%20Tour%20Package.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ padding: '10px 20px', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #25d366, #128c7e)', border: 'none', boxShadow: '0 4px 15px rgba(37,211,102,0.3)' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
};

export default KeralaTourPackages;

