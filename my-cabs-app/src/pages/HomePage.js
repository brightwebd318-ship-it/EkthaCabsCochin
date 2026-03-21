import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import VideoGallery from '../components/VideoGallery';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';

const HomePage = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash]);

    return (
        <main>
            <Hero />
            <VideoGallery />
            <Services />
            <WhyChooseUs />
        </main>
    );
};

export default HomePage;
