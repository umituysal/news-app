/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  forceSwcTransforms: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
