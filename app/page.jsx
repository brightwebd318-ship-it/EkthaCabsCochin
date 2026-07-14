import Hero from '@/components/Hero';
import VideoGallery from '@/components/VideoGallery';
import KeralaPackages from '@/components/KeralaPackages';
import SabarimalaService from '@/components/SabarimalaService';
import LocalSightseeing from '@/components/LocalSightseeing';
import InterstateSection from '@/components/InterstateSection';
import GallerySection from '@/components/GallerySection';
import VehicleSlider from '@/components/VehicleSlider';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'Kochi Airport Taxi & Cab Services in Cochin | Ektha Cabs',
  description:
    'Book reliable Kochi airport taxi services & Kerala tour cabs. Safest taxi service in Ernakulam for tourists visiting from Mumbai, Delhi, Haryana, Pune, Bangalore, Chennai, Goa, Andhra Pradesh & Telangana.',
  alternates: { canonical: 'https://www.ekthacabscochin.com/' },
  openGraph: {
    title: 'Kochi Airport Taxi & Cab Services in Cochin | Ektha Cabs',
    description:
      'Book reliable Kochi airport taxi services & Kerala tour cabs. Safest taxi service in Ernakulam for tourists visiting from Mumbai, Delhi, Haryana, Pune, Bangalore, Chennai, Goa, Andhra Pradesh & Telangana.',
    url: 'https://www.ekthacabscochin.com/',
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <VideoGallery />
      <KeralaPackages />
      <SabarimalaService />
      <LocalSightseeing />
      <InterstateSection />
      <GallerySection />
      <VehicleSlider />
      <Services />
      <WhyChooseUs />
      <FAQ />
    </main>
  );
}
