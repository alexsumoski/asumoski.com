/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    experimental: {
        appDir: true
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'framerusercontent.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'images.ctfassets.net',
          port: '',
        },
      ],
      env: {
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
        CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  }
