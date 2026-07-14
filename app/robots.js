export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://www.ekthacabscochin.com/sitemap.xml',
    host: 'https://www.ekthacabscochin.com',
  };
}
