/** @type {import('next').NextConfig} */
const basePath = '/react-app'

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  env: {
    basePath,
  },
}

module.exports = nextConfig
