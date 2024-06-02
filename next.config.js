/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.NODE_ENV == 'development') {
    module.exports = {
        experimental: {
            serverActions: {
                allowedOrigins: ['localhost:3000'],
            },
        },
    }
}