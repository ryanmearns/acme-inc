/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  transpilePackages: ["@acmeinc/ui", "@acmeinc/tailwind-config", "@acmeinc/mutations", "@acmeinc/emails"]
}

module.exports = nextConfig
