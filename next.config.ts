import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This disables ESLint checks during builds
    ignoreDuringBuilds: true,
  },
  // Enabling React Strict Mode
  reactStrictMode: true,


 
};

export default nextConfig;
