import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable strict mode for better development experience
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/yurucamp-campsite',
        destination: '/packages/nasu-highland-glamping',
        permanent: false,
      },
      {
        source: '/prefecture/yamanashi',
        destination: '/packages/digital-detox-starter',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
