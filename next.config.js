/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/personal-website" : "",
  assetPrefix: isProd ? "/personal-website/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/personal-website" : "",
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
