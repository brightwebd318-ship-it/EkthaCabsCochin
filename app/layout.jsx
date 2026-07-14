import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import MapSection from '@/components/MapSection';
import ScrollRestorer from '@/components/ScrollRestorer';

export const metadata = {
  metadataBase: new URL('https://www.ekthacabscochin.com'),
  title: {
    default: 'Ektha Cabs Cochin – Premium Taxi & Cab Services in Kochi',
    template: '%s | Ektha Cabs Cochin',
  },
  description:
    'Book the most reliable and premium taxi service in Cochin. Airport transfers, outstation trips, and 24/7 safe travel in Kochi, Ernakulam, and beyond.',
  keywords: [
    'cab service Kochi',
    'taxi Cochin',
    'airport transfer Kochi',
    'Kerala tour packages',
    'Ektha Cabs',
    'Ernakulam taxi',
    'Sabarimala taxi',
    'Kochi cab booking Mumbai',
    'Kochi airport taxi Bangalore',
    'Kerala taxi tour Pune',
    'Delhi to Cochin taxi',
    'Chennai to Kochi airport cab',
    'Hyderabad to Kochi cab',
    'Goa to Kerala tourist taxi',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Ektha Cabs Cochin',
    title: 'Ektha Cabs Cochin – Premium Taxi & Cab Services in Kochi',
    description:
      'Book reliable and premium taxi service in Cochin. Airport transfers, outstation trips, Kerala tours, and 24/7 safe travel.',
    url: 'https://www.ekthacabscochin.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ektha Cabs Cochin – Premium Taxi & Cab Services in Kochi',
    description:
      'Book reliable and premium taxi service in Cochin. Airport transfers, outstation trips, Kerala tours.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollRestorer />
        <div className="App">
          <Header />
          {children}
          <MapSection />
          <Footer />
          <FloatingCallButton />
          <FloatingWhatsAppButton />
        </div>
      </body>
    </html>
  );
}
