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
  env: {
    PUBLIC_URL: 'https://m.kbanknow.com'
  },
  async rewrites() {
    return {
      fallback: [
        {
        source: '/ib20/act/:path*',
        destination: 'https://m.kbanknow.com/ib20/act/:path*'
        }
      ]
    }
  }
}

module.exports = nextConfig;