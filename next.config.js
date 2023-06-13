/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/react-app',
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
