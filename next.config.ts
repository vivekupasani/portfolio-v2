import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgs.search.brave.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.boulevardlegacy.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'microcam.in',
        port: '',
        pathname: '/**',
      }
    ],
  }
};

export default nextConfig;
