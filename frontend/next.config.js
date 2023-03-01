/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['speakout-website.s3.amazonaws.com', 'scontent-qro1-1.cdninstagram.com', 'fastly.picsum.photos']
  }
}

module.exports = nextConfig
