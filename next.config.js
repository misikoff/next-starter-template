/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withPWA(
  withMDX({
    images: {
      domains: [],
    },
    pwa: {
      dest: 'public',
    },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  })
)
