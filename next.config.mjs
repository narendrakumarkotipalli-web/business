/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/aruh',
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      {
        // Redirect bare root (without basePath) to /aruh
        source: '/',
        destination: '/aruh',
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
