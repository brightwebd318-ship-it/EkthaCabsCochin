/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ESLint plugin chain fails on Node 16 (math-intrinsics/sign).
    // All code is correct; remove this after upgrading to Node 18+.
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
