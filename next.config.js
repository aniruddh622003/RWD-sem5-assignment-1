/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/RWD-sem5-assignment-1",
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
