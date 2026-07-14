import KeralaTourPackages from '@/components/KeralaTourPackages';

export const metadata = {
  title: 'Kerala Tour Cab Packages | Munnar, Alleppey & Thekkady Taxi',
  description:
    'Plan your dream trip with our customized Kerala tour cab packages. Experienced local drivers, premium vehicles, and flexible itineraries for Munnar hills, Alleppey houseboats, & Varkala cliff beach.',
  alternates: { canonical: 'https://www.ekthacabscochin.com/kerala-tour-packages' },
  keywords: [
    'Kerala tour packages by cab',
    'Munnar taxi package',
    'Alleppey houseboat cab',
    'Thekkady wildlife taxi',
    'Kochi to Munnar cab service',
    'Kerala tourism taxi',
  ],
  openGraph: {
    title: 'Kerala Tour Cab Packages | Munnar, Alleppey & Thekkady Taxi',
    description:
      'Plan your dream trip with our customized Kerala tour cab packages. Experienced local drivers, premium vehicles, and flexible itineraries for Munnar, Alleppey & Varkala.',
    url: 'https://www.ekthacabscochin.com/kerala-tour-packages',
  },
};

// JSON-LD structured data for tour packages
const destinations = [
  { name: 'Munnar', description: 'Lush green tea plantations, cool climate, and misty hills.', price: '7499' },
  { name: 'Thekkady', description: 'Home to Periyar wildlife sanctuary, boating, and spice plantations.', price: '6999' },
  { name: 'Alleppey', description: 'World-famous backwaters and luxury houseboat stays.', price: '8999' },
  { name: 'Varkala', description: 'Unique cliff beach with stunning sunset views.', price: '5499' },
  { name: 'Thiruvananthapuram', description: 'The capital city blending rich heritage with urban life.', price: '4999' },
  { name: 'Kovalam', description: 'Iconic lighthouse beach with golden sands and pristine resorts.', price: '5999' },
  { name: 'Madurai', description: 'An ancient heritage city known for the majestic Meenakshi Temple.', price: '6499' },
  { name: 'Rameshwaram', description: 'A sacred pilgrimage destination known for the legendary Pamban bridge.', price: '7999' },
];

const tourSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: destinations.map((dest, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Product',
      name: `${dest.name} Tour Package - Ektha Cabs`,
      description: dest.description,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: dest.price,
        availability: 'https://schema.org/InStock',
        url: 'https://www.ekthacabscochin.com/kerala-tour-packages',
      },
    },
  })),
};

export default function KeralaTourPackagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
      />
      <KeralaTourPackages />
    </>
  );
}
