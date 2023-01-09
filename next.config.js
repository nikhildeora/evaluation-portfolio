/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    unoptimized : true,
    domains : ["avatars.githubusercontent.com","api.github.com"]
  }
}

module.exports = nextConfig
