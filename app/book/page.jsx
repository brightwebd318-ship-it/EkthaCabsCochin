import BookingPage from '@/components/BookingPage';

export const metadata = {
  title: 'Online Taxi Booking Kochi | Cochin Airport Cab Reservation',
  description:
    'Book your taxi online in Kochi. Secure airport transfers, outstation tour cabs, and local sightseeing packages instantly. Affordable, fixed prices with no hidden charges.',
  alternates: { canonical: 'https://www.ekthacabscochin.com/book' },
  openGraph: {
    title: 'Online Taxi Booking Kochi | Cochin Airport Cab Reservation',
    description:
      'Book your taxi online in Kochi. Secure airport transfers, outstation tour cabs, and local sightseeing packages instantly. Affordable, fixed prices with no hidden charges.',
    url: 'https://www.ekthacabscochin.com/book',
  },
};

export default function BookPage() {
  return <BookingPage />;
}
