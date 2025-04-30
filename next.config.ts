import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gizmodo.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.rollingstone.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wordpress-assets.futurism.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.cbc.ca',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.cnn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'image.cnbcfm.com',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
