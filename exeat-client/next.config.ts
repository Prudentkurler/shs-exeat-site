import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This disables ESLint checks during builds
    ignoreDuringBuilds: true,
  },
  /* other config options here */
};

export default nextConfig;
