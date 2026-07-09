/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'github.com'],
    unoptimized: true,
  },
  webpack: {
    fallback: {
      fs: false,
      path: false,
      crypto: false,
    },
  },
};

module.exports = nextConfig;
