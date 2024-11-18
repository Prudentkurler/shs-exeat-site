import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This disables ESLint checks during builds
    ignoreDuringBuilds: true,
  },
  // Enabling React Strict Mode
  reactStrictMode: true,
  // Custom webpack configuration
  webpack: (config, { isServer }) => {
    // Modify the config as needed
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  // Internationalization settings
  i18n: {
    locales: ['en', 'fr', 'es'], // List of languages your site supports
    defaultLocale: 'en', // Default language
  },
  // Page extensions
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  // Other config options
};

export default nextConfig;
