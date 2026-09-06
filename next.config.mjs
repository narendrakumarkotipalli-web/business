/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/aruh_pickles',
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/aruh_pickles',
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
