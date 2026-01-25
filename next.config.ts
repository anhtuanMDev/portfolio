import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
    },
    trailingSlash: true, // still useful for GitHub Pages
};

export default nextConfig;
