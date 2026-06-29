import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve WebP only. Skipping AVIF avoids broken image rendering on Android
    // Chrome versions that claim AVIF support but decode incorrectly (Chrome 79-84).
    formats: ['image/webp'],
  },
};

export default nextConfig;
