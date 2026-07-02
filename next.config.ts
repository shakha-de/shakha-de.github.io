import type { NextConfig } from "next";
import { execSync } from "child_process";

let commitHash = "dev";
try {
  commitHash = execSync("git rev-parse --short HEAD").toString().trim();
} catch (e) {
  console.warn("Failed to get git commit hash, falling back to 'dev'.", e);
}

const nextConfig: NextConfig = {
  // Export a fully static site suitable for GitHub Pages
  output: "export",
  // Ensure paths end with a slash so exported pages map to folders
  trailingSlash: true,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_COMMIT_HASH: commitHash,
  },
};

export default nextConfig;
