import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.ignoreWarnings = [{ module: /sequelize/ }];
    return config;
  },
};

export default nextConfig;
