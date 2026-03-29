import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  allowedDevOrigins: [
    "*.allspark.build",
  ],
};

export default nextConfig;
