export default function sitemap() {
  const baseUrl = 'https://www.ekthacabscochin.com';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/book`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/fleet`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/kerala-tour-packages`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
  ];
}
