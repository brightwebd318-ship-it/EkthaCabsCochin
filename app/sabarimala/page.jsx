import SabarimalaPage from '@/components/SabarimalaPage';

export const metadata = {
  title: 'Sabarimala Taxi Packages 2026 | Cochin Airport to Pamba Cab',
  description:
    'Book reliable Sabarimala pilgrimage taxi packages from Cochin Airport & Railway Stations to Pamba. Check 2026 Sabarimala temple opening schedule, daily pooja timings, and get instant WhatsApp cab quotations.',
  alternates: { canonical: 'https://www.ekthacabscochin.com/sabarimala' },
  keywords: [
    'Sabarimala taxi service',
    'Cochin Airport to Pamba cab',
    'Sabarimala pilgrimage packages 2026',
    'Kochi to Sabarimala taxi fare',
    'Ernakulam to Pamba cab booking',
    'Sabarimala temple opening dates 2026',
    'Ayyappa pilgrimage cab Cochin',
    'Erumely Petta Thullal taxi'
  ],
  openGraph: {
    title: 'Sabarimala Taxi Packages 2026 | Cochin Airport to Pamba Cab',
    description:
      'Safe, reliable & comfortable Sabarimala taxi packages from Kochi. 2026 Temple opening timing checker, 1-Day & 2-Day packages, instant WhatsApp quote.',
    url: 'https://www.ekthacabscochin.com/sabarimala',
    type: 'website',
  },
};

// JSON-LD Structured Data for Sabarimala Pilgrimage Taxi Service
const sabarimalaSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  name: 'Sabarimala Pilgrimage Taxi Packages',
  description: 'Specialized 1-Day and 2-Day pilgrimage cab packages from Cochin International Airport & Ernakulam Stations to Sabarimala Pamba.',
  touristType: ['Pilgrims', 'Families', 'Devotees'],
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '3999',
    highPrice: '14999',
    offerCount: '3',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    url: 'https://www.ekthacabscochin.com/sabarimala',
  },
  provider: {
    '@type': 'TaxiService',
    name: 'Ektha Cabs Cochin',
    telephone: '+918606036004',
    url: 'https://www.ekthacabscochin.com',
  },
};

export default function SabarimalaRoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sabarimalaSchema) }}
      />
      <SabarimalaPage />
    </>
  );
}
