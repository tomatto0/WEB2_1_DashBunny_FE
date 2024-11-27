const path = require('path');

const nextConfig = {
  /* config options here */

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '/**',
      },
    ],
  },
  distDir: '.next',
  reactStrictMode: false,
};

module.exports = nextConfig;
