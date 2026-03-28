import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import VideoGallery from '../components/VideoGallery';
import KeralaPackages from '../components/KeralaPackages';
import SabarimalaService from '../components/SabarimalaService';
import LocalSightseeing from '../components/LocalSightseeing';
import GallerySection from '../components/GallerySection';
import VehicleSlider from '../components/VehicleSlider';
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
            <KeralaPackages />
            <SabarimalaService />
            <LocalSightseeing />
            <GallerySection />
            <VehicleSlider />
            <Services />
            <WhyChooseUs />
        </main>
    );
};

export default HomePage;
