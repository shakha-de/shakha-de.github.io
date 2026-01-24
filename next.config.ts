import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export a fully static site suitable for GitHub Pages
  output: "export",
  // Ensure paths end with a slash so exported pages map to folders
  trailingSlash: true,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
