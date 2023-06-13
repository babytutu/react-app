/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/react-app',
  experimental: {
    trailingSlash: true,
    appDir: true,
  },
}

module.exports = nextConfig
