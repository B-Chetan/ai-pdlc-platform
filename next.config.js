/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'github.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
