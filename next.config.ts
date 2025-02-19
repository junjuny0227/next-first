import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    staleTimes: {
      dynamic: 60 * 10,
    },
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

export default nextConfig;
