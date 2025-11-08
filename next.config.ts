import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [{
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                "removeDimensions",
                'preset-default',
                "prefixIds"
              ]
            }
          }
        }],
        as: "*.js",
      },
    },
  },
  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
  images: {
    remotePatterns: [new URL('https://place-hold.it/**')],
  },
};

export default nextConfig;
