/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'NAT Daemon\'s toys',
    description: 'Red team stuff',
    icon: 'https://nat-daemon.github.io/kasm-registry/1.1/logo.png',
    listUrl: 'https://nat-daemon.github.io/kasm-registry/',
    contactUrl: 'https://github.com/nat-daemon/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
