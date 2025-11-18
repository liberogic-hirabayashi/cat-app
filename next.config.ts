import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn2.thecatapi.com',
          pathname: '/**', // すべてのパスを許可
        },
      
      ],
    },
};

export default nextConfig;
