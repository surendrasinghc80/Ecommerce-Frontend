import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.ignoreWarnings = [{ module: /sequelize/ }];
    return config;
  },
  images: {
    domains: ["s3.ap-south-1.amazonaws.com"],
  },
};

export default nextConfig;
