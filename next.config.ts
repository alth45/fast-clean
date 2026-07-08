import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
      {
        protocol: "https",
        hostname: "**.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "**.imgix.net",
      },
      {
        protocol: "https",
        hostname: "**.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "**.storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "**.r2.dev",
      },
      {
        protocol: "https",
        hostname: "**.vercel-storage.com",
      },
      // Wildcard fallback — allow any HTTPS image for maximum CDN flexibility
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
