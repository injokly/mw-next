/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.kbanknow.com",
      },
    ],
  },
  env:{
    PUBLIC_URL:'https://m.kbanknow.com'
  }
}

module.exports = nextConfig;