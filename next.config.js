/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kbanknow.com",
      },
    ],
  },
  env: {
    PUBLIC_URL: 'https://www.kbanknow.com'
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/ib20/act/:path*',
          destination: 'https://www.kbanknow.com/ib20/act/:path*',
        },
        {
          source: '/resource/img/:path*',
          destination: 'https://m.kbanknow.com/resource/img/:path*',
        },
      ]
    }
  },
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
          {
            key: 'User-Agent',
            value: 'Google Chrome',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig;