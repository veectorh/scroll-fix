/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['speakout-website.s3.amazonaws.com', 'scontent-qro1-1.cdninstagram.com', 'fastly.picsum.photos']
  },
  async redirects() {
    return [
      {
        source: '/find-a-speaker',
        destination: '/speakers',
        permanent: true,
      },
      {
        source: '/booking',
        destination: '/inquiry-form',
        permanent: true, 
      },
      {
        source: '/about',
        destination: '/about-us',
        permanent: true, 
      },
      {
        source: '/about/history',
        destination: '/about-us',
        permanent: true, 
      },
      {
        source: '/about/staff-interns-and-board-directors',
        destination: '/our-team',
        permanent: true, 
      },
      {
        source: '/about/how-join-speak-outs-roster',
        destination: '/faq',
        permanent: true, 
      },
      {
        source: '/about/frequently-asked-questions',
        destination: '/faq',
        permanent: true, 
      },
      {
        source: '/about/join-speak-out-team',
        destination: '/faq',
        permanent: true, 
      },
      {
        source: '/fiscal-sponsorships',
        destination: '/sponsored-projects',
        permanent: true, 
      },
      {
        source: '/about/contact-us',
        destination: '/contact-us',
        permanent: true, 
      },
      {
        source: '/speaker/wise-tim',
        destination: '/speakers/tim-wise',
        permanent: true, 
      },
      {
        source: '/speaker/yosimar-reyes',
        destination: '/speakers/yosimar-reyes',
        permanent: true, 
      },
      {
        source: '/speaker/keith-knight',
        destination: '/speakers/keith-knight',
        permanent: true, 
      },
    ]
  },
}

module.exports = nextConfig
