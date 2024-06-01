/** @type {import('next').NextConfig} */
const nextConfig = {  experimental: {
    serverActions: {
      allowedOrigins: [
        'http://localhost',
        'https://stunning-broccoli-jjp6x9jvxrfpx4g-3000.app.github.dev/api',
      ]
    }
  }};

module.exports = nextConfig;
