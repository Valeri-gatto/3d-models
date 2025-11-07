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
  images: {
    remotePatterns: [new URL('https://place-hold.it/**')],
  },
};

export default nextConfig;
