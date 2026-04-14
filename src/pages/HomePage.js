import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import VideoGallery from '../components/VideoGallery';
import KeralaPackages from '../components/KeralaPackages';
import SabarimalaService from '../components/SabarimalaService';
import LocalSightseeing from '../components/LocalSightseeing';
import GallerySection from '../components/GallerySection';
import VehicleSlider from '../components/VehicleSlider';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';

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
            <Helmet>
                <title>Ektha Cabs Cochin - Premium Taxi & Cab Services in Kochi</title>
                <meta name="description" content="Book the most reliable and premium taxi service in Cochin. Airport transfers, outstation trips, and 24/7 safe travel in Kochi, Ernakulam, and beyond." />
                <link rel="canonical" href="https://www.ekthacabscochin.com/" />
            </Helmet>
            <Hero />
            <VideoGallery />
            <KeralaPackages />
            <SabarimalaService />
            <LocalSightseeing />
            <GallerySection />
            <VehicleSlider />
            <Services />
            <WhyChooseUs />
            <FAQ />
        </main>
    );
};

export default HomePage;
