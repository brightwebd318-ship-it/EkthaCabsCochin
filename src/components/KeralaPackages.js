import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
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
                            <Link to="/kerala-tour-packages" className="btn-primary">
                                Explore Packages <ChevronRight size={18} style={{ verticalAlign: 'middle', marginLeft: '5px' }} />
                            </Link>
                            <a
                                href="https://wa.me/919072836004?text=Hello%2C%20I%20want%20to%20enquire%20about%20Kerala%20Tour%20Packages."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline"
                            >
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

