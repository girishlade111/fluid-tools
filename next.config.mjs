/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/fluid-tools',
  assetPrefix: '/fluid-tools/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig