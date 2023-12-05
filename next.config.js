/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kbanknow.com",
      },
    ],
  },
  env: {
    PUBLIC_URL: "https://www.kbanknow.com",
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: "/ib20/act/:path*",
          destination: "https://m.kbanknow.com/ib20/act/:path*",
        },
        {
          source: "/resource/img/:path*",
          destination: "https://m.kbanknow.com/resource/img/:path*",
        },
      ],
    };
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add your custom webpack configurations here
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/about',
  //       headers: [
  //         {
  //           key: 'x-custom-header',
  //           value: 'my custom header value',
  //         },
  //         {
  //           key: 'User-Agent',
  //           value: 'Google Chrome',
  //         },
  //       ],
  //     },
  //   ]
  // },
};

module.exports = nextConfig;
