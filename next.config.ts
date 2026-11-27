import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: false,
  partialPrefetching: false,
  images: {
    remotePatterns: [
      ...[
        "i.imghippo.com",
        "i.postimg.cc",
        "images.matprat.no",
        "images.pexels.com",
        "imgur.com",
        "koshereveryday.com",
        "pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev",
        "staticcookist.akamaized.net",
        "tarasmulticulturaltable.com",
        "tastythriftytimely.com",
        "www.coop.no",
        "www.foodandwine.com",
        "www.simplyrecipes.com",
        "www.tasteofhome.com",
      ].map((hostname) => ({
        protocol: "https" as const,
        hostname,
        port: "",
        pathname: "/**",
        search: "",
      })),

      // Noroff returns varying query strings for these two hosts.
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/**",
      },

      // Allow the exact query string currently returned by Noroff.
      {
        protocol: "https",
        hostname: "h2qshop.com",
        port: "",
        pathname: "/**",
        search: "?v=1753368463",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
