import SabarimalaPage from '@/components/SabarimalaPage';

export const metadata = {
  title: 'Sabarimala Taxi Services & Packages 2026 | Taxi for Sabarimala Trip from Kochi',
  description:
    'Best Sabarimala taxi services & pilgrimage packages for 2026. Book reliable taxi for Sabarimala trip from Cochin Airport (COK) & Ernakulam railway stations to Pamba. Check 2026 Sabarimala temple opening timings, Innova/Tempo Traveller fares & instant WhatsApp quote.',
  alternates: { canonical: 'https://www.ekthacabscochin.com/sabarimalapackage' },
  keywords: [
    'sabarimala taxi services',
    'sabarimala packages',
    'sabarimala trip',
    'taxi for sabarimala',
    'cab for sabarimala',
    'sabarimala tour packages',
    'cochin airport to sabarimala taxi fare',
    'kochi to pamba cab booking',
    'ernakulam to sabarimala taxi',
    'sabarimala innova taxi rental',
    'sabarimala tempo traveller package',
    'sabarimala 1 day express package',
    '2 day sabarimala pilgrimage trip',
    'sabarimala temple opening timings 2026',
    'ayyappa swamy trip taxi cochin',
    'erumely petta thullal cab package',
    'nilakkal pamba taxi service'
  ],
  openGraph: {
    title: 'Sabarimala Taxi Services & Packages 2026 | Taxi for Sabarimala Trip',
    description:
      'Book top-rated Sabarimala taxi services & packages from Kochi. Punctual 24/7 airport pickup, experienced hill drivers, 2026 Sabarimala temple schedule & instant WhatsApp quotation.',
    url: 'https://www.ekthacabscochin.com/sabarimalapackage',
    type: 'website',
    images: [
      {
        url: 'https://www.ekthacabscochin.com/images/assets/lord_ayyappan_divine.png',
        width: 1200,
        height: 630,
        alt: 'Sabarimala Taxi Services & Pilgrimage Packages - Ektha Cabs Cochin',
      },
    ],
  },
};

// JSON-LD Multi-Schema Markup for Rich Search Results (SEO Boost)
const sabarimalaTouristTripSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  name: 'Sabarimala Pilgrimage Taxi Packages & Trip Services',
  description: 'Specialized 1-Day, 2-Day & 3-Day pilgrimage taxi packages from Cochin Airport & Ernakulam Railway Stations to Sabarimala Pamba.',
  touristType: ['Pilgrims', 'Families', 'Devotees', 'Swamy Groups'],
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '3999',
    highPrice: '14999',
    offerCount: '3',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    url: 'https://www.ekthacabscochin.com/sabarimalapackage',
  },
  provider: {
    '@type': 'TaxiService',
    name: 'Ektha Cabs Cochin',
    telephone: '+918606036004',
    url: 'https://www.ekthacabscochin.com',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '250',
    },
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I book a taxi for Sabarimala trip from Cochin Airport (COK)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book a taxi for Sabarimala trip directly through our WhatsApp at +91 90728 36004 or call us. We provide 24/7 pickup from Cochin International Airport (COK) directly to Nilakkal/Pamba with experienced hill drivers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What vehicles are available for Sabarimala taxi packages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer Toyota Innova Crysta (7-seater), Maruti Dzire/Etios (4-seater sedan), Ertiga/Carens (6-seater), and 12/17-seater Tempo Travellers for larger Swamy groups.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the distance and travel time from Kochi to Sabarimala Pamba by cab?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The distance from Cochin Airport to Pamba is approximately 160 km, taking about 4.5 to 5 hours depending on traffic and route halts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are driver night charges or waiting fees extra for Sabarimala trips?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, Ektha Cabs provides transparent flat-rate Sabarimala packages inclusive of driver waiting time at Nilakkal parking, fuel, and night allowances.',
      },
    },
  ],
};

export default function SabarimalaRoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sabarimalaTouristTripSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SabarimalaPage />
    </>
  );
}
