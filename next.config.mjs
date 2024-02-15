/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd4.alternativeto.net',
        
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        
      },
    ],
  },
};

export default nextConfig;
