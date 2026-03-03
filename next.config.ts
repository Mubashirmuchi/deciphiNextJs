import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "midnightblue-raccoon-734944.hostingersite.com",
        pathname: "/**",
      },
    ],
  },

};

export default nextConfig;
