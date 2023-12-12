/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "https://bazarek.vercel.app/",
      "https://voytec-marketplace.up.railway.app/",
    ],
  },
};

module.exports = nextConfig;
