import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './KeralaPackages.css';
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
        name: "Munnar",
        description: "Lush green tea plantations and misty hills",
        image: munnarImg
    },
    {
        name: "Thekkady",
        description: "Enchanting forest, wildlife and lake adventures",
        image: thekkadyImg
    },
    {
        name: "Alleppey",
        description: "Serene backwaters and luxury houseboats",
        image: alleppeyImg
    },
    {
        name: "Varkala",
        description: "Dramatic cliff beach and golden sunset",
        image: varkalaImg
    },
    {
        name: "Thiruvananthapuram",
        description: "Historic city and Padmanabhaswamy temple",
        image: thiruvananthapuramImg
    },
    {
        name: "Kovalam",
        description: "Iconic lighthouse beach and ocean waves",
        image: kovalamImg
    },
    {
        name: "Madurai",
        description: "Meenakshi temple's majestic architecture",
        image: maduraiImg
    },
    {
        name: "Rameshwaram",
        description: "Pamban bridge over the azure ocean",
        image: rameshwaramImg
    }
];

const KeralaPackages = () => {
    return (
        <section className="kerala-packages" id="tour-packages">
            <div className="container">
                <div className="packages-grid">
                    {/* Left side: Floating Glass Card */}
                    <div className="packages-content">
                        <div className="tagline-wrapper">
                            <Sparkles size={18} className="highlight-icon" />
                            <span className="tagline-text">Exclusive Kerala Tours</span>
                        </div>
                        <h2 className="section-title">
                            Kerala <span className="highlight">Tour</span> Packages
                        </h2>
                        <p className="subheading">
                            Experience the luxury of "God’s Own Country" with our curated, 
                            hand-picked destinations that offer beauty, serenity, and adventure.
                        </p>
                        
                        <div className="cta-buttons">
                            <Link to="/kerala-tour-packages" className="btn-primary flex-center-btn">
                                Explore Packages
                            </Link>
                            <a
                                href="https://wa.me/919072836004?text=Hello%2C%20I%20want%20to%20enquire%20about%20Kerala%20Tour%20Packages."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline flex-center-btn wa-outline-btn"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                Enquire on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Right side: Modern Image Slider */}
                    <div className="packages-slider">
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination, EffectFade]}
                            spaceBetween={0}
                            slidesPerView={1}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                bulletClass: 'swiper-pagination-bullet site-bullet',
                                bulletActiveClass: 'swiper-pagination-bullet-active site-bullet-active',
                            }}
                            navigation={{
                                nextEl: '.package-next',
                                prevEl: '.package-prev',
                            }}
                            effect="fade"
                            fadeEffect={{ crossFade: true }}
                            loop={true}
                            className="premium-tour-swiper"
                        >
                            {destinations.map((dest, index) => (
                                <SwiperSlide key={index}>
                                    <div className="destination-card">
                                        <div className="image-wrapper">
                                            <img 
                                                src={dest.image} 
                                                alt={dest.name} 
                                                loading="lazy"
                                                className="destination-image"
                                            />
                                            <div className="image-overlay-gradient"></div>
                                            <div className="destination-overlay-text">
                                                <h3 className="destination-name-title">{dest.name}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            
                            {/* Navigation Arrows */}
                            <div className="slider-nav-overlay desktop-only">
                                <button className="nav-btn-circle package-prev">
                                    <ArrowLeft size={20} />
                                </button>
                                <button className="nav-btn-circle package-next">
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeralaPackages;

