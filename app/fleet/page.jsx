import FleetPage from '@/components/FleetPage';

export const metadata = {
  title: 'Our Taxi Fleet & Luxury Cab Rentals in Kochi | Ektha Cabs',
  description:
    'Explore our premium, sanitized taxi fleet in Kochi. Hire clean hatchbacks, comfortable sedans (Dzire, Etios), popular SUVs (Innova Crysta, Ertiga), and luxury Force Urbania travellers.',
  alternates: { canonical: 'https://www.ekthacabscochin.com/fleet' },
  openGraph: {
    title: 'Our Taxi Fleet & Luxury Cab Rentals in Kochi | Ektha Cabs',
    description:
      'Explore our premium, sanitized taxi fleet in Kochi. Hire clean hatchbacks, comfortable sedans (Dzire, Etios), popular SUVs (Innova Crysta, Ertiga), and luxury Force Urbania travellers.',
    url: 'https://www.ekthacabscochin.com/fleet',
  },
};

export default function FleetPageRoute() {
  return <FleetPage />;
}
