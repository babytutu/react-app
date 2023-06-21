/** @type {import('next').NextConfig} */
const { execSync } = require('child_process')
const basePath = '/react-app'

// 获取最后一次提交的commitID,处理异常报错
let version
try {
  version = execSync('git rev-parse --short HEAD').toString().replace(/\n/, '')
} catch (e) {
  /* eslint-disable no-console */
  console.warn('Getting revision FAILED. Maybe this is not a git project.')
}

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  env: {
    basePath,
  },
  generateBuildId: () => version,
  transpilePackages: ['antd-mobile'],
  reactStrictMode: true,
}

module.exports = nextConfig
